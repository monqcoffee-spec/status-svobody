import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import featherImg from "@/assets/feather-light.jpg";

export const Route = createFileRoute("/intensive")({
  head: () => ({
    meta: [
      { title: "Интенсив «Status Svobody» — 5 уроков бесплатно" },
      {
        name: "description",
        content:
          "5 коротких уроков о банкротстве физлиц в Telegram. Без звонков и навязывания. Чек-лист «подходит ли вам банкротство» за 3 минуты.",
      },
      { property: "og:title", content: "Интенсив «Status Svobody»" },
      {
        property: "og:description",
        content:
          "Бесплатный интенсив о банкротстве по 127-ФЗ. Полностью в Telegram, 5 уроков.",
      },
    ],
  }),
  component: IntensivePage,
});

function IntensivePage() {
  const lessons = [
    { n: "01", t: "Что такое банкротство по 127-ФЗ", d: "Кому реально подходит, а кому — нет. Без юридического канцелярита." },
    { n: "02", t: "Что заберут, а что — нельзя по закону", d: "Единственное жильё, личные вещи, доход на жизнь. Реальные ограничения статьи 446 ГПК." },
    { n: "03", t: "Как остановить коллекторов и приставов", d: "Что делать прямо сейчас, до подачи заявления. И что меняется после введения процедуры." },
    { n: "04", t: "Сколько это реально стоит", d: "Все статьи расходов до копейки. Что входит в работу АУ, а что — отдельные платежи в суд." },
    { n: "05", t: "Чек-лист «подходит ли мне банкротство»", d: "10 вопросов за 3 минуты. По ответам — честный вердикт: идти или искать другой путь." },
  ];

  return (
    <SiteLayout>
      <section className="relative -mt-20 min-h-[80svh] overflow-hidden bg-aurora pt-32 pb-24 md:pt-40">
        <ParticleField density={80} />
        <img
          src={featherImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1080}
          height={1920}
          className="pointer-events-none absolute right-0 top-0 h-full w-full object-cover object-right opacity-50 md:w-2/3"
          style={{ maskImage: "linear-gradient(to left, black 30%, transparent 90%)", WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 90%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full opacity-40 animate-drift"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 30%, transparent), transparent)" }}
        />
        <div className="container-tight relative">
          <Eyebrow>Бесплатно · 5 уроков · Telegram</Eyebrow>
          <h1 className="display mt-8 max-w-5xl text-[clamp(2.5rem,9vw,7rem)] text-gradient-cyan text-glow">
            Первый шаг <br />
            <span className="italic">к статусу свободы</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-silver/80">
            Пять уроков. Один чек-лист. Ноль звонков. Бренд начинается с этой точки —
            и заканчивается решением арбитражного суда о списании ваших долгов.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan group rounded-sm">
              <span>Открыть первый урок</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="/about" className="text-sm text-silver-dim hover:text-cyan transition-colors">
              Узнать больше о бренде →
            </a>
          </div>
        </div>
      </section>

      <Section variant="darker">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel n="01" title="Программа" />
            <h2 className="display mt-8 text-3xl text-silver md:text-4xl">
              5 уроков, <br />по 5 минут каждый
            </h2>
            <p className="mt-6 text-sm text-silver-dim leading-relaxed">
              Бот присылает уроки удобными порциями. Можно проходить за один вечер
              или растянуть на неделю — материалы остаются у вас навсегда.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              {[
                "Никаких звонков менеджера",
                "Никаких автодозвонов",
                "Только бот и полезная информация",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2.5 text-silver/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-px bg-white/5 border border-white/5" style={{ borderRadius: "2px" }}>
            {lessons.map((l) => (
              <div key={l.n} className="group grid gap-4 bg-ink-soft p-6 md:grid-cols-12 md:p-7 transition-colors hover:bg-ink">
                <div className="md:col-span-2 font-display text-3xl tabular text-cyan text-glow">{l.n}</div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-xl text-silver group-hover:text-cyan-glow transition-colors">{l.t}</h3>
                  <p className="mt-2 text-sm text-silver-dim leading-relaxed">{l.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="glow">
        <div className="text-center">
          <h3 className="display text-3xl text-silver md:text-5xl">
            От тяжести — <span className="text-cyan italic text-glow">к ясности.</span>
          </h3>
          <p className="mx-auto mt-6 max-w-xl text-silver/75">
            Один шаг отделяет вас от понимания процедуры. Бот ответит за секунду —
            и проведёт по всему пути.
          </p>
          <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="mt-10 btn-cyan rounded-sm">
            Открыть первый урок <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
