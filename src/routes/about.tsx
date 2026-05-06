import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Workflow, Award, Scale, GraduationCap, BadgeCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { Logo } from "@/components/site/Logo";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { Team } from "@/components/site/Team";
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
          <p className="mx-auto mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-silver/85">
            <span className="text-cyan">Финансовый поверенный</span> Юлия Армина
            и команда юристов: Цифровой профиль, кредитная история и
            финансовая репутация — приводим в безупречный порядок.
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
              <div className="smallcaps text-cyan">Основатель · финансовый поверенный</div>
              <div className="mt-3 font-display text-3xl text-silver">Юлия Армина</div>
              <div className="mt-2 text-base md:text-lg leading-relaxed text-silver-dim">
                Финансовый юрист. Сопровождает клиентов в делах
                о долгах, кредитной истории и Цифровом профиле с 2020 года.
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed text-silver/85">
            <p>
              <span className="text-cyan italic">Статус Свободы</span> — премиальный
              финансово-юридический консалтинг. Стратегия личного финансового
              поверенного и команда юристов: Цифровой профиль, кредитная
              история, ФССП, банкротство — всё под одной точкой ответственности.
            </p>
            <p>
              За пять лет — сотни клиентов с восстановленной кредитной историей,
              исправленными записями в БКИ и одобренной ипотекой через
              1,5–3 года после старта работы. Поддержка на каждом шагу — от
              первой консультации до закрытия дела.
            </p>
            <p className="text-silver/75">
              Прямой контакт с поверенным, честный диалог и прозрачный план.
              Если ваша задача решается проще — скажу об этом на первой
              встрече, бесплатно.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Регалии финансового юриста ───── */}
      <Section variant="default">
        <SectionLabel n="01" title="Регалии" />
        <H2 className="mt-8 max-w-3xl">
          Регалии <span className="text-cyan italic">финансового юриста</span>
        </H2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-silver/75">
          Профессиональный фундамент, на котором строится каждое решение
          и каждое сопровождение клиента.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            {
              icon: <Award className="h-6 w-6" />,
              t: "Финансовый поверенный",
              d: "Профессиональный статус: личное представительство интересов клиента в финансово-правовых вопросах.",
            },
            {
              icon: <GraduationCap className="h-6 w-6" />,
              t: "Высшее юридическое образование",
              d: "Профильная специализация по финансовому и гражданскому праву.",
            },
            {
              icon: <Scale className="h-6 w-6" />,
              t: "Практика по 218-ФЗ",
              d: "Системная работа с кредитными бюро НБКИ, ОКБ и Скоринг Бюро. Оспаривание ошибок, дублей, проданных долгов.",
            },
            {
              icon: <BadgeCheck className="h-6 w-6" />,
              t: "Сотни закрытых дел",
              d: "Кредитная история, ФССП, банкротство, ипотека после восстановления — измеримый результат у каждого клиента.",
            },
          ].map((r) => (
            <div
              key={r.t}
              className="flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40"
              style={{ borderRadius: "2px" }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan/30 text-cyan" style={{ borderRadius: "2px" }}>
                {r.icon}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-silver leading-snug">{r.t}</h3>
                <p className="mt-2 text-base md:text-lg leading-relaxed text-silver-dim">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="default">
        <SectionLabel n="02" title="Принципы" />
        <H2 className="mt-8 max-w-3xl">
          Что отличает <span className="text-cyan italic">Статус Свободы</span>
        </H2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              t: "Личное участие",
              d: "Стратегия — лично от финансового поверенного. Команда юристов выполняет работу под её прямым руководством.",
            },
            {
              icon: <Workflow className="h-6 w-6" />,
              t: "Цифровой контур",
              d: "Защищённая связь, прозрачный план действий, регулярный мониторинг Цифрового профиля и отчётов в трёх БКИ.",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              t: "Честность на входе",
              d: "Никаких «100% удалим всё за день». Объясняем, как работает Цифровой профиль и каков реалистичный горизонт.",
            },
          ].map((p) => (
            <div key={p.t} className="group border border-white/8 bg-ink-soft/60 p-8 transition-all hover:border-cyan/40" style={{ borderRadius: "2px" }}>
              <div className="inline-flex h-12 w-12 items-center justify-center border border-cyan/30 text-cyan transition-all group-hover:border-cyan group-hover:shadow-[0_0_20px_color-mix(in_oklab,var(--cyan)_40%,transparent)]" style={{ borderRadius: "2px" }}>
                {p.icon}
              </div>
              <h3 className="mt-6 font-display text-xl md:text-2xl text-silver">{p.t}</h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="glow">
        <div className="text-center">
          <H2 className="max-w-3xl mx-auto">
            Готовы вернуть <span className="text-cyan italic text-glow">свой рейтинг?</span>
          </H2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-silver/75">
            Не ждите, пока проблема усугубится. Оставьте заявку — юрист
            свяжется с вами в течение 15 минут. Первичная консультация
            бесплатно. Работаем по всей России.
          </p>
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
