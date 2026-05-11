import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Регистрация · Статус свободы Юлии Арминой" },
      { name: "description", content: "Регистрация в личном кабинете клиентов «Статус свободы Юлии Арминой»." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Регистрация · Статус свободы Юлии Арминой" },
      { property: "og:description", content: "Создайте аккаунт клиента для сопровождения дел." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return toast.error("Подтвердите согласие на обработку персональных данных");
    if (fullName.trim().length < 2) return toast.error("Укажите ФИО");
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin + "/portal",
        data: { full_name: fullName.trim(), phone: phone.trim(), consent: true },
      },
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Проверьте почту для подтверждения");
    navigate({ to: "/login" });
  }

  async function onGoogle() {
    if (!consent) return toast.error("Подтвердите согласие на обработку персональных данных");
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/portal",
    });
    if (result.error) toast.error("Не удалось войти через Google");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/60 backdrop-blur p-8 shadow-xl">
        <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">← На главную</Link>
        <h1 className="display mt-4 text-3xl text-foreground">Регистрация</h1>
        <p className="mt-2 text-sm text-muted-foreground">Создайте кабинет, чтобы начать работу.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <Field label="ФИО">
            <input id="user-full-name" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="lead-input" />
          </Field>
          <Field label="Телефон">
            <input id="user-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="lead-input tabular" placeholder="+7 ___ ___ __ __" />
          </Field>
          <Field label="E-mail">
            <input id="user-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="lead-input" />
          </Field>
          <Field label="Пароль">
            <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="lead-input" />
          </Field>
          <label className="flex items-start gap-3 text-[11px] leading-relaxed text-muted-foreground">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 accent-cyan" />
            <span>Я согласен(на) на обработку персональных данных и принимаю{" "}
              <a href="/privacy" className="text-cyan hover:underline">Политику</a>.</span>
          </label>
          <button type="submit" disabled={loading} className="btn-cyan w-full justify-center rounded-sm disabled:opacity-60">
            {loading ? "Создаём…" : "Создать аккаунт"}
          </button>
        </form>
        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <div className="h-px flex-1 bg-border" /> или <div className="h-px flex-1 bg-border" />
        </div>
        <button onClick={onGoogle} className="w-full rounded-sm border border-border bg-background py-3 text-sm font-medium text-foreground hover:bg-accent transition">
          Продолжить с Google
        </button>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Уже есть аккаунт? <Link to="/login" className="text-cyan hover:underline">Войти</Link>
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}