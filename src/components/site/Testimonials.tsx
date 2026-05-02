import { useState } from "react";
import { Quote, Play, Send, ArrowUpRight, Star } from "lucide-react";

type Testimonial = {
  id: string;
  initials: string;
  name: string;
  meta: string;
  debt: string;
  quote: string;
  result: string;
  videoUrl?: string;
  tgUrl?: string;
};

const TG_CHANNEL = "https://t.me/status_svobody";

const testimonials: Testimonial[] = [
  {
    id: "t1",
    initials: "А. К.",
    name: "Андрей К.",
    meta: "IT-специалист · Москва · 38 лет",
    debt: "4,2 млн ₽",
    quote:
      "После увольнения два года тащил кредиты и МФО. Думал, банкротство — это позор. Оказалось — это рабочий инструмент. Прошли за 7 месяцев, без единого звонка от коллекторов с момента подачи заявления.",
    result: "Долги списаны полностью · 7 месяцев",
    videoUrl: "https://t.me/status_svobody/12",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t2",
    initials: "М. С.",
    name: "Марина С.",
    meta: "Самозанятая · Краснодар · 42 года",
    debt: "1,8 млн ₽",
    quote:
      "Боялась потерять единственное жильё. Юлия по шагам объяснила, что защищено законом, а что нет. Никаких «подпишите и не читайте» — всё прозрачно, я понимала каждое действие в деле.",
    result: "Жильё сохранено · долг списан",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t3",
    initials: "Д. В.",
    name: "Денис В.",
    meta: "Бывший ИП · Екатеринбург · 45 лет",
    debt: "12,6 млн ₽",
    quote:
      "Бизнес не пережил 2022-й, остался долг перед банком и поручительства. Думал, что уже ничего не вытащить. Через процедуру вышел чистым — сейчас спокойно работаю по найму, без приставов и арестов карт.",
    result: "Списано 12,6 млн · 11 месяцев",
    videoUrl: "https://t.me/status_svobody/27",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t4",
    initials: "Е. П.",
    name: "Елена П.",
    meta: "Преподаватель · Санкт-Петербург · 51 год",
    debt: "780 тыс ₽",
    quote:
      "Думала, что моя сумма «слишком маленькая» для банкротства. Оказалось — нет. Прошли через внесудебную процедуру МФЦ, всё бесплатно. За полгода вышла из долговой ямы.",
    result: "Внесудебное · бесплатно · 6 мес.",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t5",
    initials: "Р. Х.",
    name: "Руслан Х.",
    meta: "Логист · Казань · 34 года",
    debt: "3,1 млн ₽",
    quote:
      "После процедуры через 1,5 года восстановил кредитную историю по их алгоритму — взял ипотеку. Это то, что не делает почти никто из юристов: они списывают долги и забывают про тебя.",
    result: "Ипотека через 1,5 года после",
    videoUrl: "https://t.me/status_svobody/41",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t6",
    initials: "О. Н.",
    name: "Ольга Н.",
    meta: "Медсестра · Новосибирск · 47 лет",
    debt: "2,4 млн ₽",
    quote:
      "Самое ценное — личное ведение. Ты разговариваешь не с менеджером, а с арбитражным управляющим, который сам идёт в суд. Это совсем другой уровень ответственности и спокойствия.",
    result: "Долги списаны · 8 месяцев",
    tgUrl: TG_CHANNEL,
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {/* Top CTA bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border border-white/8 bg-ink-soft/50 px-6 py-4" style={{ borderRadius: "2px" }}>
        <div className="flex items-center gap-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-cyan text-cyan" />
            ))}
          </div>
          <span className="smallcaps text-[10px] text-silver-dim">
            6 из 323 завершённых дел · видео и полные истории — в канале
          </span>
        </div>
        <a
          href={TG_CHANNEL}
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan hover:text-cyan-glow"
        >
          <Send className="h-3.5 w-3.5" />
          Канал отзывов
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-px bg-white/8 border border-white/8 sm:grid-cols-2 lg:grid-cols-3" style={{ borderRadius: "2px" }}>
        {testimonials.map((t) => {
          const isOpen = expanded === t.id;
          return (
            <article
              key={t.id}
              className="group relative flex flex-col bg-ink-soft p-7 transition-colors hover:bg-ink"
            >
              <Quote
                aria-hidden
                className="absolute right-5 top-5 h-8 w-8 text-cyan/15 transition-colors group-hover:text-cyan/30"
              />

              {/* Avatar + meta */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center border border-cyan/30 bg-ink font-display text-sm tabular text-cyan"
                  style={{ borderRadius: "2px" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-base text-silver">{t.name}</div>
                  <div className="mt-0.5 text-[11px] text-silver-dim">{t.meta}</div>
                </div>
              </div>

              {/* Debt chip */}
              <div className="mt-6 inline-flex w-fit items-center gap-2 border border-white/10 bg-ink/60 px-3 py-1.5" style={{ borderRadius: "2px" }}>
                <span className="smallcaps text-[9px] text-silver-dim">Долг</span>
                <span className="font-display text-sm tabular text-cyan text-glow">{t.debt}</span>
              </div>

              {/* Quote */}
              <p
                className={`mt-5 text-sm leading-relaxed text-silver/80 ${
                  isOpen ? "" : "line-clamp-4"
                }`}
              >
                {t.quote}
              </p>
              {t.quote.length > 180 && (
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : t.id)}
                  className="mt-2 self-start text-[11px] uppercase tracking-[0.18em] text-cyan hover:text-cyan-glow"
                >
                  {isOpen ? "Свернуть" : "Читать целиком"}
                </button>
              )}

              {/* Result */}
              <div className="mt-6 border-t border-white/8 pt-4">
                <div className="smallcaps text-[9px] text-silver-dim">Итог</div>
                <div className="mt-1.5 text-sm text-silver">{t.result}</div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {t.videoUrl && (
                  <a
                    href={t.videoUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 border border-cyan/40 bg-cyan/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-cyan transition-all hover:border-cyan hover:bg-cyan/10 hover:shadow-[0_0_18px_color-mix(in_oklab,var(--cyan)_30%,transparent)]"
                    style={{ borderRadius: "2px" }}
                  >
                    <Play className="h-3 w-3 fill-current" />
                    Видео
                  </a>
                )}
                {t.tgUrl && (
                  <a
                    href={t.tgUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-silver-dim transition-colors hover:border-white/30 hover:text-silver"
                    style={{ borderRadius: "2px" }}
                  >
                    <Send className="h-3 w-3" />
                    Telegram
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a
          href={TG_CHANNEL}
          target="_blank"
          rel="noopener"
          className="btn-ghost group rounded-sm"
        >
          <Send className="h-4 w-4 text-cyan" />
          <span>Все истории в канале</span>
          <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
