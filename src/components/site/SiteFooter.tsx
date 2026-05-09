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
          <div className="flex items-center gap-4">
            <Logo size={64} className="h-14 md:h-16" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-[0.32em] uppercase" style={{ color: "var(--wine-deep)" }}>Статус Свободы</div>
              <div className="text-[10px] tracking-[0.42em] uppercase mt-1" style={{ color: "var(--gold-soft)" }}>Юлии Арминой</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Юридические решения для вашей свободы. Личное сопровождение
            основателем бренда — без посредников, менеджеров и колл-центров.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="smallcaps" style={{ color: "var(--gold-soft)" }}>Навигация</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ["/#about", "О бренде"],
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

        <div className="md:col-span-4">
          <div className="smallcaps" style={{ color: "var(--gold-soft)" }}>Связь</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li style={{ color: "var(--text-muted)" }}>Москва · Цветной бульвар, 13</li>
            <li><a href="tel:+79654457378" className="tabular transition-colors hover:opacity-80" style={{ color: "var(--wine-deep)" }}>+7 (965) 445-73-78</a></li>
            <li><a href="https://t.me/zakon_127" target="_blank" rel="noopener" className="transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>Канал · t.me/zakon_127</a></li>
            <li><a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>Интенсив · @status_svobody_bot</a></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)" }}>
        <div className="container-tight flex flex-col gap-2 py-6 text-[11px] tracking-wider md:flex-row md:items-center md:justify-between" style={{ color: "var(--text-muted)" }}>
          <div>© {new Date().getFullYear()} STATUS SVOBODY · Юлия Армина</div>
          <div>Сайт носит информационный характер</div>
        </div>
      </div>
    </footer>
  );
}
