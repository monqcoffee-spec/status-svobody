-- Lead requests from the website forms
CREATE TABLE public.lead_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  debt_amount BIGINT NOT NULL,
  source TEXT NOT NULL DEFAULT 'index',
  status TEXT NOT NULL DEFAULT 'new',
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_lead_requests_created_at ON public.lead_requests (created_at DESC);
CREATE INDEX idx_lead_requests_status ON public.lead_requests (status);

ALTER TABLE public.lead_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (anonymous visitors) can submit a lead.
-- Inserts will be performed via a server function using the service role,
-- so we only need this policy as a safe default; no SELECT/UPDATE/DELETE
-- policies are added — by default RLS denies, which is what we want.
CREATE POLICY "Anyone can submit a lead"
ON public.lead_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
