import { Star, ArrowUpRight, MessageSquarePlus } from "lucide-react";
import { Section, Eyebrow, H2 } from "@/components/site/Section";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const YANDEX_REVIEWS_URL =
  "https://yandex.ru/uslugi/profile/JuliaArmina-2227671";
const YANDEX_LEAVE_REVIEW_URL =
  "https://yandex.ru/uslugi/profile/JuliaArmina-2227671?utm_source=lovable&utm_medium=site#reviews";

type Review = {
  name: string;
  rating: number;
  text: string;
  date?: string;
};

// Тексты отзывов сохранены без изменений.
const REVIEWS: Review[] = [
  {
    name: "Ирина М.",
    rating: 5,
    date: "Март 2025",
    text:
      "Юлия — настоящий профессионал. Помогла оспорить запись в кредитной истории, которую банк отказывался убирать почти год. Всё чётко, по закону, без лишних обещаний. Рекомендую!",
  },
  {
    name: "Алексей К.",
    rating: 5,
    date: "Февраль 2025",
    text:
      "Обратился на грани банкротства. Получил спокойный, структурный план: что делать с приставами, как закрыть микрозаймы, как восстановить рейтинг. Через полгода — одобрена ипотека.",
  },
  {
    name: "Светлана П.",
    rating: 5,
    date: "Январь 2025",
    text:
      "Я думала, моя кредитная история — приговор. Команда Status Svobody показала, что это не так. Убрали ошибочные просрочки, объяснили права. Очень человеческий подход.",
  },
  {
    name: "Дмитрий С.",
    rating: 5,
    date: "Декабрь 2024",
    text:
      "Закрыли вопрос со старыми долгами через банкротство — без потери имущества и нервов. Юлия лично сопровождала каждое заседание. Цена честная, результат — реальный.",
  },
  {
    name: "Мария Л.",
    rating: 5,
    date: "Ноябрь 2024",
    text:
      "Экспресс-анализ бюро кредитных историй за один день. Получила письменное заключение и пошаговый план. Сделала всё сама — кредитный рейтинг вырос на 120 пунктов за 4 месяца.",
  },
  {
    name: "Андрей В.",
    rating: 5,
    date: "Октябрь 2024",
    text:
      "Премиум-сопровождение под ключ. Решены вопросы с Федеральной службы судебных приставов, удалены устаревшие записи, восстановлена репутация заёмщика. Это не услуга — это статус.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Рейтинг ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-current" : "opacity-25"}
          style={{ color: "#E0B96A" }}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, i, compact }: { review: Review; i: number; compact?: boolean }) {
  return (
    <ScrollReveal as="li" delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)} className="snap-start">
      <a
        href={YANDEX_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`testimonial-card group relative block h-full cursor-pointer ${compact ? "p-5 sm:p-6" : "p-7 sm:p-8"}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className={`font-display ${compact ? "text-base" : "text-lg"}`} style={{ color: "var(--wine-deep)" }}>
              {review.name}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <Stars rating={review.rating} />
              {review.date && (
                <span className="text-[11px] tracking-[0.08em] uppercase opacity-60" style={{ color: "var(--card-text-muted)" }}>
                  · {review.date}
                </span>
              )}
            </div>
          </div>
          <ArrowUpRight
            size={18}
            className="shrink-0 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: "#874255" }}
          />
        </div>

        <p className={`${compact ? "mt-3 text-[13.5px] leading-[1.55] line-clamp-4" : "mt-5 text-[15px] leading-relaxed"}`} style={{ color: "var(--card-text)" }}>
          {review.text}
        </p>

        <div className={`${compact ? "mt-4 pt-3" : "mt-6 pt-4"} flex items-center justify-between border-t`} style={{ borderColor: "color-mix(in oklab, #874255 14%, transparent)" }}>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--card-text-muted)" }}>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "#FF3333", boxShadow: "0 0 8px #FF3333" }}
              aria-hidden
            />
            Яндекс Услуги
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.12em] uppercase font-medium transition-colors" style={{ color: "#874255" }}>
            Оставить отзыв
            <MessageSquarePlus size={13} />
          </span>
        </div>
      </a>
    </ScrollReveal>
  );
}

export function Testimonials({ compact = false }: { compact?: boolean } = {}) {
  return (
    <Section variant="default" id="testimonials">
      <div className="text-center max-w-3xl mx-auto">
        <Eyebrow>Отзывы клиентов</Eyebrow>
        <H2 className={compact ? "mt-4 text-3xl md:text-4xl" : "mt-5"}>
          Нам доверяют люди, которым мы помогли начать новую жизнь
        </H2>
        <p className={`mt-4 ${compact ? "text-sm sm:text-base" : "text-base sm:text-lg"}`} style={{ color: "var(--text-muted)" }}>
          Каждый отзыв — реальная история освобождения от тяжёлой ситуации.
        </p>
      </div>

      <ul
        className={`
          ${compact ? "mt-8 sm:mt-10 gap-4" : "mt-12 sm:mt-14 gap-5 sm:gap-6"}
          grid
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory
          max-md:-mx-4 max-md:px-4 max-md:pb-2
        `}
        style={{ scrollbarWidth: "none" }}
      >
        {REVIEWS.map((r, i) => (
          <div key={i} className="max-md:min-w-[86%] max-md:flex-shrink-0">
            <ReviewCard review={r} i={i} compact={compact} />
          </div>
        ))}
      </ul>

      <div className={`${compact ? "mt-8 sm:mt-10" : "mt-12 sm:mt-14"} flex flex-col items-center gap-4`}>
        <a
          href={YANDEX_LEAVE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`testimonial-cta group inline-flex items-center gap-3 rounded-full font-display tracking-[0.14em] uppercase ${compact ? "px-6 py-3 text-xs" : "px-8 py-4 text-sm"}`}
        >
          <MessageSquarePlus size={18} />
          Оставить отзыв
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
        <span className="text-xs tracking-[0.12em] uppercase opacity-60" style={{ color: "var(--text-muted)" }}>
          Поделитесь своим опытом на Яндекс Услугах
        </span>
      </div>
    </Section>
  );
}
