-- 1. Roles infrastructure
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Only admins can view / manage roles
CREATE POLICY "Admins can view roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. lead_requests — admin-only SELECT
CREATE POLICY "Admins can read lead requests"
ON public.lead_requests FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

-- 3. ai_consultations — add session_token + tighten policies
ALTER TABLE public.ai_consultations
  ADD COLUMN IF NOT EXISTS session_token uuid;

CREATE INDEX IF NOT EXISTS ai_consultations_session_token_idx
  ON public.ai_consultations (session_token);

-- Replace the overly permissive UPDATE policy
DROP POLICY IF EXISTS "Anyone can attach lead within 1 hour" ON public.ai_consultations;

-- New UPDATE policy: only the holder of the session_token can update (within 1 hour)
CREATE POLICY "Session token holder can update within 1 hour"
ON public.ai_consultations FOR UPDATE
TO anon, authenticated
USING (
  session_token IS NOT NULL
  AND created_at > (now() - interval '1 hour')
  AND session_token = NULLIF(current_setting('request.jwt.claims', true)::jsonb ->> 'session_token', '')::uuid
)
WITH CHECK (
  session_token IS NOT NULL
  AND created_at > (now() - interval '1 hour')
);

-- Admin SELECT for ai_consultations
CREATE POLICY "Admins can read ai consultations"
ON public.ai_consultations FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));