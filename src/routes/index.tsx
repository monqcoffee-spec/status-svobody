import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Check,
  FileSearch,
  FileText,
  Handshake,
  Sparkles,
  Database,
  Gavel,
  Shield,
  Banknote,
  HeartHandshake,
  Phone,
  AtSign,
  Megaphone,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { Logo } from "@/components/site/Logo";
import { Faq } from "@/components/site/Faq";
import { IconBadge } from "@/components/site/IconBadge";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import particlesRise from "@/assets/particles-rise.jpg";
import yuliaPortrait from "@/assets/yulia-armina-hero.png";
import featherImg from "@/assets/feather-light.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STATUS SVOBODY — юридические решения для вашей свободы" },
      {
        name: "description",
        content:
          "Премиальный финансово-юридический консалтинг Юлии Арминой: цифровой профиль, кредитная история, ФССП, банкротство — под одной точкой ответственности.",
      },
      { property: "og:title", content: "STATUS SVOBODY — юридические решения для вашей свободы" },
      {
        property: "og:description",
        content:
          "Финансовый поверенный Юлия Армина и команда юристов. Восстановление кредитной истории, БКИ, ФССП, банкротство.",
      },
      { name: "twitter:title", content: "STATUS SVOBODY — юридические решения для вашей свободы" },
      {
        name: "twitter:description",
        content: "Финансовый поверенный Юлия Армина и команда юристов.",
      },
    ],
    links: [
      { rel: "preload", as: "image", href: yuliaPortrait, type: "image/webp", fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LegalService",
              name: "STATUS SVOBODY",
              description:
                "Премиальный финансово-юридический консалтинг: восстановление кредитной истории, БКИ, ФССП, банкротство.",
              areaServed: "RU",
              priceRange: "₽₽₽",
              telephone: "+7 (965) 445-73-78",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Москва",
                addressCountry: "RU",
              },
              url: "https://status-svobody.lovable.app",
            },
            {
              "@type": "Person",
              name: "Юлия Армина",
              jobTitle: "Финансовый поверенный",
              worksFor: { "@type": "Organization", name: "STATUS SVOBODY" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Москва",
                addressCountry: "RU",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  // Smooth scroll on hash navigation (works for clicks within the page).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <Services />
      <About />
      <DigitalProfile />
      <Process />
      <Pricing />
      <Faq />
      <BankruptcyCTA />
      <EntryPoint />
    </SiteLayout>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  const portraitMobile = useRef<HTMLImageElement>(null);
  const portraitDesktop = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        // soft parallax: 8–12px max range
        const offset = Math.max(-12, Math.min(12, -y * 0.04));
        const apply = (el: HTMLImageElement | null) => {
          if (el) el.style.transform = `translate3d(0, ${offset}px, 0)`;
        };
        apply(portraitMobile.current);
        apply(portraitDesktop.current);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="relative overflow-hidden bg-ink-deep md:-mt-20">
      <h1 className="sr-only">
        Статус Свободы Юлии Арминой — премиальный финансово-юридический консалтинг.
      </h1>

      <div className="relative md:hidden">
        <img
          ref={portraitMobile}
          src={yuliaPortrait}
          alt="Юлия Армина — STATUS SVOBODY"
          width={1024}
          height={1536}
          fetchPriority="high"
          className="block w-full select-none will-change-transform transition-transform duration-200 ease-out"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 6%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 6%, black 92%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-1 inset-x-0 h-20"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--ink-deep) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1 inset-x-0 h-14"
          style={{
            background:
              "linear-gradient(0deg, transparent 0%, var(--ink-deep) 100%)",
          }}
        />
      </div>

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
              <span className="smallcaps text-cyan">Статус Свободы</span>
            </div>
            <p className="mt-6 font-display text-[3.5rem] leading-[1.05] tracking-[-0.03em] text-silver lg:text-7xl">
              <span className="block-reveal" style={{ ["--bi" as never]: 0 }}>СТАТУС СВОБОДЫ</span>
              <br />
              <span
                className="block-reveal text-gradient-cyan text-glow italic font-serif"
                style={{ ["--bi" as never]: 1 }}
              >
                Юлии Арминой
              </span>
            </p>
            <p className="reveal reveal-delay-3 mt-7 max-w-lg text-xl leading-relaxed text-silver/85">
              Испорченная кредитная история — не клеймо. Это запись,
              которую закон разрешает оспорить.
            </p>
            <p className="mt-3 smallcaps text-cyan-glow">
              Конфиденциальность · Решение · Поддержка
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <LeadFormDialog
                source="hero"
                headline="Запись на консультацию"
                trigger={
                  <button type="button" className="btn-cyan group rounded-sm">
                    <span>Оставить заявку</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                }
              />
              <a href="#services" className="btn-ghost group rounded-sm">
                <span>Узнать подробнее</span>
                <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <div className="col-span-6 relative">
            <img
              ref={portraitDesktop}
              src={yuliaPortrait}
              alt="Юлия Армина — STATUS SVOBODY"
              width={1024}
              height={1536}
              fetchPriority="high"
              className="mx-auto block max-h-[92svh] w-auto select-none will-change-transform transition-transform duration-200 ease-out"
              style={{
                maskImage:
                  "radial-gradient(ellipse 75% 80% at 60% 50%, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 75% 80% at 60% 50%, black 55%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative md:hidden bg-ink-deep px-5 pb-12 pt-2">
        <div className="mb-5 text-center">
          <p className="font-display text-[2.15rem] leading-[1.1] tracking-[-0.02em] text-silver">
            <span className="block-reveal" style={{ ["--bi" as never]: 0 }}>СТАТУС СВОБОДЫ</span>
            <br />
            <span
              className="block-reveal text-gradient-cyan italic font-serif"
              style={{ ["--bi" as never]: 1 }}
            >
              Юлии Арминой
            </span>
          </p>
          <p className="reveal reveal-delay-2 mt-4 text-[1.0625rem] leading-relaxed text-silver/85">
            Испорченная кредитная история — не клеймо. Это запись,
            которую закон разрешает оспорить.
          </p>
          <p className="mt-3 smallcaps text-cyan-glow text-[10px]">
            Конфиденциальность · Решение · Поддержка
          </p>
        </div>
        <div className="reveal reveal-delay-3 flex flex-col gap-2.5">
          <LeadFormDialog
            source="hero"
            headline="Запись на консультацию"
            trigger={
              <button type="button" className="btn-cyan group rounded-sm w-full">
                <span>Оставить заявку</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
          <a href="#services" className="btn-ghost group rounded-sm w-full">
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

/* ───────────────────── ABOUT ───────────────────── */
function About() {
  return (
    <Section variant="wine" id="about">
      <ScrollReveal>
        <SectionLabel n="02" title="О компании" />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <H2 className="mt-8 max-w-3xl">
          О <span className="text-cyan italic">нас</span>
        </H2>
      </ScrollReveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
        <ScrollReveal variant="left" delay={1} className="lg:col-span-5 order-1">
          <div
            className="group relative aspect-[4/5] w-full overflow-hidden border border-cyan/15"
            style={{
              borderRadius: "2px",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--cyan-soft) 40%, var(--ink-soft)) 0%, var(--ink-deep) 100%)",
              boxShadow:
                "inset 0 1px 0 0 color-mix(in oklab, white 8%, transparent), 0 30px 80px -40px color-mix(in oklab, var(--cyan) 60%, transparent)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-60 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 30%, color-mix(in oklab, var(--cyan-glow) 35%, transparent), transparent 70%)",
                filter: "blur(24px)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Logo size={140} />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 animate-pulse-glow"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklab, var(--champagne) 55%, transparent), color-mix(in oklab, var(--champagne-glow) 25%, transparent) 40%, transparent 70%)",
                    filter: "blur(32px)",
                  }}
                />
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{
                background:
                  "linear-gradient(180deg, transparent, color-mix(in oklab, var(--ink-deep) 75%, transparent))",
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={2} className="lg:col-span-7 order-2 space-y-6 text-lg md:text-xl leading-relaxed text-silver/85">
          <p>
            <span className="text-cyan italic">Статус Свободы</span> — премиальный
            финансово-юридический консалтинг. Поддержка на каждом шагу:
            от первой консультации до закрытия дела.
          </p>
          <p className="text-silver/75">
            Личный финансовый поверенный сопровождает дело лично, без передачи
            на конвейер. Прямой контакт, честный диалог и прозрачный план —
            если задача решается проще, скажу об этом на первой встрече,
            бесплатно.
          </p>
          <div
            className="glass relative mt-2 px-7 py-6"
            style={{
              borderRadius: "2px",
              boxShadow:
                "inset 0 1px 0 0 color-mix(in oklab, white 8%, transparent), 0 20px 60px -30px color-mix(in oklab, var(--cyan) 50%, transparent)",
            }}
          >
            <div className="smallcaps text-cyan-glow text-[10px]">Почему «Статус Свободы»</div>
            <p className="mt-3 font-display text-xl md:text-2xl leading-snug text-silver">
              Статус свободы человека закреплён во{" "}
              <span className="text-cyan italic">второй главе Конституции РФ</span>.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">
              Бренд назван в честь основополагающего права —
              и зарегистрирован как товарный знак. Возвращаем
              финансовую свободу через закон.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/8 pt-8">
            <div>
              <div className="font-display text-3xl md:text-4xl text-gradient-cyan text-glow">
                <AnimatedCounter to={500} suffix="+" />
              </div>
              <div className="mt-2 smallcaps text-[10px] text-silver-dim">клиентов</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-gradient-cyan text-glow">
                <AnimatedCounter to={8} />
              </div>
              <div className="mt-2 smallcaps text-[10px] text-silver-dim">лет практики</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-gradient-cyan text-glow">
                <AnimatedCounter to={98} suffix="%" />
              </div>
              <div className="mt-2 smallcaps text-[10px] text-silver-dim">успех</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}


/* ───────────────────── PROCESS ───────────────────── */
function Process() {
  const steps = [
    { icon: <FileSearch className="h-7 w-7" />, t: "Аудит кредитной истории", d: "Запрашиваем отчёты во всех трёх БКИ, выявляем неточности, ошибки и некорректные данные в вашем Цифровом профиле." },
    { icon: <FileText className="h-7 w-7" />, t: "Заключение", d: "Готовим пошаговый план-рекомендации по исправлению: что оспаривать, какие документы собрать, в каком порядке действовать." },
    { icon: <Handshake className="h-7 w-7" />, t: "Сопровождение", d: "Подготовка документов, переговоры с кредиторами и БКИ, представительство в судебных и досудебных процедурах." },
    { icon: <Sparkles className="h-7 w-7" />, t: "Идеальная финансовая репутация", d: "Чистая кредитная история, одобрение ипотеки, кредитов и выгодных условий — фундамент будущего без ограничений." },
  ];
  return (
    <Section variant="tint" id="process">
      <ScrollReveal>
        <SectionLabel n="05" title="Как мы работаем" />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <H2 className="mt-8 max-w-3xl">
          Путь к <span className="text-cyan italic">безупречной репутации</span>
        </H2>
      </ScrollReveal>
      <ol className="mt-14 grid gap-5 md:grid-cols-2">
        {steps.map((s, i) => (
          <ScrollReveal as="li" key={i} variant="zoom" delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="card-lux group/card flex gap-5 p-7 transition-all">
            <IconBadge size="md">{s.icon}</IconBadge>
            <div className="flex-1">
              <div className="smallcaps text-xs tabular">
                Шаг {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-xl md:text-2xl leading-snug">{s.t}</h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed">{s.d}</p>
            </div>
          </ScrollReveal>
        ))}
      </ol>
    </Section>
  );
}

/* ───────────────────── DIGITAL PROFILE ───────────────────── */
function DigitalProfile() {
  const profile = [
    "Данные из кредитных бюро — кредитная история во всех трёх БКИ",
    "Информация о судебных взысканиях (ФССП)",
    "Сведения о банкротстве и арбитражных процедурах",
    "Иные финансовые индикаторы и скоринговые маркеры",
  ];
  return (
    <Section variant="darker" id="digital-profile">
      <ScrollReveal>
        <SectionLabel n="03" title="Цифровой профиль" />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <H2 className="mt-8 max-w-3xl">
          Что входит в ваш <span className="text-cyan italic">Цифровой профиль</span>
        </H2>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-silver/75">
          Цифровой профиль — совокупность всех финансовых следов, по которым
          о вас судят банки, работодатели и партнёры.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {profile.map((p, i) => (
          <ScrollReveal key={i} variant="zoom" delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="card-lux group/card flex gap-5 p-7">
            <IconBadge size="sm">
              <Database className="h-5 w-5" />
            </IconBadge>
            <p className="text-base md:text-lg leading-relaxed pt-1.5">{p}</p>
          </ScrollReveal>
        ))}
      </div>
      <div className="card-lux mt-12 px-7 py-6" style={{ borderLeftWidth: "3px", borderLeftColor: "var(--gold-heading)" }}>
        <p className="font-display text-xl md:text-2xl leading-snug">
          Срок исковой давности
          <span style={{ color: "var(--gold-heading-deep)", fontStyle: "italic" }}> не обнуляет </span>
          ваши долги.
        </p>
        <p className="mt-3 text-base md:text-lg leading-relaxed">
          Записи продолжают влиять на скоринг и решения банков. Управлять
          этим можно — и нужно — целенаправленно.
        </p>
      </div>
    </Section>
  );
}

/* ───────────────────── SERVICES ───────────────────── */
function Services() {
  const services = [
    { icon: <FileText className="h-6 w-6" />, t: "Оспаривание данных в БКИ", d: "Оспариваем ошибки, ложные записи и незаконные долги в кредитной истории. Срок — до 30 дней. Повышаем кредитный рейтинг." },
    { icon: <Sparkles className="h-6 w-6" />, t: "Восстановление КИ после банкротства", d: "Исправляем ошибки и не закрытые после банкротства кредитные договоры. Полностью восстанавливаем кредитную историю." },
    { icon: <HeartHandshake className="h-6 w-6" />, t: "Помощь в списании долгов участникам СВО", d: "Закон № 377-ФЗ допускает списание долгов участников СВО при гибели или инвалидности I группы. Аналогичное право — у членов семьи." },
    { icon: <Gavel className="h-6 w-6" />, t: "Снятие арестов ФССП", d: "Снимаем аресты на счета и имущество, закрываем исполнительные производства, удаляем недостоверную информацию." },
    { icon: <Banknote className="h-6 w-6" />, t: "Выкуп долгов у коллекторов", d: "Помогаем выкупить долги у коллекторов с дисконтом до 90% и прекращаем преследование." },
    { icon: <Shield className="h-6 w-6" />, t: "Полный спектр сопровождения", d: "От первой консультации до закрытия дела — единая точка ответственности и прозрачный план." },
  ];
  return (
    <Section variant="default" id="services">
      <ScrollReveal>
        <SectionLabel n="04" title="Наши услуги" />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <H2 className="mt-8 max-w-3xl">
          Полный спектр решений для{" "}
          <span className="text-cyan italic">восстановления кредитной истории</span>
        </H2>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
          Не просто подаём заявления — ведём дела до конца: анализ КИ,
          переговоры с банками и коллекторами, жалобы в БКИ, контроль
          исполнения решений суда. Каждый этап — под пристальным вниманием
          юриста.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <ScrollReveal
            key={s.t}
            variant="zoom"
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className="group/card flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--champagne)]/60"
            style={{
              borderRadius: "2px",
              boxShadow: "0 0 0 0 transparent",
            }}
          >
            <IconBadge size="sm">{s.icon}</IconBadge>
            <div>
              <h3 className="font-display text-lg md:text-xl text-silver leading-snug">{s.t}</h3>
              <p className="mt-2 text-base md:text-lg leading-relaxed text-silver-dim">{s.d}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── PRICING ───────────────────── */
function Pricing() {
  const tiers = [
    {
      t: "Анализ кредитной истории",
      sub: "Пошаговый план для самостоятельного исправления КИ",
      price: "5 000 ₽",
      meta: "Включает 1 консультацию",
      features: ["Аудит отчётов в трёх БКИ", "Письменное заключение", "План действий"],
      highlight: false,
    },
    {
      t: "Премиум",
      sub: "Оспаривание до 5 записей + работа с коллекторами и банками",
      price: "от 35 000 ₽",
      meta: "Включает 3 консультации",
      features: ["До 5 оспариваний в БКИ", "Переговоры с банками и коллекторами", "Сопровождение юриста"],
      highlight: true,
    },
    {
      t: "Платинум — комплексный подход",
      sub: "Полное восстановление: БКИ, ФССП, банкротство, выкуп долгов",
      price: "от 65 000 ₽",
      meta: "5 консультаций · сопровождение 6 месяцев",
      features: ["Все направления под одним юристом", "Снятие арестов ФССП", "Выкуп долгов с дисконтом", "Контроль исполнения решений"],
      highlight: false,
    },
  ];
  return (
    <Section variant="wine" id="pricing">
      <ScrollReveal>
        <SectionLabel n="06" title="Тарифы" />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <H2 className="mt-8 max-w-3xl">
          Прозрачные тарифы{" "}
          <span className="text-cyan italic">без скрытых платежей</span>
        </H2>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
          Три чётких пакета — от быстрого оспаривания одной записи до
          полного восстановления кредитной истории. В договоре все цены
          фиксированы, никаких дополнительных сборов.
        </p>
      </ScrollReveal>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tiers.map((p, i) => (
          <ScrollReveal
            key={p.t}
            variant="zoom"
            delay={((i + 1) as 1 | 2 | 3)}
            className={`relative flex flex-col border bg-ink-soft/60 p-8 transition-all ${
              p.highlight ? "border-cyan/60" : "border-white/8 hover:border-cyan/40"
            }`}
            style={{
              borderRadius: "2px",
              boxShadow: p.highlight ? "0 0 32px color-mix(in oklab, var(--cyan) 22%, transparent)" : undefined,
            }}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-8 bg-cyan text-ink-deep px-3 py-1 smallcaps text-xs">Популярный</div>
            )}
            <h3 className="font-display text-2xl md:text-3xl text-silver leading-snug">{p.t}</h3>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">{p.sub}</p>
            <div className="mt-6 font-display text-3xl md:text-4xl text-gradient-cyan">{p.price}</div>
            <div className="mt-2 smallcaps text-cyan">{p.meta}</div>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-base md:text-lg text-silver/85">
                  <Check className="h-5 w-5 shrink-0 text-cyan mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <LeadFormDialog
              source={`pricing-${p.t}`}
              headline={`Тариф · ${p.t}`}
              trigger={
                <button type="button" className={`mt-8 ${p.highlight ? "btn-cyan" : "btn-ghost"} rounded-sm`}>
                  Оставить заявку
                </button>
              }
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── ENTRY POINT (combined contacts + CTA) ───────────────────── */
function BankruptcyCTA() {
  return (
    <Section variant="default" id="bankruptcy-cta">
      <div
        className="glass-strong relative overflow-hidden p-8 md:p-12"
        style={{
          borderRadius: "2px",
          boxShadow:
            "0 30px 80px -40px color-mix(in oklab, var(--cyan) 60%, transparent), inset 0 1px 0 0 color-mix(in oklab, white 8%, transparent)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--cyan-glow) 40%, transparent), transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="smallcaps text-cyan-glow">Списать долги · Банкротство</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em] text-silver">
              Не уверены, спишут ли{" "}
              <span className="text-gradient-cyan italic">ваши долги</span>?
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-silver/80">
              Пройдите бесплатный интенсив — за 20 минут поймёте, подходит ли
              вам банкротство, какие долги списываются и что делать дальше.
              Без воды и без обязательств.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="btn-cyan group w-full justify-center rounded-sm lg:w-auto"
              style={{
                boxShadow:
                  "0 0 32px color-mix(in oklab, var(--cyan) 35%, transparent), 0 0 80px -10px color-mix(in oklab, var(--cyan-glow) 40%, transparent)",
              }}
            >
              <span>Пройти бесплатный интенсив</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/bankruptcy"
              className="btn-ghost group w-full justify-center rounded-sm lg:w-auto"
            >
              <span>Подробнее о банкротстве</span>
              <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────── ENTRY POINT (combined contacts + CTA) ───────────────────── */
function EntryPoint() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-aurora py-28 md:py-36 scroll-mt-24"
    >
      <ParticleField density={42} />
      <img
        src={particlesRise}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 60%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 50% 60%, black, transparent 80%)",
        }}
      />
      <img src={featherImg} alt="" aria-hidden className="hidden" />
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-25" />

      <div className="container-tight relative">
        <div className="text-center">
          <Eyebrow>
            Точка
            <span
              aria-hidden
              className="mx-1.5 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-cyan align-middle"
              style={{ boxShadow: "0 0 10px var(--cyan), 0 0 20px var(--cyan-glow)" }}
            />
            входа
          </Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.25rem,7vw,4.5rem)] max-w-4xl mx-auto leading-[1.05]">
            <span className="text-gradient-cyan text-glow">
              Начните восстановление сегодня
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-silver/80">
            Не ждите, пока проблема усугубится. Оставьте заявку — юрист
            свяжется с вами в течение 15 минут.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <LeadFormDialog
                source="entry-point"
                headline="Запись на консультацию"
                trigger={
                  <button
                    type="button"
                    className="btn-cyan group rounded-sm relative overflow-hidden"
                    style={{
                      boxShadow:
                        "0 0 32px color-mix(in oklab, var(--cyan) 35%, transparent), 0 0 80px -10px color-mix(in oklab, var(--cyan-glow) 40%, transparent)",
                    }}
                  >
                    <span>Оставить заявку</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                }
              />
            </div>

            <div className="glass relative inline-flex w-full items-center gap-4 px-6 py-4" style={{ borderRadius: "2px" }}>
              <div className="inline-flex h-10 w-10 items-center justify-center border border-cyan/30 text-cyan" style={{ borderRadius: "2px" }}>
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="smallcaps text-[9px] text-silver-dim">Телефон</div>
                <a href="tel:+79654457378" className="font-display text-lg text-silver hover:text-cyan transition-colors tabular">
                  +7 (965) 445-73-78
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://t.me/zakon_127"
                target="_blank"
                rel="noopener"
                className="glass group flex items-center gap-3 px-5 py-3.5 transition-all hover:border-cyan/40"
                style={{ borderRadius: "2px" }}
              >
                <Megaphone className="h-4 w-4 text-cyan shrink-0" />
                <div className="text-left">
                  <div className="smallcaps text-[9px] text-silver-dim">Telegram-канал</div>
                  <div className="text-sm text-silver group-hover:text-cyan transition-colors">t.me/zakon_127</div>
                </div>
              </a>
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="glass group flex items-center gap-3 px-5 py-3.5 transition-all hover:border-cyan/40"
                style={{ borderRadius: "2px" }}
              >
                <AtSign className="h-4 w-4 text-cyan shrink-0" />
                <div className="text-left">
                  <div className="smallcaps text-[9px] text-silver-dim">Бесплатный интенсив</div>
                  <div className="text-sm text-silver group-hover:text-cyan transition-colors">@status_svobody_bot</div>
                </div>
              </a>
            </div>

            <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
              Свяжемся лично в течение 15 минут · конфиденциально
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              className="glass-strong relative p-8 md:p-10"
              style={{
                borderRadius: "2px",
                boxShadow:
                  "0 30px 80px -40px color-mix(in oklab, var(--cyan) 60%, transparent), inset 0 1px 0 0 color-mix(in oklab, white 8%, transparent)",
              }}
            >
              <div className="smallcaps text-cyan-glow">Заявка</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-silver leading-snug">
                Узнайте перспективы вашего дела
              </h3>
              <p className="mt-3 text-sm md:text-base text-silver-dim">
                Заполните форму — юрист подготовит экспресс-оценку и
                свяжется с вами лично.
              </p>
              <LeadFormDialog
                source="entry-form"
                headline="Заявка на консультацию"
                trigger={
                  <button
                    type="button"
                    className="btn-cyan group mt-6 w-full justify-center rounded-sm"
                  >
                    <span>Узнать подробнее</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                }
              />
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.22em] text-silver-dim">
                Имя · Телефон · E-mail · Описание (опционально)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

