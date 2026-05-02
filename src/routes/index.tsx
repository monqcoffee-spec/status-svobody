import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import particlesRise from "@/assets/particles-rise.jpg";
import yuliaPortrait from "@/assets/yulia-armina-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STATUS SVOBODY — Юридические решения для вашей свободы" },
      {
        name: "description",
        content:
          "Премиальный юридический консалтинг Юлии Арминой: финансы, долги, кредитная история. Личное сопровождение основателем бренда — без посредников.",
      },
      { property: "og:title", content: "STATUS SVOBODY — Юридические решения для вашей свободы" },
      {
        property: "og:description",
        content:
          "Премиальный юридический консалтинг. Личное сопровождение основателем бренда — Юлия Армина.",
      },
      { name: "twitter:title", content: "STATUS SVOBODY — Юридические решения для вашей свободы" },
      {
        name: "twitter:description",
        content:
          "Премиальный юридический консалтинг Юлии Арминой.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteLayout>
      <Hero />
      <Advantages />
      <Process />
      <Trust />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-black md:-mt-20">
      <h1 className="sr-only">
        STATUS SVOBODY — Освобождение через открытые формы. Юлия Армина, основатель.
      </h1>

      {/* Mobile-first: фото целиком (object-contain), фон чёрный сливается с фото */}
      <div className="relative md:hidden">
        <img
          src={yuliaPortrait}
          alt="Юлия Армина — основатель STATUS SVOBODY"
          width={1024}
          height={1536}
          fetchPriority="high"
          className="block w-full select-none"
        />
        {/* CTA под фото — без обрезки */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-1 inset-x-0 h-32"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #000 100%)",
          }}
        />
      </div>

      {/* Desktop: фото справа, контент слева */}
      <div className="relative hidden md:grid md:min-h-[100svh] md:grid-cols-12 md:items-center">
        <ParticleField density={28} />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-32 h-[600px] w-[600px] rounded-full opacity-25 animate-drift"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 22%, transparent), transparent)",
          }}
        />
        <div className="container-tight md:col-span-12 grid grid-cols-12 items-center gap-8 pt-20">
          <div className="reveal reveal-delay-2 col-span-6 relative z-10">
            <div className="inline-flex items-center gap-3">
              <span className="hairline-tight" />
              <span className="smallcaps text-cyan">Premium legal consulting</span>
            </div>
            <p className="mt-6 font-serif text-4xl italic leading-snug text-silver lg:text-5xl">
              Юридические решения<br />
              <span className="text-cyan-glow">для вашей свободы.</span>
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-silver/70">
              Личное сопровождение основателя бренда.
              Стратегия — не шаблон. Конфиденциальность — не опция.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <LeadFormDialog
                source="hero"
                headline="Запись на консультацию"
                trigger={
                  <button type="button" className="btn-cyan group rounded-sm">
                    <span>Получить консультацию</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                }
              />
              <a href="#approach" className="btn-ghost group rounded-sm">
                <span>Как мы работаем</span>
                <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <div className="col-span-6 relative">
            <img
              src={yuliaPortrait}
              alt="Юлия Армина — основатель STATUS SVOBODY"
              width={1024}
              height={1536}
              fetchPriority="high"
              className="mx-auto block max-h-[92svh] w-auto select-none"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent 0%, black 12%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, black 12%, black 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* CTA блок для мобильной версии — под полным фото */}
      <div className="relative md:hidden bg-black px-5 pb-12 pt-2">
        <div className="reveal reveal-delay-3 flex flex-col gap-2.5">
          <LeadFormDialog
            source="hero"
            headline="Запись на консультацию"
            trigger={
              <button type="button" className="btn-cyan group rounded-sm w-full">
                <span>Получить консультацию</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
          <a href="#approach" className="btn-ghost group rounded-sm w-full">
            <span>Как мы работаем</span>
            <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <p className="mt-5 text-center text-[10px] uppercase tracking-[0.28em] text-silver-dim">
          Личное сопровождение · Конфиденциально
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── ADVANTAGES ───────────────────── */
function Advantages() {
  const items = [
    {
      title: "Освобождение",
      desc: "Снятие груза правовой неопределённости. Чистый юридический статус без скрытых рисков.",
      icon: <IconLiberation />,
    },
    {
      title: "Контроль",
      desc: "Каждый документ под управлением. Прозрачный план, фиксированные сроки, отчётность.",
      icon: <IconControl />,
    },
    {
      title: "Защита",
      desc: "Конфиденциальность по умолчанию. NDA, защищённые каналы, доступ только у основателя.",
      icon: <IconShield />,
    },
    {
      title: "Результат",
      desc: "Не процесс ради процесса — измеримый итог. Каждый кейс закрывается определённым решением.",
      icon: <IconResult />,
    },
  ];

  return (
    <Section variant="darker">
      <SectionLabel n="01" title="Преимущества" />
      <H2 className="mt-8 max-w-3xl">
        Четыре опоры <span className="text-cyan italic">премиального подхода</span>
      </H2>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="group relative overflow-hidden border border-white/8 bg-white/[0.02] p-7 transition-all duration-500 hover:border-cyan/40 hover:bg-white/[0.04]"
            style={{ borderRadius: "2px" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at top, color-mix(in oklab, var(--cyan) 14%, transparent), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="text-cyan transition-all duration-500 group-hover:text-cyan-glow group-hover:[filter:drop-shadow(0_0_12px_color-mix(in_oklab,var(--cyan)_50%,transparent))]">
                {it.icon}
              </div>
              <h3 className="mt-6 font-display text-lg tracking-[0.04em] text-silver">
                {it.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-silver-dim">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── PROCESS ───────────────────── */
function Process() {
  const steps = [
    { n: "01", t: "Диалог", d: "Личная встреча с основателем. Слушаем, фиксируем суть запроса — без скриптов и менеджеров." },
    { n: "02", t: "Стратегия", d: "Юридический разбор: риски, варианты, точные сроки. Решение под вашу задачу, не шаблон." },
    { n: "03", t: "Сопровождение", d: "Подготовка документов, переговоры, представительство. Вы видите каждый шаг." },
    { n: "04", t: "Свобода", d: "Закрытое дело. Чистый статус. Передаём весь архив в защищённом виде." },
  ];

  return (
    <Section variant="glow" id="approach">
      <SectionLabel n="02" title="Процесс" />
      <H2 className="mt-8 max-w-3xl">
        Путь <span className="text-cyan italic text-glow">к открытой форме</span>
      </H2>

      <div className="mt-16 relative">
        {/* Connecting line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-6 top-0 bottom-0 w-px lg:left-0 lg:right-0 lg:top-7 lg:bottom-auto lg:h-px lg:w-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--cyan) 50%, transparent), transparent)",
          }}
        />
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative pl-16 lg:pl-0 lg:pt-16">
              <div
                aria-hidden
                className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border border-cyan/40 bg-ink lg:left-0 lg:top-0"
                style={{
                  borderRadius: "2px",
                  boxShadow:
                    "0 0 18px color-mix(in oklab, var(--cyan) 30%, transparent)",
                }}
              >
                <span className="font-display text-xs tabular tracking-[0.18em] text-cyan-glow">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-xl tracking-[0.04em] text-silver">{s.t}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-silver-dim">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────── TRUST ───────────────────── */
function Trust() {
  return (
    <Section variant="darker">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden border border-white/10" style={{ borderRadius: "2px" }}>
            <img
              src={yuliaPortrait}
              alt="Юлия Армина — основатель STATUS SVOBODY"
              className="absolute inset-0 h-full w-full object-cover object-[60%_top]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)",
              }}
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionLabel n="03" title="Доверие" />
          <p className="mt-8 font-serif text-2xl italic leading-snug text-silver md:text-3xl">
            «Свобода — это не отсутствие границ.
            Это <span className="text-cyan-glow">верно очерченные формы</span>,
            внутри которых можно дышать».
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="hairline-tight" />
            <div>
              <div className="smallcaps text-silver-dim">Основатель STATUS SVOBODY</div>
              <div
                className="mt-1 text-3xl text-cyan-glow"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Юлия Армина
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────── FINAL CTA ───────────────────── */
function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-aurora py-32 md:py-40 scroll-mt-24">
      <ParticleField density={50} />
      <img
        src={particlesRise}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        style={{ maskImage: "radial-gradient(ellipse 70% 80% at 50% 60%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 60%, black, transparent 80%)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />

      <div className="container-tight relative text-center">
        <Eyebrow>Точка входа</Eyebrow>
        <h2 className="display mt-8 text-[clamp(2.25rem,7vw,5rem)] max-w-4xl mx-auto">
          <span className="text-gradient-cyan text-glow">Получите консультацию основателя.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-silver/75">
          Личная встреча с Юлией Арминой. Разбираем ваш запрос, формулируем
          юридическую стратегию — без посредников и менеджеров.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LeadFormDialog
            source="index-final"
            headline="Запись на консультацию"
            trigger={
              <button type="button" className="btn-cyan group rounded-sm">
                <span>Получить консультацию</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
          <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-ghost group rounded-sm">
            <span>Написать в Telegram</span>
            <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
          Свяжемся лично в течение часа · конфиденциально
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── CUSTOM GOLD ICONS ───────────────────── */
/* Hairline geometric icons in brand gold, 40px square. */

function IconLiberation() {
  // Opening circle — symbol of liberation / unbinding
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden>
      <path d="M20 4 A16 16 0 1 0 32 32" />
      <path d="M20 12 L20 4 L28 4" />
      <circle cx="20" cy="20" r="2.5" />
    </svg>
  );
}

function IconControl() {
  // Square within square — order, control
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden>
      <rect x="6" y="6" width="28" height="28" />
      <rect x="14" y="14" width="12" height="12" />
      <path d="M6 20 L14 20 M26 20 L34 20 M20 6 L20 14 M20 26 L20 34" />
    </svg>
  );
}

function IconShield() {
  // Hairline shield with vertical axis
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 4 L34 9 L34 21 C34 29 27 34 20 36 C13 34 6 29 6 21 L6 9 Z" />
      <path d="M20 12 L20 28" />
      <path d="M14 20 L26 20" />
    </svg>
  );
}

function IconResult() {
  // Concentric arcs converging to a point — result / target
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden>
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="9" />
      <circle cx="20" cy="20" r="4" />
      <path d="M20 20 L34 6" />
    </svg>
  );
}
