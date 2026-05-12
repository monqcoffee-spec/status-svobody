import { createFileRoute, Outlet, useNavigate, Link, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Загрузка…</div>;
  }
  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/70 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/portal" className="display text-lg text-foreground">Status Svobody · Кабинет</Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline text-muted-foreground truncate max-w-[160px]">{user.email}</span>
            <button onClick={() => signOut().then(() => navigate({ to: "/" }))} className="text-muted-foreground hover:text-foreground transition">
              Выйти
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}