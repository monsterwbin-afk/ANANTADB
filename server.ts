import 'dotenv/config';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// -------------------------------------------------------------------
// 1. SUPABASE CLIENT & DUAL-MODE SETUP
// -------------------------------------------------------------------
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';

let supabase: any = null;
let useSupabase = false;

if (SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.startsWith('http')) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    useSupabase = true;
    console.log('[Database] Supabase credentials loaded. Client initialized.');
  } catch (error) {
    console.error('[Database] Failed to initialize Supabase client:', error);
  }
} else {
  console.log('[Database] No Supabase credentials found. Checked for GitHub persistence.');
}

// -------------------------------------------------------------------
// 1.5 GITHUB REPOSITORY FALLBACK STORAGE INTEGRATION (Absolute Free Persistence)
// -------------------------------------------------------------------
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const GITHUB_REPO = process.env.GITHUB_REPO || '';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

let useGitHub = false;
if (GITHUB_TOKEN && GITHUB_REPO) {
  useGitHub = true;
  console.log(`[Database] GitHub Integration enabled. Syncing with repository: ${GITHUB_REPO} on branch: ${GITHUB_BRANCH}`);
}

interface LocalRole {
  id: string;
  name: string;
  avatar_url: string;
  color: string;
  total_votes: number;
}

interface LocalVote {
  role_id: string;
  voter_ip: string;
  voter_token?: string; // Client-side UUID
  created_at: string; // YYYY-MM-DD
}

interface LocalDB {
  roles: LocalRole[];
  votes: LocalVote[];
}

const DEFAULT_DB: LocalDB = {
  roles: [
    { id: 'taffy', name: '塔菲', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-tafei_0ed12004.jpg', color: '#eab308', total_votes: 69 },
    { id: 'richie', name: '里栖', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-lixi_a69544ea.jpg', color: '#4ade80', total_votes: 67 },
    { id: 'lykaia', name: '赛墨', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-saimo_d1a180a7.jpg', color: '#ff4d6d', total_votes: 45 },
    { id: 'captain', name: '队长', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-captain_c7ae1344.jpg', color: '#00e5ff', total_votes: 43 }
  ],
  votes: []
};

// In-Memory Read Caching for GitHub to prevent exceeding API limits
let cachedGitHubDB: LocalDB | null = null;
let cachedGitHubSha: string = '';
let lastFetchTime = 0;
const CACHE_MIN_FRESH_MS = 10000; // 10 seconds Cache TTL for read-heavy requests

async function fetchFromGitHub(): Promise<{ db: LocalDB; sha: string }> {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/votes-db.json?ref=${GITHUB_BRANCH}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'User-Agent': 'Node-Ananta-Vote-App',
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!response.ok) {
    if (response.status === 404) {
      console.log(`[GitHub DB] votes-db.json not found in GitHub Repo. Returning default initial values.`);
      return { db: DEFAULT_DB, sha: '' };
    }
    throw new Error(`GitHub fetch failed: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as any;
  const contentBase64 = json.content.replace(/\s/g, '');
  const decodedStr = Buffer.from(contentBase64, 'base64').toString('utf8');
  const db = JSON.parse(decodedStr) as LocalDB;

  // Sync back to local file path for local backup resilience
  try {
    const backupDir = path.dirname(LOCAL_DB_PATH);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(db, null, 2), 'utf8');
  } catch (_) {}

  return { db, sha: json.sha };
}

async function writeToGitHub(db: LocalDB, currentSha: string): Promise<string> {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/votes-db.json`;
  const contentBase64 = Buffer.from(JSON.stringify(db, null, 2), 'utf8').toString('base64');
  
  const payload: any = {
    message: 'Update voting statistics [skip ci]',
    content: contentBase64,
    branch: GITHUB_BRANCH
  };
  
  if (currentSha) {
    payload.sha = currentSha;
  }

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Node-Ananta-Vote-App',
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errMsg = await response.text();
    throw new Error(`GitHub response save error: ${response.status} ${response.statusText} - ${errMsg}`);
  }

  const json = (await response.json()) as any;
  return json.content.sha;
}

async function getGitHubDB(): Promise<{ db: LocalDB; sha: string }> {
  const now = Date.now();
  if (cachedGitHubDB && (now - lastFetchTime < CACHE_MIN_FRESH_MS)) {
    return { db: cachedGitHubDB, sha: cachedGitHubSha };
  }
  
  try {
    const { db, sha } = await fetchFromGitHub();
    cachedGitHubDB = db;
    cachedGitHubSha = sha;
    lastFetchTime = now;
    return { db, sha };
  } catch (err) {
    console.warn('[GitHub DB] Fetch connection error, using local memory cache or physical file storage:', err);
    if (cachedGitHubDB) {
      return { db: cachedGitHubDB, sha: cachedGitHubSha };
    }
    const localDb = ensureLocalDB();
    return { db: localDb, sha: '' };
  }
}

// -------------------------------------------------------------------
// 2. LOCAL FALLBACK DB IMPLEMENTATION (Ensures instant out-of-box operation)
// -------------------------------------------------------------------
const LOCAL_DB_PATH = path.join(process.cwd(), 'data', 'votes-db.json');

function ensureLocalDB(): LocalDB {
  const dir = path.dirname(LOCAL_DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_DB_PATH)) {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(DEFAULT_DB, null, 2), 'utf8');
    return DEFAULT_DB;
  }
  try {
    const raw = fs.readFileSync(LOCAL_DB_PATH, 'utf8');
    return JSON.parse(raw) as LocalDB;
  } catch (e) {
    console.error('[Local DB] Error reading DB file, recreating default:', e);
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(DEFAULT_DB, null, 2), 'utf8');
    return DEFAULT_DB;
  }
}

function saveLocalDB(data: LocalDB) {
  try {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error('[Local DB] Failed to save DB file:', e);
  }
}

// Get clean client IP address
function getClientIp(req: express.Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    if (typeof forwarded === 'string') {
      return forwarded.split(',')[0].trim();
    } else if (Array.isArray(forwarded)) {
      return forwarded[0].trim();
    }
  }
  const realIp = req.headers['x-real-ip'];
  if (realIp && typeof realIp === 'string') {
    return realIp.trim();
  }
  return req.socket.remoteAddress || '127.0.0.1';
}

// -------------------------------------------------------------------
// 3. API ENDPOINTS
// -----------------------------------------------------// GET /api/votes - Retrieves current statistics, total visitor count, and characters the client IP / Token voted for today.
app.get('/api/votes', async (req, res) => {
  // Disable caching for this dynamic real-time status API
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  const userIp = getClientIp(req);
  const voterToken = req.query.voter_token as string | undefined;
  
  // Accept and validate client's local timezone date string, with UTC split boundary fallback
  const clientDate = req.query.client_date as string | undefined;
  const today = clientDate && /^\d{4}-\d{2}-\d{2}$/.test(clientDate)
    ? clientDate
    : new Date().toISOString().split('T')[0];

  console.log(`[API GET /api/votes] Requested by IP: ${userIp}, Token: ${voterToken}, targetDate: ${today}`);

  if (useSupabase) {
    try {
      // 1. Fetch roles
      const { data: dbRoles, error: rolesError } = await supabase
        .from('roles')
        .select('id, name, avatar_url, color, total_votes')
        .order('total_votes', { ascending: false });

      if (rolesError) throw rolesError;

      // 2. Fetch today's votes for this specific user device token to identify which ones are disabled
      let queryVotes = supabase
        .from('votes')
        .select('role_id')
        .eq('created_at', today);

      if (voterToken) {
        queryVotes = queryVotes.eq('voter_token', voterToken);
      } else {
        queryVotes = queryVotes.eq('voter_ip', userIp);
      }

      const { data: todayVotes, error: votesError } = await queryVotes;

      if (votesError) throw votesError;

      // 3. Fetch total distinct voters using voter_token first, falling back to voter_ip
      const { data: voterCountRes, error: countError } = await supabase
        .rpc('get_total_voters'); 
      
      let totalVoters = 0;
      if (!countError && voterCountRes !== null) {
        totalVoters = Number(voterCountRes);
      } else {
        // Fallback count query if custom function wasn't provisioned yet
        const { data: allVotes, error: fallError } = await supabase
          .from('votes')
          .select('voter_ip, voter_token');
        
        if (!fallError && allVotes) {
          totalVoters = new Set(allVotes.map((v: any) => v.voter_token || v.voter_ip).filter(Boolean)).size;
        } else {
          totalVoters = 0;
        }
      }

      return res.json({
        success: true,
        mode: 'supabase',
        roles: dbRoles,
        totalVoters: totalVoters || 0,
        userVotedToday: (todayVotes || []).map((v: any) => v.role_id)
      });
    } catch (e: any) {
      console.warn('[Database] Supabase query failed, falling back to local file DB dynamically.', e);
      // Suppress permanent crash by falling back to local DB
    }
  }

  // GitHub backup/sync read route
  if (useGitHub) {
    try {
      const { db } = await getGitHubDB();
      const userVotedToday = db.votes
        .filter(v => (voterToken ? v.voter_token === voterToken : v.voter_ip === userIp) && v.created_at === today)
        .map(v => v.role_id);

      const uniqueVoters = new Set([
        ...db.votes.map(v => v.voter_ip),
        ...(db.votes.filter(v => v.voter_token).map(v => v.voter_token!))
      ]);
      const totalVoters = uniqueVoters.size;
      const sortedRoles = [...db.roles].sort((a, b) => b.total_votes - a.total_votes);

      return res.json({
        success: true,
        mode: 'github',
        roles: sortedRoles,
        totalVoters: totalVoters,
        userVotedToday
      });
    } catch (e: any) {
      console.warn('[GitHub DB] GET query failed, falling back to local file DB.', e);
    }
  }

  // Fallback to Local DB logic
  const db = ensureLocalDB();
  const userVotedToday = db.votes
    .filter(v => (voterToken ? v.voter_token === voterToken : v.voter_ip === userIp) && v.created_at === today)
    .map(v => v.role_id);

  // Count distinct voter IPs or voter_tokens to reflect the exact real situation
  const uniqueVoters = new Set([
    ...db.votes.map(v => v.voter_ip),
    ...(db.votes.filter(v => v.voter_token).map(v => v.voter_token!))
  ]);
  const totalVoters = uniqueVoters.size;

  // Ensure initial roles exist in output format sorted by total_votes
  const sortedRoles = [...db.roles].sort((a, b) => b.total_votes - a.total_votes);

  return res.json({
    success: true,
    mode: 'local',
    roles: sortedRoles,
    totalVoters: totalVoters, // Genuinely start from 0
    userVotedToday
  });
});

// POST /api/votes/vote - Registers a vote for a specific role
app.post('/api/votes/vote', async (req, res) => {
  const { roleId, voterToken, clientDate } = req.body;
  const userIp = getClientIp(req);
  
  // Accept and validate client's local timezone date string, with UTC split boundary fallback
  const today = clientDate && /^\d{4}-\d{2}-\d{2}$/.test(clientDate)
    ? clientDate
    : new Date().toISOString().split('T')[0];

  console.log(`[API POST /api/votes/vote] Request: roleId=${roleId}, IP=${userIp}, targetDate=${today}`);

  if (!roleId) {
    return res.status(400).json({ success: false, message: '角色ID不能为空' });
  }

  if (useSupabase) {
    try {
      // 1. Check if voted today for this request's specific character (1 vote per character per day rule)
      let query = supabase.from('votes').select('id').eq('role_id', roleId).eq('created_at', today);
      if (voterToken) {
        query = query.eq('voter_token', voterToken);
      } else {
        query = query.eq('voter_ip', userIp);
      }
      const { data: existingVote, error: checkError } = await query.maybeSingle();

      if (checkError) throw checkError;

      if (existingVote) {
        return res.json({
          success: false,
          message: '今天您已经为该角色投过票了，每个角色每天限投1票'
        });
      }

      // 2. Insert vote record
      const { error: insertError } = await supabase
        .from('votes')
        .insert({
          role_id: roleId,
          voter_ip: userIp,
          voter_token: voterToken || null,
          created_at: today
        });

      if (insertError) {
        if (insertError.code === '23505') { // postgres unique constraint conflict
          return res.json({
            success: false,
            message: '今天您已经为该角色投过票了，每个角色每天限投1票'
          });
        }
        throw insertError;
      }

      // 3. Atomically increment vote
      // Try to call RPC. If RPC is not available, do a raw UPDATE
      const { error: rpcError } = await supabase.rpc('increment_vote', { role_id_param: roleId });

      if (rpcError) {
        console.warn('[Database] RPC increment_vote failed, attempting direct cell increment...', rpcError);
        const { data: roleCurrent } = await supabase.from('roles').select('total_votes').eq('id', roleId).maybeSingle();
        if (roleCurrent) {
          await supabase
            .from('roles')
            .update({ total_votes: (roleCurrent.total_votes || 0) + 1 })
            .eq('id', roleId);
        }
      }

      // 4. Return updated statistics and lists count
      let queryVotes = supabase.from('votes').select('role_id').eq('created_at', today);
      if (voterToken) {
        queryVotes = queryVotes.eq('voter_token', voterToken);
      } else {
        queryVotes = queryVotes.eq('voter_ip', userIp);
      }
      const { data: todayVotes } = await queryVotes;

      const { data: dbRoles } = await supabase
        .from('roles')
        .select('id, name, avatar_url, color, total_votes')
        .order('total_votes', { ascending: false });

      // Count total distinct voters again using voter_token first, falling back to voter_ip
      const { data: voterCountRes } = await supabase.rpc('get_total_voters');
      let totalVoters = 0;
      if (voterCountRes !== null) {
        totalVoters = Number(voterCountRes);
      } else {
        const { data: allVotes } = await supabase.from('votes').select('voter_ip, voter_token');
        if (allVotes) {
          totalVoters = new Set(allVotes.map((v: any) => v.voter_token || v.voter_ip).filter(Boolean)).size;
        } else {
          totalVoters = 1;
        }
      }

      return res.json({
        success: true,
        message: '投票成功',
        roles: dbRoles,
        totalVoters: totalVoters || 1,
        userVotedToday: (todayVotes || []).map((v: any) => v.role_id)
      });

    } catch (e: any) {
      console.warn('[Database] Supabase write failed. Falling back to local file DB.', e);
    }
  }

  // GitHub backup/sync write route
  if (useGitHub) {
    try {
      const { db, sha } = await getGitHubDB();

      // Check if IP or Voter Token already cast a vote for this specific character today
      const alreadyVoted = db.votes.some(v => 
        v.role_id === roleId &&
        (voterToken ? v.voter_token === voterToken : v.voter_ip === userIp) && 
        v.created_at === today
      );
      if (alreadyVoted) {
        return res.json({
          success: false,
          message: '今天您已经为该角色投过票了，每个角色每天限投1票'
        });
      }

      // Register vote
      db.votes.push({
        role_id: roleId,
        voter_ip: userIp,
        voter_token: voterToken || undefined,
        created_at: today
      });

      // Increment total_votes
      const role = db.roles.find(r => r.id === roleId);
      if (role) {
        role.total_votes = (role.total_votes || 0) + 1;
      }

      // Update memory cache instantly
      cachedGitHubDB = db;
      lastFetchTime = Date.now();

      // Commit asynchronously to GitHub repo using SHA
      try {
        const newSha = await writeToGitHub(db, sha);
        cachedGitHubSha = newSha;
        console.log('[GitHub DB] Created commit successfully. New SHA:', newSha);
      } catch (writeErr) {
        console.error('[GitHub DB] Failed writing to GitHub, saving to local fs as safety backup:', writeErr);
        saveLocalDB(db);
      }

      const updatedVotedToday = db.votes
        .filter(v => (voterToken ? v.voter_token === voterToken : v.voter_ip === userIp) && v.created_at === today)
        .map(v => v.role_id);

      const uniqueVoters = new Set([
        ...db.votes.map(v => v.voter_ip),
        ...(db.votes.filter(v => v.voter_token).map(v => v.voter_token!))
      ]);
      const totalVoters = uniqueVoters.size;
      const sortedRolesOutput = [...db.roles].sort((a, b) => b.total_votes - a.total_votes);

      return res.json({
        success: true,
        message: '投票成功',
        roles: sortedRolesOutput,
        totalVoters: totalVoters,
        userVotedToday: updatedVotedToday
      });

    } catch (e: any) {
      console.warn('[GitHub DB] POST operation failed, falling back to local file system DB.', e);
    }
  }

  // Local fallback persistence write
  const db = ensureLocalDB();

  // Check if IP or Voter Token already cast a vote for this specific character today
  const alreadyVoted = db.votes.some(v => 
    v.role_id === roleId &&
    (voterToken ? v.voter_token === voterToken : v.voter_ip === userIp) && 
    v.created_at === today
  );
  if (alreadyVoted) {
    return res.json({
      success: false,
      message: '今天您已经为该角色投过票了，每个角色每天限投1票'
    });
  }

  // Register vote
  db.votes.push({
    role_id: roleId,
    voter_ip: userIp,
    voter_token: voterToken || undefined,
    created_at: today
  });

  // Increment total_votes
  const role = db.roles.find(r => r.id === roleId);
  if (role) {
    role.total_votes = (role.total_votes || 0) + 1;
  }

  saveLocalDB(db);

  const updatedVotedToday = db.votes
    .filter(v => (voterToken ? v.voter_token === voterToken : v.voter_ip === userIp) && v.created_at === today)
    .map(v => v.role_id);

  const uniqueVoters = new Set([
    ...db.votes.map(v => v.voter_ip),
    ...(db.votes.filter(v => v.voter_token).map(v => v.voter_token!))
  ]);
  const totalVoters = uniqueVoters.size;
  const sortedRolesOutput = [...db.roles].sort((a, b) => b.total_votes - a.total_votes);

  return res.json({
    success: true,
    message: '投票成功',
    roles: sortedRolesOutput,
    totalVoters: totalVoters,
    userVotedToday: updatedVotedToday
  });
});


// -------------------------------------------------------------------
// 4. VITE MIDDLEWARE / STATIC FILES
// -------------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
