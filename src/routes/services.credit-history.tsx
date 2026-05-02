import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import particlesRise from "@/assets/particles-rise.jpg";

export const Route = createFileRoute("/services/credit-history")({
  head: () => ({
    meta: [
      { title: "Сопровождение по кредитной истории — STATUS SVOBODY" },
      {
        name: "description",
        content:
          "Юридическое сопровождение по восстановлению кредитной истории за 1,5–3 года: оспаривание некорректных записей в трёх БКИ, выстраивание рейтинга, путь к ипотеке.",
      },
      { property: "og:title", content: "Сопровождение по кредитной истории — STATUS SVOBODY" },
      {
        property: "og:description",
        content:
          "Правовое сопровождение работы с тремя БКИ и подготовки к ипотеке. Лично с Юлией Арминой.",
      },
      { name: "twitter:title", content: "Сопровождение по кредитной истории — STATUS SVOBODY" },
      {
        name: "twitter:description",
        content:
          "Правовое сопровождение работы с тремя БКИ и подготовки к ипотеке.",
      },
    ],
  }),
  component: CreditPage,
});

function CreditPage() {
  const myths = [
    { m: "Кредитная история обнулится через 7 лет — можно ничего не делать", a: "Записи действительно постепенно уходят, но без активных действий рейтинг не вырастет — банки ориентируются на свежую активность." },
    { m: "Можно «удалить» плохую КИ через серые сервисы за 1 день", a: "Нет. Бюро меняют записи только по официальным обращениям. Сервисы, обещающие удаление, либо дублируют ваше право, либо обманывают." },
    { m: "Если был просрочен долг — ипотеку не дадут никогда", a: "Дадут. Через 1,5–3 года грамотной работы с КИ банки начинают одобрять — это подтверждается практикой." },
  ];

  const steps = [
    "Запросить КИ во всех 3 БКИ (НБКИ, ОКБ, Скоринг Бюро)",
    "Найти некорректные записи: проданные долги, незакрытые проценты, дубли",
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
          <Eyebrow>Услуга 02 · основной продукт</Eyebrow>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.25rem,7vw,5.5rem)] text-gradient-cyan text-glow">
            Восстановление кредитной истории
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-silver/75">
            Кредитная история — это набор записей, которые можно проверить, оспорить
            и переписать. Реальный путь к нормальному рейтингу —
            <span className="text-cyan"> 1,5–3 года</span> грамотных действий.
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
            Реальная цель: <span className="text-cyan italic text-glow">ипотека через 1,5–3 года</span>
          </H2>
          <p className="mx-auto mt-8 max-w-xl text-silver/75">
            У клиентов это работает. Главное — начать сразу и не делать ошибок
            «по советам с форумов».
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan rounded-sm">
              Разбор моей КИ — записаться <ArrowRight className="h-4 w-4" />
            </a>
            <LeadFormDialog
              source="credit-history"
              headline="Запись на разбор кредитной истории"
              trigger={
                <button type="button" className="btn-ghost rounded-sm">Оставить заявку</button>
              }
            />
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
