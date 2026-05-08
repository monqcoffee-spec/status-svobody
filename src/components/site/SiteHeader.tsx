import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/#about", label: "О бренде" },
  { href: "/#services", label: "Услуги" },
  { href: "/#pricing", label: "Тарифы" },
  { href: "/bankruptcy", label: "Банкротство" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacts", label: "Контакты" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  return (
    <header
      className={
        "sticky top-0 z-40 transition-all duration-500 " +
        (scrolled
          ? "border-b border-cyan/10 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent")
      }
      style={
        scrolled
          ? {
              backgroundColor:
                "color-mix(in oklab, var(--ink-deep) 78%, transparent)",
            }
          : undefined
      }
    >
      <div className="container-tight flex h-16 md:h-20 items-center justify-between gap-4 md:gap-6">
        <Link to="/" className="group flex items-center gap-2.5 md:gap-3 min-w-0">
          <Logo
            size={32}
            className="h-8 md:h-10 transition-transform duration-700 group-hover:rotate-[6deg]"
          />
          <div className="leading-tight min-w-0">
            <div className="font-display text-[12px] md:text-[15px] tracking-[0.22em] md:tracking-[0.32em] text-silver uppercase whitespace-nowrap">
              Статус<span className="text-cyan"> </span>Свободы
            </div>
            <div className="text-[8px] md:text-[9px] tracking-[0.32em] md:tracking-[0.42em] text-silver-dim uppercase mt-0.5 whitespace-nowrap">
              Premium legal consulting
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px]">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-silver/65 hover:text-cyan transition-colors duration-300"
            >
              {n.label}
              <span
                className="absolute -bottom-1.5 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full"
                style={{ boxShadow: "0 0 8px var(--cyan)" }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle className="h-10 w-10 md:h-11 md:w-11" />

          <a
            href="https://t.me/status_svobody_bot"
            target="_blank"
            rel="noopener"
            className="hidden lg:inline-flex h-11 items-center gap-2.5 px-5 text-[10px] font-medium tracking-[0.28em] uppercase text-cyan-glow border border-cyan/40 bg-cyan/5 hover:bg-cyan/15 hover:border-cyan transition-all rounded-sm"
            style={{ boxShadow: "0 0 18px color-mix(in oklab, var(--cyan) 20%, transparent)" }}
          >
            <span className="relative h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" style={{ boxShadow: "0 0 8px var(--cyan)" }} />
            Консультация
          </a>

          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-cyan/20 text-silver hover:border-cyan/60 hover:text-cyan rounded-sm transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden border-t border-cyan/10 backdrop-blur-xl"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--ink-deep) 96%, transparent)",
          }}
        >
          <nav className="container-tight flex flex-col py-6">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/5 py-4 font-display text-lg text-silver/80 hover:text-cyan tracking-wide"
            >
              Главная
            </Link>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-4 font-display text-lg text-silver/80 hover:text-cyan tracking-wide"
              >
                <span>{n.label}</span>
              </a>
            ))}
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="mt-6 btn-cyan rounded-sm"
            >
              Записаться на консультацию
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
