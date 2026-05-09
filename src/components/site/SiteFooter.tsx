import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in oklab, var(--wine) 18%, var(--ink-deep)), var(--ink-deep) 70%)",
        color: "rgba(255,255,255,0.75)",
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
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 55%, transparent), transparent)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-tight relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Logo size={64} onDark className="h-14 md:h-16" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-[0.32em] uppercase" style={{ color: "#FFFFFF" }}>Статус Свободы</div>
              <div className="text-[10px] tracking-[0.42em] uppercase mt-1" style={{ color: "var(--gold-light)" }}>Premium legal consulting</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Юридические решения для вашей свободы. Личное сопровождение
            основателем бренда — без посредников, менеджеров и колл-центров.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="smallcaps" style={{ color: "var(--gold-light)" }}>Навигация</div>
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
                <a href={href} className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="smallcaps" style={{ color: "var(--gold-light)" }}>Связь</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li style={{ color: "rgba(255,255,255,0.7)" }}>Москва · Цветной бульвар, 13</li>
            <li><a href="tel:+79654457378" className="tabular transition-colors hover:text-white" style={{ color: "#FFFFFF" }}>+7 (965) 445-73-78</a></li>
            <li><a href="https://t.me/zakon_127" target="_blank" rel="noopener" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>Канал · t.me/zakon_127</a></li>
            <li><a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>Интенсив · @status_svobody_bot</a></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-tight flex flex-col gap-2 py-6 text-[11px] tracking-wider md:flex-row md:items-center md:justify-between" style={{ color: "rgba(255,255,255,0.45)" }}>
          <div>© {new Date().getFullYear()} STATUS SVOBODY · Юлия Армина</div>
          <div>Сайт носит информационный характер</div>
        </div>
      </div>
    </footer>
  );
}
