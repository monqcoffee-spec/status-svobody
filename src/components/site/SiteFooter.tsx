import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-deep">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-30"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 35%, transparent), transparent)" }}
      />

      <div className="container-tight relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Logo size={56} />
            <div>
              <div className="font-display text-lg tracking-[0.28em] text-silver uppercase">Статус Свободы</div>
              <div className="text-[10px] tracking-[0.4em] text-cyan uppercase mt-1">Кредитная история · Финансы</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-silver-dim">
            Финансовое консультирование и восстановление кредитной истории.
            Прямая работа без посредников и колл-центров. От разбора БКИ
            до одобрения ипотеки.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="smallcaps text-cyan">Навигация</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ["/about", "О бренде"],
              ["/services/diagnostic", "Финансовая диагностика"],
              ["/services/credit-history", "Восстановление КИ"],
              ["/contacts", "Контакты"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-silver/70 hover:text-cyan transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="smallcaps text-cyan">Связь</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="text-silver/80">Москва · Цветной бульвар, 13</li>
            <li><a href="tel:+79654457378" className="tabular text-silver hover:text-cyan transition-colors">+7 (965) 445-73-78</a></li>
            <li><a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="text-silver/80 hover:text-cyan transition-colors">@status_svobody_bot</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-tight flex flex-col gap-2 py-6 text-[11px] tracking-wider text-silver-dim md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Статус Свободы · Финансовый консультант</div>
          <div>Сайт носит информационный характер</div>
        </div>
      </div>
    </footer>
  );
}
