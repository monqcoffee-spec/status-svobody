
-- Profiles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL DEFAULT '',
  phone TEXT,
  email TEXT,
  iin_snils TEXT,
  consent_given BOOLEAN NOT NULL DEFAULT false,
  consent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users read own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "users insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone, email, consent_given, consent_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.raw_user_meta_data->>'phone',
    NEW.email,
    COALESCE((NEW.raw_user_meta_data->>'consent')::boolean, false),
    CASE WHEN (NEW.raw_user_meta_data->>'consent')::boolean THEN now() ELSE NULL END
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at helper
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Credit recovery cases
CREATE TABLE public.credit_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'collecting', -- collecting | consent_pending | payment_pending | analysis | done
  consent_uploaded_path TEXT,
  paid BOOLEAN NOT NULL DEFAULT false,
  paid_at TIMESTAMPTZ,
  analysis_text TEXT,
  analysis_ready BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.credit_cases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user own credit case" ON public.credit_cases FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_credit_cases_updated BEFORE UPDATE ON public.credit_cases
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Credit reports (uploads)
CREATE TABLE public.credit_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID NOT NULL REFERENCES public.credit_cases(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  bureau TEXT NOT NULL CHECK (bureau IN ('nbki','okb','sb')),
  file_path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  verification_status TEXT NOT NULL DEFAULT 'pending', -- pending | ok | mismatch | unreadable
  verification_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.credit_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user own reports" ON public.credit_reports FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX idx_credit_reports_case ON public.credit_reports(case_id);

-- Bankruptcy cases
CREATE TABLE public.bankruptcy_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  marital_status TEXT, -- single | married | divorced
  children_count INT NOT NULL DEFAULT 0,
  has_real_estate BOOLEAN NOT NULL DEFAULT false,
  has_vehicle BOOLEAN NOT NULL DEFAULT false,
  has_business BOOLEAN NOT NULL DEFAULT false,
  has_deposits BOOLEAN NOT NULL DEFAULT false,
  debt_amount BIGINT,
  questionnaire_done BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.bankruptcy_cases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user own bankruptcy case" ON public.bankruptcy_cases FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER trg_bk_cases_updated BEFORE UPDATE ON public.bankruptcy_cases
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Bankruptcy documents
CREATE TABLE public.bankruptcy_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID NOT NULL REFERENCES public.bankruptcy_cases(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  doc_key TEXT NOT NULL,
  doc_label TEXT NOT NULL,
  required BOOLEAN NOT NULL DEFAULT true,
  file_path TEXT,
  file_name TEXT,
  uploaded_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(case_id, doc_key)
);
ALTER TABLE public.bankruptcy_documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "user own bk docs" ON public.bankruptcy_documents FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX idx_bk_docs_case ON public.bankruptcy_documents(case_id);

-- Storage bucket for portal docs (private)
INSERT INTO storage.buckets (id, name, public) VALUES ('portal-docs', 'portal-docs', false)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "users read own portal docs"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'portal-docs' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "users upload own portal docs"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'portal-docs' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "users update own portal docs"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'portal-docs' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "users delete own portal docs"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'portal-docs' AND auth.uid()::text = (storage.foldername(name))[1]);
