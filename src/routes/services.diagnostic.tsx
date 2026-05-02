import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import featherImg from "@/assets/feather-light.jpg";

export const Route = createFileRoute("/services/diagnostic")({
  head: () => ({
    meta: [
      { title: "Финансовая диагностика — Статус Свободы" },
      {
        name: "description",
        content:
          "Полный разбор финансовой ситуации: долги, доходы, имущество, кредитная история. На выходе — стратегия и понятный следующий шаг.",
      },
      { property: "og:title", content: "Финансовая диагностика" },
      {
        property: "og:description",
        content: "Разбор вашей ситуации с финансовым консультантом. Стратегия и план — без обещаний и навязывания.",
      },
    ],
  }),
  component: DiagnosticPage,
});

function DiagnosticPage() {
  const includes = [
    "Запрос отчётов в трёх БКИ и их полный разбор",
    "Анализ долговой нагрузки и структуры платежей",
    "Оценка имущества и доходов с точки зрения банков",
    "Сценарный план: что делать в горизонте 6, 12, 24 месяцев",
    "Подсветка рисков (просрочки, спорные записи, ошибки бюро)",
    "Письменная итоговая стратегия — чтобы было к чему возвращаться",
  ];

  return (
    <SiteLayout>
      <section className="relative -mt-20 overflow-hidden bg-aurora pt-32 pb-20 md:pt-40 md:pb-28">
        <ParticleField density={50} />
        <img
          src={featherImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1080}
          height={1920}
          className="pointer-events-none absolute right-0 top-0 h-full w-2/3 object-cover object-right opacity-40"
          style={{ maskImage: "linear-gradient(to left, black 20%, transparent 95%)", WebkitMaskImage: "linear-gradient(to left, black 20%, transparent 95%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
        <div className="container-tight relative">
          <Eyebrow>Услуга 01 · с чего начать</Eyebrow>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.25rem,7vw,5.5rem)] text-gradient-cyan text-glow">
            Финансовая диагностика
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-silver/75">
            Один разбор — и вы видите всю картину: где вы сейчас,
            что мешает росту рейтинга и какой следующий конкретный шаг.
            <span className="text-cyan"> Без оценочных суждений и навязывания услуг.</span>
          </p>
        </div>
      </section>

      <Section variant="default">
        <SectionLabel n="01" title="Что входит" />
        <H2 className="mt-8 max-w-3xl">Что вы получите на выходе</H2>

        <div className="mt-12 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2" style={{ borderRadius: "2px" }}>
          {includes.map((s, i) => (
            <div key={i} className="flex gap-4 bg-ink-soft p-7 transition-colors hover:bg-ink">
              <Check className="mt-1 h-5 w-5 shrink-0 text-cyan" />
              <div className="font-display text-base text-silver leading-snug">{s}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="darker">
        <SectionLabel n="02" title="Кому подходит" />
        <H2 className="mt-8 max-w-3xl">
          Когда диагностика <span className="text-cyan italic">особенно полезна</span>
        </H2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Получили отказ по кредиту", d: "Хочется понять, что именно банк увидел в вашем профиле и как это исправить." },
            { t: "Готовитесь к ипотеке", d: "За 1–3 года до подачи заявки нужно понять, какие шаги дадут максимальный рост рейтинга." },
            { t: "Запутались в долгах", d: "Несколько кредиторов, нет общей картины. На диагностике её собираем в один документ." },
          ].map((p) => (
            <div key={p.t} className="border border-white/8 bg-ink-soft/60 p-8" style={{ borderRadius: "2px" }}>
              <h3 className="font-display text-xl text-silver">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-dim">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="glow">
        <div className="text-center">
          <H2 className="max-w-3xl mx-auto">
            Запишитесь на <span className="text-cyan italic text-glow">диагностику</span>
          </H2>
          <p className="mx-auto mt-8 max-w-xl text-silver/75">
            Первая консультация — бесплатно. Дальше — только если решим, что есть смысл работать дальше.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan rounded-sm">
              Записаться через Telegram <ArrowRight className="h-4 w-4" />
            </a>
            <LeadFormDialog
              source="diagnostic"
              headline="Запись на финансовую диагностику"
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
