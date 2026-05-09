import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, color-mix(in oklab, #c89aa1 80%, white) 60%, #b88791 100%)",
        borderTop: "1px solid color-mix(in oklab, var(--gold-heading) 35%, transparent)",
        color: "#2A1118",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-30"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold-heading) 40%, transparent), transparent)" }}
      />

      <div className="container-tight relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Logo size={64} className="h-14 md:h-16" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-[0.28em] uppercase" style={{ color: "var(--gold-heading-deep)" }}>Статус Свободы</div>
              <div className="text-[10px] tracking-[0.4em] uppercase mt-1" style={{ color: "#5a3540" }}>Premium legal consulting</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: "#3a1a22" }}>
            Юридические решения для вашей свободы. Личное сопровождение
            основателем бренда — без посредников, менеджеров и колл-центров.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="smallcaps" style={{ color: "var(--gold-heading-deep)" }}>Навигация</div>
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
                <a href={href} className="transition-colors hover:opacity-70" style={{ color: "#2A1118" }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="smallcaps" style={{ color: "var(--gold-heading-deep)" }}>Связь</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li style={{ color: "#3a1a22" }}>Москва · Цветной бульвар, 13</li>
            <li><a href="tel:+79654457378" className="tabular transition-colors hover:opacity-70" style={{ color: "#2A1118" }}>+7 (965) 445-73-78</a></li>
            <li><a href="https://t.me/zakon_127" target="_blank" rel="noopener" className="transition-colors hover:opacity-70" style={{ color: "#3a1a22" }}>Канал · t.me/zakon_127</a></li>
            <li><a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="transition-colors hover:opacity-70" style={{ color: "#3a1a22" }}>Интенсив · @status_svobody_bot</a></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid color-mix(in oklab, var(--gold-heading) 25%, transparent)" }}>
        <div className="container-tight flex flex-col gap-2 py-6 text-[11px] tracking-wider md:flex-row md:items-center md:justify-between" style={{ color: "#5a3540" }}>
          <div>© {new Date().getFullYear()} STATUS SVOBODY · Юлия Армина</div>
          <div>Сайт носит информационный характер</div>
        </div>
      </div>
    </footer>
  );
}
