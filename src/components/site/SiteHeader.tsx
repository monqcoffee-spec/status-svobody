import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "/#about", label: "О компании" },
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
      className="sticky top-0 z-40 transition-all duration-500 backdrop-blur-2xl"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in oklab, var(--paper) 88%, transparent)"
          : "color-mix(in oklab, var(--paper) 70%, transparent)",
        borderBottom: scrolled
          ? "1px solid color-mix(in oklab, var(--gold) 28%, transparent)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 18px 40px -32px color-mix(in oklab, var(--wine) 35%, transparent)"
          : "none",
      }}
    >
      {/* Gold hairline thread under header */}
      {scrolled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-px h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--gold) 60%, transparent) 50%, transparent 100%)",
          }}
        />
      )}
      <div className="container-tight flex h-20 sm:h-24 md:h-28 lg:h-32 items-center justify-between gap-3 sm:gap-4 md:gap-6">
        <Link
          to="/"
          aria-label="Статус Свободы — на главную"
          className="group flex items-center gap-3 md:gap-4 min-w-0"
        >
          <Logo
            size={96}
            className="h-12 sm:h-14 md:h-20 lg:h-24 transition-transform duration-700 group-hover:rotate-[4deg]"
          />
          <div className="leading-tight min-w-0 hidden sm:block">
            <div className="font-display text-[12px] md:text-[14px] tracking-[0.34em] uppercase whitespace-nowrap" style={{ color: "var(--text)" }}>
              Статус Свободы
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px]">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
            >
              {n.label}
              <span
                className="absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-[11px] md:text-[12px] tracking-[0.2em] uppercase transition-colors"
            style={{
              border: "1px solid color-mix(in oklab, var(--gold) 40%, transparent)",
              color: "var(--text)",
            }}
          >
            Войти
          </Link>
          <Link
            to="/signup"
            className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-[11px] md:text-[12px] tracking-[0.2em] uppercase transition-colors"
            style={{
              background: "var(--wine-deep)",
              color: "var(--paper)",
            }}
          >
            Регистрация
          </Link>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors"
            style={{
              border: "1px solid color-mix(in oklab, var(--wine) 40%, transparent)",
              color: "var(--wine-deep)",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden backdrop-blur-2xl"
          style={{
            backgroundColor: "color-mix(in oklab, var(--paper) 96%, transparent)",
            borderTop: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
          }}
        >
          <nav className="container-tight flex flex-col py-6">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 font-display text-lg tracking-wide hover:opacity-70"
              style={{ borderBottom: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)", color: "var(--text)" }}
            >
              Главная
            </Link>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-display text-lg tracking-wide hover:opacity-70"
                style={{ borderBottom: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)", color: "var(--text)" }}
              >
                <span>{n.label}</span>
              </a>
            ))}
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="mt-8 btn-cyan"
            >
              Записаться на консультацию
            </a>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full px-4 py-3 text-[12px] tracking-[0.2em] uppercase"
              style={{ border: "1px solid color-mix(in oklab, var(--gold) 40%, transparent)", color: "var(--text)" }}
            >
              Войти в кабинет
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-3 text-[12px] tracking-[0.2em] uppercase"
              style={{ background: "var(--wine-deep)", color: "var(--paper)" }}
            >
              Регистрация
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
