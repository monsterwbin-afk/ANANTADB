import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Flame, Info, Heart, Check, Loader2, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

// Safe browser Supabase configuration fallback for Static Sites (e.g. GitHub Pages)
const SBS_URL = (import.meta as any).env?.VITE_SUPABASE_URL || (import.meta as any).env?.SUPABASE_URL || '';
const SBS_ANON = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || (import.meta as any).env?.SUPABASE_ANON_KEY || '';

let clientSupabase: any = null;
if (SBS_URL && SBS_ANON && SBS_URL.startsWith('http')) {
  try {
    clientSupabase = createClient(SBS_URL, SBS_ANON);
    console.log('[Voting] Static site fallback client-side Supabase initialized successfully.');
  } catch (err) {
    console.error('[Voting] Error creating client-side Supabase client:', err);
  }
}

// International Language Translations for the Voting UI (Finalized Results)
const LOCALES: Record<string, Record<string, string>> = {
  EN: {
    title: "🏆 Leaderboard Final",
    sub: "🔒 Voting Closed! The popularity contest has successfully concluded on September 6, 2026. Here are the final results.",
    voted: "Closed",
    vote: "Closed",
    total: "Total: {count} participants · Final Standings",
    voting: "Closed...",
    expand: "View Full Final Rankings ➔",
    rankTitle: "Character Leaderboard (Final)",
    close: "Close"
  },
  CN: {
    title: "🏆 人气榜最终结果",
    sub: "🔒 投票已截止！人气投票活动已于2026年9月6日圆满结束，感谢各位探测员的热情参与！以下为最终票选排名结果公示。",
    voted: "已截止",
    vote: "投票截止",
    total: "共 {count} 人参与 · 最终排行",
    voting: "已截止...",
    expand: "查看全部最终人气排行 ➔",
    rankTitle: "人气角色最终排行榜",
    close: "关闭"
  },
  TW: {
    title: "🏆 人氣榜最終結果",
    sub: "🔒 投票已截止！人氣投票活動已於2026年9月6日圓滿結束，感謝各位探測員的热情參與！以下為最終票選排名結果公示。",
    voted: "已截止",
    vote: "投票截止",
    total: "共 {count} 人參與 · 最終排行",
    voting: "已截止...",
    expand: "查看全部最終人氣排行 ➔",
    rankTitle: "人氣角色最終排行榜",
    close: "關閉"
  },
  JP: {
    title: "🏆 最終投票結果",
    sub: "🔒 投票は終了しました！キャラクター人気投票は2026年9月6日をもって締め切られました。ご参加ありがとうございました！",
    voted: "終了",
    vote: "投票終了",
    total: "参加者数: {count}人 · 最終結果",
    voting: "終了...",
    expand: "最終ランキングを見る ➔",
    rankTitle: "キャラクター最終投票結果",
    close: "閉じる"
  },
  KR: {
    title: "🏆 최종 투표 결과",
    sub: "🔒 투표 종료! 인기 투표가 2026년 9月 6日 성공적으로 종료되었습니다. 참여해 주셔서 감사합니다! 최종 순위입니다.",
    voted: "종료됨",
    vote: "투표 종료",
    total: "{count}명 참여 · 최종 순위",
    voting: "종료됨...",
    expand: "전체 최종 순위 보기 ➔",
    rankTitle: "캐릭터 최종 투표 결과",
    close: "닫기"
  },
  DE: {
    title: "🏆 Endergebnisse",
    sub: "🔒 Abstimmung beendet! Der Beliebtheits-Wettbewerb wurde am 6. September 2026 geschlossen. Vielen Dank für eure Teilnahme!",
    voted: "Beendet",
    vote: "Geschlossen",
    total: "Insgesamt: {count} Stimmen · Endergebnis",
    voting: "Geschlossen...",
    expand: "Endergebnisse anzeigen ➔",
    rankTitle: "Endergebnisse der Abstimmung",
    close: "Schließen"
  },
  FR: {
    title: "🏆 Résultats Finaux",
    sub: "🔒 Vote terminé ! Le concours de popularité s'est achevé le 6 septembre 2026. Merci à tous d'avoir voté !",
    voted: "Terminé",
    vote: "Clos",
    total: "Total : {count} participants · Résultats",
    voting: "Clos...",
    expand: "Afficher le classement final ➔",
    rankTitle: "Classement Final Officiel",
    close: "Fermer"
  },
  IT: {
    title: "🏆 Classifica Finale",
    sub: "🔒 Votazioni chiuse! Il sondaggio si è concluso il 6 settembre 2026. Grazie a tutti i partecipanti! Ecco i risultati ufficiali.",
    voted: "Chiuso",
    vote: "Chiuso",
    total: "Totale: {count} votanti · Risultati Finali",
    voting: "Chiuso...",
    expand: "Mostra classifica finale ➔",
    rankTitle: "Classifica Ufficiale dei Personaggi",
    close: "Chiudi"
  },
  RU: {
    title: "🏆 Окончательные итоги",
    sub: "🔒 Голосование закрыто! Рейтинг популярности официально завершен 6 сентября 2026 года. Спасибо за участие!",
    voted: "Закрыто",
    vote: "Закрыто",
    total: "Всего участников: {count} · Окончательный итог",
    voting: "Закрыто...",
    expand: "Показать финальный рейтинг ➔",
    rankTitle: "Окончательный рейтинг персонажей",
    close: "Закрыть"
  }
};

export interface Role {
  id: string;
  name: string;
  avatar_url: string;
  color: string;
  total_votes: number;
}

const CHARACTER_NAMES: Record<string, Record<string, string>> = {
  EN: { taffy: "TAFFY", richie: "RICHIE", lykaia: "SEYMOUR", captain: "CAPTAIN" },
  CN: { taffy: "塔菲", richie: "里奇", lykaia: "赛墨", captain: "队长" },
  TW: { taffy: "塔菲", richie: "里奇", lykaia: "賽墨", captain: "隊長" },
  JP: { taffy: "タフィー", richie: "リッチー", lykaia: "セイモア", captain: "キャプテン" },
  KR: { taffy: "태피", richie: "리치", lykaia: "세이모어", captain: "선장" },
  DE: { taffy: "TOFFEE", richie: "RICHIE", lykaia: "SEYMOUR", captain: "KAPITÄN" },
  FR: { taffy: "TAFFE", richie: "RICHIE", lykaia: "SEYMOUR", captain: "CAPITAINE" },
  IT: { taffy: "TAFFY", richie: "RICHIE", lykaia: "SEYMOUR", captain: "CAPITANO" },
  RU: { taffy: "ТАФФИ", richie: "РИЧИ", lykaia: "СЕЙМУР", captain: "КАПИТАН" }
};

export function getLocalizedRoleName(roleId: string, serverName: string, lang: string): string {
  const normId = (roleId || '').toLowerCase();
  const langUpper = (lang || 'EN').toUpperCase();
  const dict = CHARACTER_NAMES[langUpper as keyof typeof CHARACTER_NAMES];
  if (dict && dict[normId]) {
    return dict[normId];
  }
  return serverName;
}

function getLocalDateString(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getOrCreateVoterToken(): string {
  try {
    let token = localStorage.getItem('ananta_voter_uuid');
    if (!token) {
      token = 'vt_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
      localStorage.setItem('ananta_voter_uuid', token);
    }
    return token;
  } catch (e) {
    return 'vt_anonymous';
  }
}

// Shared store for Voting state to perfectly synchronize desktop and mobile instances on the same page
interface VotingStore {
  roles: Role[];
  totalVoters: number;
  votedIds: string[];
  isVoting: string | null;
  dbMode: 'supabase' | 'github' | 'local' | 'offline';
  toastMsg: string | null;
}

const DEFAULT_ROLES: Role[] = [
  { id: 'taffy', name: '塔菲', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-tafei_0ed12004.jpg', color: '#eab308', total_votes: 69 },
  { id: 'richie', name: '里栖', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-lixi_a69544ea.jpg', color: '#4ade80', total_votes: 67 },
  { id: 'lykaia', name: '赛墨', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-saimo_d1a180a7.jpg', color: '#ff4d6d', total_votes: 45 },
  { id: 'captain', name: '队长', avatar_url: 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-captain_c7ae1344.jpg', color: '#00e5ff', total_votes: 43 }
];

let storeState: VotingStore = {
  roles: (() => {
    try {
      const cached = localStorage.getItem('ananta_cached_roles');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed) && parsed.length > 0) {
          // Invalidate legacy mock numbers (1256, 942, etc.)
          const hasLegacyMock = parsed.some((r: any) => (r.total_votes || 0) >= 400 || r.total_votes === 1256 || r.total_votes === 1257);
          if (!hasLegacyMock) return parsed;
          localStorage.removeItem('ananta_cached_roles');
        }
      }
    } catch (_) {}
    return DEFAULT_ROLES;
  })(),
  totalVoters: (() => {
    try {
      const cached = localStorage.getItem('ananta_cached_total_voters');
      if (cached) {
        return parseInt(cached, 10) || 0;
      }
    } catch (_) {}
    return 0;
  })(),
  votedIds: (() => {
    try {
      const todayStr = getLocalDateString();
      const localKey = `ananta_voted_${todayStr}`;
      const localStored = localStorage.getItem(localKey);
      return localStored ? JSON.parse(localStored) : [];
    } catch (_) {
      return [];
    }
  })(),
  isVoting: null,
  dbMode: 'offline',
  toastMsg: null
};

const storeListeners = new Set<() => void>();

function updateStore(next: Partial<VotingStore>) {
  storeState = { ...storeState, ...next };
  storeListeners.forEach(listener => listener());
}

export function VotingWidget() {
  const { lang } = useLanguage();
  const [, forceUpdate] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Subscribe to the shared store updates
  useEffect(() => {
    const handleUpdate = () => forceUpdate({});
    storeListeners.add(handleUpdate);
    return () => {
      storeListeners.delete(handleUpdate);
    };
  }, []);

  const { roles, totalVoters, votedIds, isVoting, dbMode, toastMsg } = storeState;

  // Translate labels based on active user context
  const text = LOCALES[lang as keyof typeof LOCALES] || LOCALES.EN;

  const triggerToast = (msg: string) => {
    updateStore({ toastMsg: msg });
    setTimeout(() => {
      if (storeState.toastMsg === msg) {
        updateStore({ toastMsg: null });
      }
    }, 3000);
  };

  // Fetch updated votes on load, and set a safety local caching mechanism
  const fetchVotes = async (silent = false) => {
    try {
      const token = getOrCreateVoterToken();
      const clientDateStr = getLocalDateString();
      const res = await fetch(`/api/votes?voter_token=${encodeURIComponent(token)}&client_date=${clientDateStr}&_t=${Date.now()}`);
      
      if (res.status === 429) {
        updateStore({ dbMode: 'local' });
        if (!silent) console.warn('[Voting] Rate limited by server (status 429). Falling back to cached data silently.');
        return;
      }
      
      if (!res.ok) {
        throw new Error(`Server API returned status ${res.status}`);
      }
      
      const data = await res.json();
      if (data && data.success) {
        let mergedRoles = data.roles || [];
        
        // Ensure perfect sorting by total_votes descending
        mergedRoles.sort((a: Role, b: Role) => (b.total_votes || 0) - (a.total_votes || 0));
        
        try {
          localStorage.setItem('ananta_cached_roles', JSON.stringify(mergedRoles));
        } catch (_) {}
        
        const targetTotalVoters = data.totalVoters ?? 0;
        try {
          localStorage.setItem('ananta_cached_total_voters', String(targetTotalVoters));
        } catch (_) {}
        
        // Sync voted IDs directly from remote IP checking database as truth
        const todayStr = getLocalDateString();
        const localKey = `ananta_voted_${todayStr}`;
        const serverVotedList = data.userVotedToday || [];
        const mergedVoted = Array.from(new Set([...storeState.votedIds, ...serverVotedList]));
        localStorage.setItem(localKey, JSON.stringify(mergedVoted));

        updateStore({
          roles: mergedRoles,
          totalVoters: targetTotalVoters,
          dbMode: data.mode || 'local',
          votedIds: mergedVoted
        });
      }
    } catch (e) {
      // API call failed (e.g., 404 on static GitHub Pages). Try client-side direct Supabase fallback!
      if (clientSupabase) {
        try {
          const token = getOrCreateVoterToken();
          const clientDateStr = getLocalDateString();
          
          // 1. Fetch roles directly from Supabase DB
          const { data: dbRoles, error: rolesError } = await clientSupabase
            .from('roles')
            .select('id, name, avatar_url, color, total_votes')
            .order('total_votes', { ascending: false });
            
          if (rolesError) throw rolesError;
          
          let mergedRoles = dbRoles || [];
          mergedRoles.sort((a, b) => (b.total_votes || 0) - (a.total_votes || 0));
          
          try {
            localStorage.setItem('ananta_cached_roles', JSON.stringify(mergedRoles));
          } catch (_) {}
          
          // 2. Fetch today's votes for this specific user device token to identify disabled state
          const { data: todayVotes, error: votesError } = await clientSupabase
            .from('votes')
            .select('role_id')
            .eq('created_at', clientDateStr)
            .eq('voter_token', token);
            
          let mergedVoted = storeState.votedIds;
          if (!votesError && todayVotes) {
            const serverVotedList = todayVotes.map((v: any) => v.role_id);
            mergedVoted = Array.from(new Set([...storeState.votedIds, ...serverVotedList]));
            localStorage.setItem(`ananta_voted_${clientDateStr}`, JSON.stringify(mergedVoted));
          }
          
          // 3. Count total distinct voter tokens in DB as visitor estimate
          const { data: allVotes, error: countError } = await clientSupabase
            .from('votes')
            .select('voter_token');
            
          let totalVotersVal = 0;
          if (!countError && allVotes) {
            totalVotersVal = new Set(allVotes.map((v: any) => v.voter_token).filter(Boolean)).size;
          }
          try {
            localStorage.setItem('ananta_cached_total_voters', String(totalVotersVal));
          } catch (_) {}
          
          updateStore({
            roles: mergedRoles,
            votedIds: mergedVoted,
            totalVoters: totalVotersVal,
            dbMode: 'supabase'
          });
          return; // Successfully loads via direct Supabase Client!
        } catch (sbsErr) {
          if (!silent) console.error('[Voting] Direct client-side Supabase query fallback failed:', sbsErr);
        }
      }
      
      updateStore({ dbMode: 'offline' });
      if (!silent) console.error('[Voting] Error fetching votes summary (Backend & Supabase client offline):', e);
    }
  };

  useEffect(() => {
    fetchVotes();

    // Invalidate local storage keys that belong to other days
    try {
      const todayStr = getLocalDateString();
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('ananta_voted_') && key !== `ananta_voted_${todayStr}`) {
          localStorage.removeItem(key);
        }
      }
    } catch (_) {}

    // Poll every 30 seconds for robust cross-client real-time synchronization
    const timer = setInterval(() => {
      fetchVotes(true);
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const processLocalFallbackVote = (roleId: string, customMessage?: string) => {
    const nextRoles = storeState.roles.map(r => r.id === roleId ? { ...r, total_votes: (r.total_votes || 0) + 1 } : r);
    nextRoles.sort((a, b) => (b.total_votes || 0) - (a.total_votes || 0));
    try {
      localStorage.setItem('ananta_cached_roles', JSON.stringify(nextRoles));
    } catch (_) {}

    const todayStr = getLocalDateString();
    const localKey = `ananta_voted_${todayStr}`;
    const updatedList = Array.from(new Set([...storeState.votedIds, roleId]));
    localStorage.setItem(localKey, JSON.stringify(updatedList));

    const nextTotalVoters = storeState.totalVoters + 1;
    try {
      localStorage.setItem('ananta_cached_total_voters', String(nextTotalVoters));
    } catch (_) {}

    updateStore({
      roles: nextRoles,
      votedIds: updatedList,
      totalVoters: nextTotalVoters
    });

    triggerToast(customMessage || "✓ 投票成功！(本地已同步)");
  };

  const handleVoteAction = async (roleId: string) => {
    if (isVoting) return;
    if (votedIds.includes(roleId)) {
      triggerToast(lang === 'CN' ? "💡 今天已为该角色投过票了" : "💡 You have already voted for this character today!");
      return;
    }
    updateStore({ isVoting: roleId });

    try {
      const token = getOrCreateVoterToken();
      const clientDateStr = getLocalDateString();
      
      // Attempt regular Backend Route API post
      let res;
      try {
        res = await fetch('/api/votes/vote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ roleId, voterToken: token, clientDate: clientDateStr })
        });
      } catch (fetchErr) {
        // Trigger client-side Supabase or local offline fallback on network fetch failure
        throw fetchErr;
      }
      
      if (!res.ok) {
        throw new Error(`Server API post returned ${res.status}`);
      }
      
      const data = await res.json();
      if (data && data.success) {
        let serverRoles = data.roles || [];
        serverRoles.sort((a, b) => (b.total_votes || 0) - (a.total_votes || 0));
        try {
          localStorage.setItem('ananta_cached_roles', JSON.stringify(serverRoles));
        } catch (_) {}
        
        try {
          localStorage.setItem('ananta_cached_total_voters', String(data.totalVoters ?? 0));
        } catch (_) {}
        
        const todayStr = getLocalDateString();
        const localKey = `ananta_voted_${todayStr}`;
        const updatedList = Array.from(new Set([...storeState.votedIds, roleId]));
        localStorage.setItem(localKey, JSON.stringify(updatedList));

        updateStore({
          roles: serverRoles,
          totalVoters: data.totalVoters ?? 0,
          votedIds: updatedList
        });

        triggerToast(data.message || "✓ 投票成功！");
      } else {
        // If they already voted today, don't fallback increment, just show server alert message
        if (data && data.message && (data.message.includes("已投") || data.message.includes("过") || data.message.includes("already"))) {
          triggerToast(data.message);
        } else {
          processLocalFallbackVote(roleId);
        }
      }
    } catch (e) {
      console.warn('[Voting] Server API unreachable, attempting direct client-side Supabase sync...', e);
      
      // CLIENT-SIDE DIRECT SUPABASE FALLBACK WRITING
      if (clientSupabase) {
        try {
          const token = getOrCreateVoterToken();
          const clientDateStr = getLocalDateString();
          
          // 1. Insert vote row. Generates constraint block if voter already voted today for this role
          const { error: insertError } = await clientSupabase
            .from('votes')
            .insert({
              role_id: roleId,
              voter_ip: 'CLIENT_DIRECT', // Fallback placeholder as we are client-side only
              voter_token: token,
              created_at: clientDateStr
            });
            
          if (insertError) {
            // Unique constraint database code '23505' or matching duplicated insertion limits
            if (insertError.code === '23505' || insertError.message?.includes('duplicate') || insertError.message?.includes('unique')) {
              triggerToast(lang === 'CN' ? "💡 今天已为该角色投过票了，每个角色每天限投1票" : "💡 You have already voted for this character today!");
              const updatedList = Array.from(new Set([...storeState.votedIds, roleId]));
              updateStore({ votedIds: updatedList });
              localStorage.setItem(`ananta_voted_${clientDateStr}`, JSON.stringify(updatedList));
              return;
            }
            throw insertError;
          }
          
          // 2. Increment role total votes
          const { error: rpcError } = await clientSupabase.rpc('increment_vote', { role_id_param: roleId });
          if (rpcError) {
            console.warn('[Voting] RPC increment_vote failed client-side, trying direct column increment...', rpcError);
            const { data: roleCurrent } = await clientSupabase.from('roles').select('total_votes').eq('id', roleId).maybeSingle();
            if (roleCurrent) {
              await clientSupabase
                .from('roles')
                .update({ total_votes: (roleCurrent.total_votes || 0) + 1 })
                .eq('id', roleId);
            }
          }
          
          triggerToast(lang === 'CN' ? "✓ 投票成功！(云端同步中)" : "✓ Vote cast successfully!");
          
          // Refresh statistics
          await fetchVotes();
          return;
        } catch (sbsErr: any) {
          console.error('[Voting] Direct client-side Supabase insert failed:', sbsErr);
        }
      }
      
      processLocalFallbackVote(roleId);
    } finally {
      updateStore({ isVoting: null });
    }
  };

  // Safe percentage helper relative to the top leading vote character
  const maxVotes = roles.length > 0 ? Math.max(...roles.map(r => r.total_votes || 1)) : 1;

  // Mobile Top 4 list selector helper
  const topFour = [...roles].slice(0, 4);

  return (
    <>
      {/* ----------------- PC STICKY VIEW ----------------- */}
      <div className="hidden lg:block w-full bg-ananta-bg2/40 backdrop-blur-md border border-ananta-border p-6 select-none relative group/card hover:border-ananta-neon/30 transition-all duration-300">
        
        {/* Sleek cyber border highlights */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-ananta-neon opacity-40 group-hover/card:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-ananta-neon opacity-40 group-hover/card:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-ananta-neon opacity-40 group-hover/card:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-ananta-neon opacity-40 group-hover/card:opacity-100 transition-opacity" />

        <div className="flex items-center gap-3 mb-2 font-display text-[1.4rem] tracking-wider text-white whitespace-nowrap">
          <Flame className="w-5 h-5 text-ananta-neon animate-pulse-border shrink-0" />
          <span>{text.title}</span>
        </div>

        <p className="font-sans text-[0.72rem] text-ananta-muted leading-relaxed mb-6 flex items-start gap-1.5 border-b border-ananta-border/60 pb-3">
          <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-ananta-neon/60" />
          <span>{text.sub}</span>
        </p>

        {/* Roles votes table list */}
        <div className="space-y-4">
          {roles.map((role) => {
            const isVoted = votedIds.includes(role.id);
            const isDisableVoting = isVoting !== null;
            const valPercent = Math.max(8, Math.round(((role.total_votes || 0) / maxVotes) * 100));

            return (
              <div 
                key={role.id} 
                className={`p-3 border transition-all duration-300 relative group/row ${
                  isVoted 
                    ? 'bg-gradient-to-r from-ananta-neon/[0.03] to-transparent border-ananta-neon/15 pl-4' 
                    : 'bg-ananta-bg3/40 border-ananta-border/30 hover:border-ananta-neon/20 hover:bg-ananta-bg3/80'
                }`}
              >
                {/* Thin vertical glow bar on voted items */}
                {isVoted && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-ananta-neon" />
                )}

                <div className="flex items-center gap-3">
                  {/* Circle Avatar with custom representative colored outline */}
                  <div 
                    className="w-10 h-10 rounded-full border-2 overflow-hidden shrink-0 transition-transform duration-300 group-hover/row:scale-105"
                    style={{ borderColor: role.color }}
                  >
                    <img 
                      src={role.avatar_url} 
                      alt={getLocalizedRoleName(role.id, role.name, lang)} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Character stats & Progress block */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-sans text-[0.85rem] font-bold text-white group-hover/row:text-ananta-neon transition-colors">
                        {getLocalizedRoleName(role.id, role.name, lang)}
                      </span>
                      <span className="font-mono text-[0.8rem] font-semibold text-white/90">
                        {role.total_votes || 0}
                      </span>
                    </div>

                    {/* Progress slider bar with theme color */}
                    <div className="w-full h-1.5 bg-ananta-bg/80 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${valPercent}%` }}
                        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: role.color, boxShadow: `0 0 8px ${role.color}80` }}
                      />
                    </div>
                  </div>

                  {/* Interactive VOTE trigger button (Now Static Result Mode) */}
                  <div className="shrink-0 pl-1">
                    <span className="inline-flex items-center gap-1 font-mono text-[0.65rem] text-amber-400 font-bold uppercase border border-amber-500/30 px-2 py-1 bg-amber-500/5 select-none rounded-none cursor-default">
                      🔒 {text.voted}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visitor counter */}
        <div className="mt-6 border-t border-ananta-border/60 pt-4 flex items-center justify-between text-[0.65rem] text-ananta-muted font-mono uppercase tracking-[0.1em]">
          <span />
          <span className="flex items-center gap-1.5 select-none text-[0.6rem]">
            {dbMode === 'supabase' ? (
              <span className="flex items-center gap-1 text-emerald-400 font-semibold" title="Synced in real-time with Cloud database">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 anonymous-glow shrink-0 animate-pulse" />
                CLOUD SYNCED
              </span>
            ) : dbMode === 'github' ? (
              <span className="flex items-center gap-1 text-violet-400 font-semibold" title="Synced directly with GitHub repository votes dynamic database file">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 anonymous-glow shrink-0 animate-pulse" />
                SYNCED
              </span>
            ) : dbMode === 'local' ? (
              <span className="flex items-center gap-1 text-amber-500 font-semibold cursor-help" title="Local file storage active. Set Supabase or GitHub ENV variables for absolute permanence across redeployments.">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
                LOCAL MONITORED
              </span>
            ) : (
              <span className="flex items-center gap-1 text-red-400 font-semibold" title="Cannot reach backend endpoints. Operating on local offline browser cookies.">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 animate-pulse" />
                LOCAL STANDALONE
              </span>
            )}
            <span className="text-ananta-border/40">|</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>ONLINE</span>
          </span>
        </div>
      </div>


      {/* ----------------- MOBILE INLINE CARD VIEW ----------------- */}
      <div className="lg:hidden w-full bg-ananta-bg2/80 border border-ananta-border/60 p-5 rounded-none backdrop-blur-sm select-none my-6">
        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none pb-0.5">
            <div className="flex items-center gap-2 shrink-0">
              <Flame className="w-4.5 h-4.5 text-ananta-neon shrink-0" />
              <h3 className="font-display text-[1.1rem] sm:text-[1.2rem] tracking-wider text-white flex items-baseline gap-2">
                <span>{text.title}</span>
                <span className="text-[0.6rem] sm:text-[0.65rem] text-ananta-muted font-sans font-medium select-none whitespace-nowrap inline-block pt-0.5">
                  {lang === 'CN' ? "💡 每个角色限投 1 票，可投多个角色" : 
                   lang === 'TW' ? "💡 每個角色限投 1 票，可投多個角色" :
                   lang === 'JP' ? "💡 各キャラ1日1票まで。複数投票可" :
                   lang === 'KR' ? "💡 캐릭터당 하루 1회, 다중 투표 가능" :
                   lang === 'DE' ? "💡 Max. 1 Stimme pro Charakter" :
                   lang === 'FR' ? "💡 Max. 1 vote par perso quotidien" :
                   lang === 'IT' ? "💡 Max 1 voto per eroe al giorno" :
                   lang === 'RU' ? "💡 Макс. 1 голос за героя в день" :
                   "💡 Max 1 vote per character daily"}
                </span>
              </h3>
            </div>
            <span className="font-mono text-[0.55rem] tracking-wider text-ananta-muted bg-ananta-bg px-2 py-0.5 border border-ananta-border shrink-0 self-center">
              LIVE UPDATES
            </span>
          </div>
        </div>

        {/* All 4 characters layout side-by-side - finalized closed ranking */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-5">
          {topFour.map((role, rank) => {
            const isWinner = rank === 0;
            return (
              <div 
                key={role.id} 
                onClick={() => {
                  triggerToast(lang === 'CN' ? "🔒 人气投票活动已圆满截止" : "🔒 Popularity contest has concluded!");
                }}
                className={`p-2 sm:p-3 relative flex flex-col items-center text-center border overflow-hidden transition-all duration-300 w-full select-none cursor-pointer rounded-sm ${
                  isWinner 
                    ? 'bg-gradient-to-b from-amber-500/[0.05] to-transparent border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.06)]' 
                    : 'bg-ananta-bg3/50 border-ananta-border/30 hover:border-ananta-neon/10'
                }`}
              >
                {/* Micro mini rank badge */}
                <span className="absolute top-1 left-1.5 font-mono text-[0.55rem] text-ananta-muted font-bold block">
                  #{rank + 1}
                </span>

                <div 
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 overflow-hidden mb-1.5 mt-2 shrink-0 relative"
                  style={{ borderColor: isWinner ? '#f59e0b' : role.color }}
                >
                  <img src={role.avatar_url} alt={getLocalizedRoleName(role.id, role.name, lang)} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  
                  {isWinner ? (
                    <div className="absolute inset-0 bg-amber-500/5 flex items-center justify-center">
                      <div className="bg-amber-500 rounded-full p-0.5 shadow-sm animate-pulse">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className={`font-sans text-[0.68rem] sm:text-[0.72rem] font-bold mb-0.5 truncate max-w-full ${isWinner ? 'text-amber-400' : 'text-white'}`}>
                  {getLocalizedRoleName(role.id, role.name, lang)}
                </div>
                
                <div className="font-mono text-[0.7rem] sm:text-[0.75rem] font-bold text-white/90">
                  {role.total_votes || 0}
                </div>

                {/* Highly intuitive mini helper badge */}
                <div className="mt-1 font-sans text-[0.52rem] scale-[0.9] text-ananta-muted flex items-center gap-0.5 uppercase">
                  {isWinner ? (
                    <span className="text-amber-400 font-bold">🏆 WINNER</span>
                  ) : (
                    <span>RANK #{rank + 1}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expander Trigger CTA */}
        <button 
          onClick={() => setShowModal(true)}
          className="w-full py-3 bg-ananta-neon/[0.05] hover:bg-ananta-neon/10 border border-ananta-neon/20 hover:border-ananta-neon/40 text-[0.72rem] font-bold tracking-wider text-ananta-neon uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{text.expand}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>


      {/* ----------------- MOBILE FULL-SCREEN MODAL ----------------- */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ananta-bg/95 flex flex-col justify-end md:justify-center p-4"
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-full max-w-md mx-auto bg-ananta-bg2 border border-ananta-border p-6 relative flex flex-col max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-ananta-muted hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 font-display text-[1.4rem] tracking-wider text-white">
                <Flame className="w-5 h-5 text-ananta-neon" />
                <span>{text.rankTitle}</span>
              </div>

              <p className="font-sans text-[0.7rem] text-ananta-muted leading-relaxed mb-6 border-b border-ananta-border pb-3">
                {text.sub}
              </p>

              {/* Roles list mapping exact standard as PC */}
              <div className="space-y-4 overflow-y-auto flex-1 pr-1 pb-4">
                {roles.map((role) => {
                  const isVoted = votedIds.includes(role.id);
                  const isDisableVoting = isVoting !== null;
                  const valPercent = Math.max(8, Math.round(((role.total_votes || 0) / maxVotes) * 100));

                  return (
                    <div 
                      key={role.id} 
                      className={`p-3.5 border relative ${
                        isVoted 
                          ? 'bg-ananta-neon/[0.02] border-ananta-neon/20 pl-4' 
                          : 'bg-ananta-bg3/40 border-ananta-border/30'
                      }`}
                    >
                      {isVoted && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-ananta-neon" />
                      )}

                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full border-2 overflow-hidden shrink-0"
                          style={{ borderColor: role.color }}
                        >
                          <img src={role.avatar_url} alt={getLocalizedRoleName(role.id, role.name, lang)} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-sans text-[0.8rem] font-bold text-white">{getLocalizedRoleName(role.id, role.name, lang)}</span>
                            <span className="font-mono text-[0.75rem] font-bold text-white">{role.total_votes || 0}</span>
                          </div>

                          <div className="w-full h-1.5 bg-ananta-bg rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${valPercent}%`, backgroundColor: role.color }}
                            />
                          </div>
                        </div>

                        <div className="shrink-0 pl-1">
                          <span className="inline-flex items-center gap-1 font-mono text-[0.62rem] text-amber-400 font-bold uppercase border border-amber-500/30 px-1.5 py-1 bg-amber-500/5 select-none rounded-none cursor-default">
                            🔒 {text.voted}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Close CTAs */}
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-ananta-bg border border-ananta-border hover:bg-ananta-bg3 text-[0.75rem] text-center font-bold tracking-wider text-white uppercase mt-4 transition-colors cursor-pointer"
              >
                {text.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------- GORGEOUS NEON ACTION TOAST STATUS ----------------- */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] px-5 py-3 pointer-events-none bg-ananta-bg2/90 border border-ananta-neon/60 text-white font-sans text-[0.8rem] font-medium tracking-wide shadow-[0_4px_24px_rgba(0,229,255,0.2)] flex items-center gap-2 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-ananta-neon animate-ping" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
