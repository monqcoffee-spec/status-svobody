import { useState } from "react";
import { Quote, Send, ArrowUpRight, Star } from "lucide-react";

type Testimonial = {
  id: string;
  initials: string;
  name: string;
  meta: string;
  scoreDelta: string;
  quote: string;
  result: string;
  tgUrl?: string;
};

const TG_CHANNEL = "https://t.me/status_svobody";

const testimonials: Testimonial[] = [
  {
    id: "t1",
    initials: "А. К.",
    name: "Андрей К.",
    meta: "IT-специалист · Москва · 38 лет",
    scoreDelta: "412 → 742",
    quote:
      "Получил отказ по ипотеке и думал, что это конец. Юлия по шагам объяснила, что в моих отчётах БКИ можно поправить, а что — просто требует времени и дисциплины. Через 22 месяца получил одобрение в крупном банке.",
    result: "Ипотека одобрена · 22 мес.",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t2",
    initials: "М. С.",
    name: "Марина С.",
    meta: "Самозанятая · Краснодар · 42 года",
    scoreDelta: "385 → 675",
    quote:
      "После развода рейтинг был никакой. Боялась, что навсегда. Юлия нашла два дубля в моих отчётах, помогла их убрать, дальше — план на 12 месяцев. Через полтора года автокредит под нормальную ставку.",
    result: "Автокредит без переплаты",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t3",
    initials: "Д. В.",
    name: "Денис В.",
    meta: "Бывший ИП · Екатеринбург · 45 лет",
    scoreDelta: "352 → 684",
    quote:
      "Бизнес не пережил 2022-й, остались просрочки по поручительству. Думал, что банки больше никогда меня не пустят. По плану отработали 10 месяцев — и одобрили ипотеку на первичку. Это реально работает, если делать по алгоритму.",
    result: "Ипотека через 10 мес.",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t4",
    initials: "Е. П.",
    name: "Елена П.",
    meta: "Преподаватель · Санкт-Петербург · 51 год",
    scoreDelta: "468 → 712",
    quote:
      "Ценю прямоту: на первой консультации мне сказали, что моя ситуация решается без сложных манипуляций — просто 8–10 месяцев чистой дисциплины. Так и вышло. Никто не разводил на «пакеты услуг».",
    result: "Кредитка под путешествия",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t5",
    initials: "Р. Х.",
    name: "Руслан Х.",
    meta: "Логист · Казань · 34 года",
    scoreDelta: "298 → 688",
    quote:
      "Поручительство по чужому кредиту убило рейтинг. Юлия объяснила, что и за какой срок реально вытащить. Через 16 месяцев — крупный потребкредит под адекватную ставку. Без сказок и без впаривания.",
    result: "Потребкредит, нормальная ставка",
    tgUrl: TG_CHANNEL,
  },
  {
    id: "t6",
    initials: "О. Н.",
    name: "Ольга Н.",
    meta: "Медсестра · Новосибирск · 47 лет",
    scoreDelta: "404 → 696",
    quote:
      "Главное — личное ведение. Не «менеджер по работе с клиентами», не бот в Telegram, а живой человек, который знает мою ситуацию. Помогли с отчётами, дали понятный план — и я сама вижу, как растёт рейтинг.",
    result: "Стабильный рост рейтинга",
    tgUrl: TG_CHANNEL,
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border border-white/8 bg-ink-soft/50 px-6 py-4" style={{ borderRadius: "2px" }}>
        <div className="flex items-center gap-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-cyan text-cyan" />
            ))}
          </div>
          <span className="smallcaps text-[10px] text-silver-dim">
            Истории клиентов · публикуются с письменного согласия
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

              <div className="mt-6 inline-flex w-fit items-center gap-2 border border-white/10 bg-ink/60 px-3 py-1.5" style={{ borderRadius: "2px" }}>
                <span className="smallcaps text-[9px] text-silver-dim">Рейтинг</span>
                <span className="font-display text-sm tabular text-cyan text-glow">{t.scoreDelta}</span>
              </div>

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

              <div className="mt-6 border-t border-white/8 pt-4">
                <div className="smallcaps text-[9px] text-silver-dim">Итог</div>
                <div className="mt-1.5 text-sm text-silver">{t.result}</div>
              </div>
            </article>
          );
        })}
      </div>

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
