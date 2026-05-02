-- Table to persist AI diagnostic conversations for hot leads
CREATE TABLE public.ai_consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES public.lead_requests(id) ON DELETE SET NULL,
  transcript jsonb NOT NULL DEFAULT '[]'::jsonb,
  verdict_title text,
  verdict_summary text,
  recommendation text,
  hot boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'index',
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_consultations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (same posture as lead_requests)
CREATE POLICY "Anyone can create ai consultations"
ON public.ai_consultations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow updates only to attach a lead_id after the dialog (no auth in app yet),
-- restricted to rows created in the last hour to limit abuse.
CREATE POLICY "Anyone can attach lead within 1 hour"
ON public.ai_consultations
FOR UPDATE
TO anon, authenticated
USING (created_at > now() - interval '1 hour')
WITH CHECK (created_at > now() - interval '1 hour');

CREATE INDEX idx_ai_consultations_created_at ON public.ai_consultations(created_at DESC);
CREATE INDEX idx_ai_consultations_lead_id ON public.ai_consultations(lead_id);