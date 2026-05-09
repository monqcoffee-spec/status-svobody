CREATE TABLE public.credit_report_verifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid NOT NULL,
  user_id uuid NOT NULL,
  bureau text NOT NULL,
  status text NOT NULL,
  notes text,
  model text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_crv_report ON public.credit_report_verifications(report_id, created_at DESC);
CREATE INDEX idx_crv_user ON public.credit_report_verifications(user_id);

ALTER TABLE public.credit_report_verifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user own verification history"
  ON public.credit_report_verifications
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);