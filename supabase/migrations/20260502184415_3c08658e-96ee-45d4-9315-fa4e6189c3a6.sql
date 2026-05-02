ALTER TABLE public.lead_requests
  ALTER COLUMN debt_amount DROP NOT NULL;

ALTER TABLE public.lead_requests
  ADD COLUMN IF NOT EXISTS email TEXT,
  ADD COLUMN IF NOT EXISTS preferred_time TEXT,
  ADD COLUMN IF NOT EXISTS message TEXT;

ALTER TABLE public.lead_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit a consultation request" ON public.lead_requests;
CREATE POLICY "Anyone can submit a consultation request"
ON public.lead_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
