import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--rose-mist) 55%, var(--paper)) 0%, color-mix(in oklab, var(--paper-tint) 80%, white) 60%, var(--paper) 100%)",
        color: "var(--text)",
        borderTop: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)",
      }}
    >
      {/* Top gold hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 80%, transparent) 50%, transparent)",
        }}
      />
      {/* Soft gold halo top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 35%, transparent), transparent)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-tight relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-5">
            <Logo size={72} className="h-14 sm:h-16 md:h-20 shrink-0" />
            <div className="leading-tight">
              <div
                className="font-display uppercase tracking-[0.18em] text-xs sm:text-[0.9375rem] md:text-base leading-tight"
                style={{ color: "var(--wine-deep)" }}
              >
                Статус свободы
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Юридические решения для вашей свободы.
          </p>
          <ul className="mt-5 space-y-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
            <li>ИП Армина Юлия Юрьевна</li>
            <li>ИНН 312300900561</li>
            <li>
              <a href="mailto:s1271s@yandex.ru" className="transition-colors hover:opacity-80">
                s1271s@yandex.ru
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="smallcaps" style={{ color: "var(--gold-soft)" }}>Навигация</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ["/#about", "О компании"],
              ["/#services", "Услуги"],
              ["/#pricing", "Тарифы"],
              ["/bankruptcy", "Банкротство"],
              ["/#faq", "FAQ"],
              ["/#contacts", "Контакты"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div style={{ borderTop: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)" }}>
        <div className="container-tight flex flex-col gap-3 py-6 text-[11px] tracking-wider md:flex-row md:items-center md:justify-between" style={{ color: "var(--text-muted)" }}>
          <div>© {new Date().getFullYear()} Статус свободы</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="/privacy" className="transition-colors hover:opacity-80">Политика конфиденциальности</a>
            <span aria-hidden style={{ opacity: 0.5 }}>·</span>
            <a href="/consent" className="transition-colors hover:opacity-80">Согласие на обработку персональных данных</a>
          </div>
          <div>Сайт носит информационный характер</div>
        </div>
      </div>
    </footer>
  );
}
