import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "Обо мне" },
  { to: "/services/bankruptcy", label: "Банкротство" },
  { to: "/services/credit-history", label: "Восстановление КИ" },
  { to: "/intensive", label: "Интенсив" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2 font-serif">
          <span className="text-xl font-semibold tracking-tight text-navy">Юлия Армина</span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            фин. управляющий
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-navy/75 hover:text-navy transition-colors"
              activeProps={{ className: "text-navy font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://t.me/status_svobody_bot"
          target="_blank"
          rel="noopener"
          className="hidden lg:inline-flex h-10 items-center rounded-md bg-gold px-4 text-sm font-medium text-navy shadow-sm transition-colors hover:bg-gold-hover"
        >
          Бесплатный интенсив
        </a>

        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-navy hover:bg-cream-warm"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-cream">
          <nav className="container-tight flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-navy/80 hover:text-navy"
                activeProps={{ className: "text-navy font-medium" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-gold px-4 text-sm font-medium text-navy"
            >
              Запустить интенсив
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}