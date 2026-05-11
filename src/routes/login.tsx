import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Вход в кабинет · Статус свободы Юлии Арминой" },
      { name: "description", content: "Личный кабинет клиентов «Статус свободы Юлии Арминой». Вход по email или Google." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Вход в кабинет · Статус свободы Юлии Арминой" },
      { property: "og:description", content: "Личный кабинет клиентов." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Добро пожаловать");
    navigate({ to: "/portal" });
  }

  async function onGoogle() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/portal",
    });
    if (result.error) toast.error("Не удалось войти через Google");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/60 backdrop-blur p-8 shadow-xl">
        <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">← На главную</Link>
        <h1 className="display mt-4 text-lg text-foreground">Вход в кабинет</h1>
        <p className="mt-2 text-sm text-muted-foreground">Восстановление кредитной истории и сопровождение банкротства.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <Field label="E-mail">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="lead-input" />
          </Field>
          <Field label="Пароль">
            <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="lead-input" />
          </Field>
          <button type="submit" disabled={loading} className="btn-cyan w-full justify-center rounded-sm disabled:opacity-60">
            {loading ? "Вход…" : "Войти"}
          </button>
        </form>
        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <div className="h-px flex-1 bg-border" /> или <div className="h-px flex-1 bg-border" />
        </div>
        <button onClick={onGoogle} className="w-full rounded-sm border border-border bg-background py-3 text-sm font-medium text-foreground hover:bg-accent transition">
          Продолжить с Google
        </button>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Нет аккаунта? <Link to="/signup" className="text-cyan hover:underline">Зарегистрироваться</Link>
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