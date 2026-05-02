import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Workflow } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { Logo } from "@/components/site/Logo";
import aboutImg from "@/assets/about-transformation.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О бренде — STATUS SVOBODY · Legal-tech нового поколения" },
      {
        name: "description",
        content:
          "STATUS SVOBODY — бренд освобождения от долгов. 5 лет в реестре арбитражных управляющих, 323 завершённые процедуры, 888 миллионов списанных долгов.",
      },
      { property: "og:title", content: "О бренде STATUS SVOBODY" },
      {
        property: "og:description",
        content:
          "Превращение тяжести долгов в ясность финансовой свободы. Технологичная процедура банкротства по 127-ФЗ.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative -mt-20 overflow-hidden bg-aurora pt-32 pb-24 md:pt-40 md:pb-32">
        <ParticleField density={60} />
        <img
          src={aboutImg}
          alt=""
          aria-hidden
          width={1280}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          style={{ maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
        <div className="container-tight relative text-center">
          <Eyebrow>О бренде</Eyebrow>
          <h1 className="display mt-8 text-[clamp(2.5rem,8vw,6rem)] text-gradient-cyan text-glow">
            Status Svobody
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-silver/75">
            Legal-tech бренд, выросший из практики арбитражного управляющего.
            Превращаем тяжесть долгов в&nbsp;ясность финансовой свободы — технологично,
            прозрачно, законно.
          </p>
        </div>
      </section>

      {/* Founder card */}
      <Section variant="darker">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="relative animate-float">
              <Logo size={180} />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, color-mix(in oklab, var(--cyan) 30%, transparent), transparent 65%)",
                  filter: "blur(24px)",
                }}
              />
            </div>
            <div className="mt-8 text-center lg:text-left">
              <div className="smallcaps text-cyan">Основатель и арбитражный управляющий</div>
              <div className="mt-3 font-display text-2xl text-silver">Юлия Армина</div>
              <div className="mt-1 text-sm text-silver-dim">Реестр АУ № 20068 · с 17.11.2020</div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-silver/80">
            <p>
              <span className="text-cyan italic">STATUS SVOBODY</span> — это не юридическая
              фирма. Это бренд новой формации: арбитражная процедура по 127-ФЗ, упакованная
              в технологичный продукт с измеримыми метриками.
            </p>
            <p>
              За пять лет — <span className="text-silver">323 завершённые процедуры</span> банкротства
              физических лиц. Сегодня в работе <span className="text-silver">50 активных дел</span>.
              Сумма законно списанных долгов — <span className="text-cyan">888 миллионов рублей</span>.
              Каждое дело завершено решением арбитражного суда и опубликовано в ЕФРСБ.
            </p>
            <p className="text-silver-dim">
              Здесь нет менеджеров и колл-центров. Один арбитражный управляющий,
              цифровой контур, прямой контакт. Освобождение от долгов как продукт,
              а не услуга «по старинке».
            </p>
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section variant="default">
        <SectionLabel n="01" title="Принципы" />
        <H2 className="mt-8 max-w-3xl">
          Что отличает <span className="text-cyan italic">Status Svobody</span>
        </H2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              t: "Личная ответственность",
              d: "Имущественная ответственность через СРО. Не «команда», не «партнёры» — конкретный арбитражный управляющий.",
            },
            {
              icon: <Workflow className="h-6 w-6" />,
              t: "Технологичный контур",
              d: "Telegram-бот, цифровая диагностика, прозрачный трекинг процедуры. Виден каждый этап.",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              t: "Честность на входе",
              d: "Если процедура вам не подходит — скажу сразу и бесплатно. Никаких 100% гарантий списания.",
            },
          ].map((p) => (
            <div key={p.t} className="group border border-white/8 bg-ink-soft/60 p-8 transition-all hover:border-cyan/40" style={{ borderRadius: "2px" }}>
              <div className="inline-flex h-12 w-12 items-center justify-center border border-cyan/30 text-cyan transition-all group-hover:border-cyan group-hover:shadow-[0_0_20px_color-mix(in_oklab,var(--cyan)_40%,transparent)]" style={{ borderRadius: "2px" }}>
                {p.icon}
              </div>
              <h3 className="mt-6 font-display text-xl text-silver">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-dim">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="glow">
        <div className="text-center">
          <H2 className="max-w-3xl mx-auto">
            Готовы получить <span className="text-cyan italic text-glow">свой статус свободы?</span>
          </H2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan rounded-sm">
              Запустить интенсив <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contacts" className="btn-ghost rounded-sm">Связаться лично</Link>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
