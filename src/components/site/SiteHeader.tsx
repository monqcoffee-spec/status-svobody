import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "./Monogram";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // Pages that start with a navy hero — header is transparent over dark.
  const darkHeroRoutes = ["/", "/about", "/contacts", "/intensive", "/services/bankruptcy", "/services/credit-history"];
  const overDark = darkHeroRoutes.includes(location.pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-40 transition-colors duration-300 " +
        (overDark
          ? "border-b border-transparent bg-transparent text-cream"
          : scrolled
            ? "border-b border-border/60 bg-cream/85 text-navy backdrop-blur-md"
            : "border-b border-transparent bg-cream text-navy")
      }
    >
      <div className="container-tight flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <Monogram className="h-10 w-10 transition-transform group-hover:rotate-12" />
          <div className="leading-tight">
            <div className="font-serif text-lg">Юлия Армина</div>
            <div className={"smallcaps text-[10px] " + (overDark ? "text-cream/55" : "text-muted-foreground")}>
              Финансовый управляющий
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={
                "relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full " +
                (overDark ? "text-cream/75 hover:text-cream" : "text-navy/70 hover:text-navy")
              }
              activeProps={{ className: "font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://t.me/status_svobody_bot"
          target="_blank"
          rel="noopener"
          className={
            "hidden lg:inline-flex h-11 items-center gap-2 px-5 text-xs font-medium uppercase tracking-[0.18em] transition-colors " +
            (overDark
              ? "border border-gold bg-transparent text-cream hover:bg-gold hover:text-navy"
              : "border border-navy/15 bg-navy text-cream hover:border-gold hover:bg-navy-deep")
          }
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Интенсив
        </a>

        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className={
            "lg:hidden inline-flex h-11 w-11 items-center justify-center border " +
            (overDark ? "border-cream/30 text-cream hover:bg-cream/10" : "border-navy/20 text-navy hover:bg-cream-warm")
          }
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-cream/95 backdrop-blur-md">
          <nav className="container-tight flex flex-col py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-serif text-xl text-navy/80 hover:text-navy"
                activeProps={{ className: "text-navy font-medium" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 bg-navy px-4 text-xs font-medium uppercase tracking-[0.18em] text-cream"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Запустить интенсив
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}