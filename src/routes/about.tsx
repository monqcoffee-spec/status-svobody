import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Workflow } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { Logo } from "@/components/site/Logo";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import aboutImg from "@/assets/about-transformation.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О бренде — STATUS SVOBODY · Юлия Армина" },
      {
        name: "description",
        content:
          "STATUS SVOBODY — премиальный юридический консалтинг Юлии Арминой. Личное сопровождение по финансам, долгам и кредитной истории без посредников.",
      },
      { property: "og:title", content: "О бренде — STATUS SVOBODY" },
      {
        property: "og:description",
        content:
          "Премиальный юридический консалтинг Юлии Арминой. Превращение тяжести долгов в ясность финансовой свободы.",
      },
      { name: "twitter:title", content: "О бренде — STATUS SVOBODY" },
      {
        name: "twitter:description",
        content:
          "Премиальный юридический консалтинг Юлии Арминой.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
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
            Статус Свободы
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-silver/75">
            Финансовый консультант, специализация — кредитная история и работа
            с долгами. Превращаем тяжесть финансовых записей в&nbsp;ясный план
            действий — прозрачно, законно, без обещаний «волшебных удалений».
          </p>
        </div>
      </section>

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
              <div className="smallcaps text-cyan">Основатель и финансовый консультант</div>
              <div className="mt-3 font-display text-2xl text-silver">Юлия Армина</div>
              <div className="mt-1 text-sm text-silver-dim">Опыт работы с БКИ и сложными финансовыми ситуациями с 2020 года</div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-silver/80">
            <p>
              <span className="text-cyan italic">Статус Свободы</span> — это не «юридическая
              контора с конвейером». Это персональное консультирование: одна точка ответственности,
              цифровой контур и измеримый результат по вашей кредитной истории.
            </p>
            <p>
              За пять лет я помогла сотням людей привести в порядок отчёты в БКИ,
              убрать ошибки и вернуть нормальный кредитный рейтинг. Сегодня клиенты
              получают одобрение по ипотеке через 1,5–3 года после старта работы.
            </p>
            <p className="text-silver-dim">
              Здесь нет менеджеров и колл-центров. Один консультант, прямой контакт,
              честный диалог. Если ваша задача решается без меня — я скажу об этом
              на первой встрече, бесплатно.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="default">
        <SectionLabel n="01" title="Принципы" />
        <H2 className="mt-8 max-w-3xl">
          Что отличает <span className="text-cyan italic">Статус Свободы</span>
        </H2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              t: "Личная работа",
              d: "Никаких передач между менеджерами. С вами от первой консультации до результата — один человек.",
            },
            {
              icon: <Workflow className="h-6 w-6" />,
              t: "Цифровой контур",
              d: "Telegram-связь, прозрачный план действий, регулярный мониторинг отчётов в трёх БКИ.",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              t: "Честность на входе",
              d: "Никаких «100% удалим всё за день». Объясняю, как работают БКИ на самом деле и какой реалистичный горизонт.",
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

      <Section variant="glow">
        <div className="text-center">
          <H2 className="max-w-3xl mx-auto">
            Готовы вернуть <span className="text-cyan italic text-glow">свой рейтинг?</span>
          </H2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan rounded-sm">
              Написать в Telegram <ArrowRight className="h-4 w-4" />
            </a>
            <LeadFormDialog
              source="about"
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
