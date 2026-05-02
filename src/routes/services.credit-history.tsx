import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import particlesRise from "@/assets/particles-rise.jpg";

export const Route = createFileRoute("/services/credit-history")({
  head: () => ({
    meta: [
      { title: "Восстановление кредитной истории — STATUS SVOBODY" },
      {
        name: "description",
        content:
          "Банкротство — не приговор для КИ. Алгоритм восстановления за 1,5–3 года: чистка некорректных записей, выстраивание рейтинга, путь к ипотеке.",
      },
      { property: "og:title", content: "Восстановление КИ после банкротства" },
      {
        property: "og:description",
        content:
          "Уникальная услуга бренда STATUS SVOBODY: помогаем восстановить кредитную историю после процедуры.",
      },
    ],
  }),
  component: CreditPage,
});

function CreditPage() {
  const myths = [
    { m: "Долги исчезают по сроку давности", a: "Нет. В БКИ они остаются навсегда без официального закрытия." },
    { m: "После банкротства запись в БКИ — клеймо на всю жизнь", a: "Нет, это просто фиксация юридического факта. Рейтинг восстанавливается." },
    { m: "Финуправляющий может не передавать данные в БКИ", a: "Нет. Это прямая обязанность по закону. Без передачи процедура не считается завершённой." },
  ];

  const steps = [
    "Запросить свою КИ во всех 3 БКИ (НБКИ, ОКБ, Эквифакс)",
    "Найти некорректные записи: проданные долги, незакрытые проценты",
    "Подать официальные обращения на исправление",
    "Открыть безопасный финансовый продукт — карта рассрочки или дебетовая с лимитом",
    "Чистая платёжная дисциплина 6–12 месяцев",
    "Малый кредит → крупный → ипотека",
  ];

  return (
    <SiteLayout>
      <section className="relative -mt-20 overflow-hidden bg-aurora pt-32 pb-20 md:pt-40 md:pb-28">
        <ParticleField density={50} />
        <img
          src={particlesRise}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
          style={{ maskImage: "radial-gradient(ellipse 80% 80% at 70% 60%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 60%, black, transparent 80%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
        <div className="container-tight relative">
          <Eyebrow>Услуга 02 · уникальная</Eyebrow>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.25rem,7vw,5.5rem)] text-gradient-cyan text-glow">
            Восстановление кредитной истории
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-silver/75">
            Банкротство — не приговор для КИ. Это запись о юридическом факте.
            Восстановить рейтинг можно за <span className="text-cyan">1,5–3 года</span>,
            если действовать грамотно.
          </p>
        </div>
      </section>

      <Section variant="default">
        <SectionLabel n="01" title="Главные мифы" />
        <H2 className="mt-8 max-w-3xl">Что говорят в интернете — и как на самом деле</H2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {myths.map((it, i) => (
            <div key={i} className="border border-white/8 bg-ink-soft/60 p-7" style={{ borderRadius: "2px" }}>
              <div className="smallcaps text-silver-dim">Миф {String(i + 1).padStart(2, "0")}</div>
              <p className="mt-4 font-display text-lg text-silver">«{it.m}»</p>
              <div className="mt-5 border-t border-white/10 pt-4 text-sm text-silver-dim leading-relaxed">{it.a}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="darker">
        <SectionLabel n="02" title="Алгоритм" />
        <H2 className="mt-8 max-w-3xl">
          6 шагов до <span className="text-cyan italic">нормального рейтинга</span>
        </H2>

        <ol className="mt-12 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2" style={{ borderRadius: "2px" }}>
          {steps.map((s, i) => (
            <li key={i} className="flex gap-5 bg-ink-soft p-7 transition-colors hover:bg-ink">
              <div className="font-display text-3xl tabular text-cyan text-glow">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-base text-silver leading-snug pt-1">{s}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section variant="glow">
        <div className="text-center">
          <H2 className="max-w-3xl mx-auto">
            Реальная цель: <span className="text-cyan italic text-glow">ипотека через 2–3 года</span>
          </H2>
          <p className="mx-auto mt-8 max-w-xl text-silver/75">
            У клиентов это работает. Главное — начать сразу после завершения процедуры
            и не делать ошибок «по советам с форумов».
          </p>
          <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="mt-10 btn-cyan rounded-sm">
            Разбор моей КИ — записаться <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
