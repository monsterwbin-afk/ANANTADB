-- ==========================================
-- Supabase Schema for Character Voting Module
-- ==========================================

-- 1. Create the Roles Table (Primary Key is simple and matches app defaults)
CREATE TABLE IF NOT EXISTS public.roles (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  avatar_url TEXT NOT NULL,
  color VARCHAR(7) DEFAULT '#6366f1',  -- Representative color for progress indicators
  total_votes INTEGER DEFAULT 0,       -- Redundant cache for faster queries
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create the Votes Table (With unique voter identification constraint)
CREATE TABLE IF NOT EXISTS public.votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  role_id VARCHAR(50) REFERENCES public.roles(id) ON DELETE CASCADE NOT NULL,
  voter_ip VARCHAR(45) NOT NULL,        -- User IP (no registration requested)
  voter_token VARCHAR(100),             -- Device-specific persistent ID
  created_at DATE DEFAULT CURRENT_DATE, -- Stores date only to support YYYY-MM-DD tracking
  -- Combine fields to enforce a strict voter restriction threshold (1 vote per character per day)
  UNIQUE(role_id, voter_ip, created_at)
);

-- 3. Enable Row-Level Security (RLS) policies for anti-tamper security
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public select on votes"
  ON public.votes FOR SELECT
  USING (true);

CREATE POLICY "Allow public voting record insertion" 
  ON public.votes FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Forbid voting record updates" 
  ON public.votes FOR UPDATE 
  USING (false);

CREATE POLICY "Forbid voting record deletions" 
  ON public.votes FOR DELETE 
  USING (false);

-- 4. Create the Atomic Increment database function (Avoids count drift from high concurrent users)
CREATE OR REPLACE FUNCTION public.increment_vote(role_id_param VARCHAR(50))
RETURNS void AS $$
BEGIN
  UPDATE public.roles 
  SET total_votes = COALESCE(total_votes, 0) + 1 
  WHERE id = role_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Create Helper function to count distinct voter devices (Falls back to voter IP if token is empty)
CREATE OR REPLACE FUNCTION public.get_total_voters()
RETURNS bigint AS $$
BEGIN
  RETURN (SELECT COUNT(DISTINCT COALESCE(NULLIF(voter_token, ''), voter_ip)) FROM public.votes);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Insert initial character metadata rows
INSERT INTO public.roles (id, name, avatar_url, color, total_votes) VALUES
  ('taffy', '塔菲', 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-tafei_0ed12004.jpg', '#f59e0b', 0)
  ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, avatar_url = EXCLUDED.avatar_url, color = EXCLUDED.color;

INSERT INTO public.roles (id, name, avatar_url, color, total_votes) VALUES
  ('richie', '里奇', 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-lixi_a69544ea.jpg', '#3b82f6', 0)
  ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, avatar_url = EXCLUDED.avatar_url, color = EXCLUDED.color;

INSERT INTO public.roles (id, name, avatar_url, color, total_votes) VALUES
  ('lykaia', '利凯亚', 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-saimo_d1a180a7.jpg', '#10b981', 0)
  ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, avatar_url = EXCLUDED.avatar_url, color = EXCLUDED.color;

INSERT INTO public.roles (id, name, avatar_url, color, total_votes) VALUES
  ('captain', '队长', 'https://www.anantagame.com/pc/gw/20250904162009/assets/role-captain_c7ae1344.jpg', '#ef4444', 0)
  ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, avatar_url = EXCLUDED.avatar_url, color = EXCLUDED.color;
