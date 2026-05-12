import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { Logo } from "@/components/site/Logo";
import { Faq } from "@/components/site/Faq";
import { IconArt } from "@/components/site/IconArt";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import particlesRise from "@/assets/particles-rise.jpg";
import yuliaPortrait from "@/assets/hero-yulia.png";
import yuliaAbout from "@/assets/yulia-armina-vertical-v2.jpeg";
import featherImg from "@/assets/feather-light.jpg";
import iconAudit from "@/assets/icons-3d/audit.png";
import iconConclusion from "@/assets/icons-3d/conclusion.png";
import iconHandshake from "@/assets/icons-3d/handshake.png";
import iconReputation from "@/assets/icons-3d/reputation.png";
import iconDispute from "@/assets/icons-3d/dispute.png";
import iconRestore from "@/assets/icons-3d/restore.png";
import iconSvo from "@/assets/icons-3d/svo.png";
import iconUnlock from "@/assets/icons-3d/unlock.png";
import iconBuyout from "@/assets/icons-3d/buyout.png";
import iconSupport from "@/assets/icons-3d/support.png";
import iconDebtRelief from "@/assets/icons-3d/debt-relief.png";
import iconTierBasic from "@/assets/icons-3d/tier-basic.png";
import iconTierPremium from "@/assets/icons-3d/tier-premium.png";
import iconTierPlatinum from "@/assets/icons-3d/tier-platinum.png";
import iconFaq from "@/assets/icons-3d/faq.png";
import iconTelegram from "@/assets/icons-3d/telegram.png";
import iconVk from "@/assets/icons-3d/vk.png";
import iconMax from "@/assets/icons-3d/max.png";
import iconYandex from "@/assets/icons-3d/yandex.png";
import iconDataBureau from "@/assets/icons-3d/data-bureau.png";
import iconDataCourt from "@/assets/icons-3d/data-court.png";
import iconDataBankruptcy from "@/assets/icons-3d/data-bankruptcy.png";
import iconDataScore from "@/assets/icons-3d/data-score.png";
import iconRomanII from "@/assets/icons-3d/roman-ii.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Статус свободы Юлии Арминой — юридические решения для вашей свободы" },
      {
        name: "description",
        content:
          "Премиальный финансово-юридический консалтинг Юлии Арминой: цифровой профиль, кредитная история, Федеральной службы судебных приставов, банкротство — под одной точкой ответственности.",
      },
      { property: "og:title", content: "Статус свободы Юлии Арминой — юридические решения для вашей свободы" },
      {
        property: "og:description",
        content:
          "Финансовый поверенный Юлия Армина и команда юристов. Восстановление кредитной истории, бюро кредитных историй, Федеральной службы судебных приставов, банкротство.",
      },
      { name: "twitter:title", content: "Статус свободы Юлии Арминой — юридические решения для вашей свободы" },
      {
        name: "twitter:description",
        content: "Финансовый поверенный Юлия Армина и команда юристов.",
      },
    ],
    links: [
      { rel: "preload", as: "image", href: yuliaPortrait, type: "image/png", fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LegalService",
              name: "Статус свободы Юлии Арминой",
              description:
                "Премиальный финансово-юридический консалтинг: восстановление кредитной истории, бюро кредитных историй, Федеральной службы судебных приставов, банкротство.",
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
              worksFor: { "@type": "Organization", name: "Статус свободы Юлии Арминой" },
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
      <Philosophy />
      <Services />
      <About />
      <DigitalProfile />
      <Process />
      <Pricing />
      <Faq />
      <EntryPoint />
    </SiteLayout>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <h1 className="sr-only">
        Статус свободы Юлии Арминой Юлии Арминой — премиальный финансово-юридический консалтинг.
      </h1>

      {/* Cinematic ambient lights */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 animate-drift"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--wine) 28%, transparent), color-mix(in oklab, var(--wine-soft) 15%, transparent) 45%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/4 -right-24 h-[460px] w-[460px] rounded-full opacity-50 animate-float"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 28%, transparent), transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <ParticleField density={20} />
      </div>

      {/* Hero image — fully contained in viewport with breathing space */}
      {/* Hero image — full viewport width on every device */}
      <div className="relative reveal reveal-delay-1 w-screen left-1/2 -translate-x-1/2 pt-6 md:pt-10">
        <img
          src={yuliaPortrait}
          alt="Юлия Армина — основатель Статус свободы Юлии Арминой"
          className="block w-full h-auto object-contain"
          style={{ filter: "contrast(1.08) saturate(1.12)" }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="relative container-tight pt-8 pb-24 md:pt-12 md:pb-36 lg:pt-16 lg:pb-40">

        <h2 className="mx-auto mt-6 max-w-5xl text-center font-display uppercase tracking-[0.01em] leading-[1.05]"
            style={{ color: "var(--text)" }}>
          <span
            className="reveal reveal-delay-2 block text-[1.5rem] sm:text-[2.1rem] md:text-[2.9rem] lg:text-[3.4rem] font-semibold"
          >
            Кредитную историю невозможно исправить
          </span>
          <span
            className="reveal reveal-delay-3 mt-3 block text-[1.5rem] sm:text-[2.1rem] md:text-[2.9rem] lg:text-[3.4rem] italic font-serif text-gradient-cyan text-glow"
            style={{ fontWeight: 500 }}
          >
            Но&nbsp;её можно оспорить
          </span>
        </h2>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <LeadFormDialog
            source="hero"
            headline="Запись на консультацию"
            trigger={
              <button type="button" className="btn-cyan group w-full sm:w-auto">
                <span>Оставить заявку</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
          <a href="#services" className="btn-ghost group w-full sm:w-auto">
            <span>Узнать подробнее</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

/* ───────────────────── ABOUT ───────────────────── */
/* ───────────────────── PHILOSOPHY ───────────────────── */
function Philosophy() {
  const values = [
    {
      art: iconUnlock,
      title: "Конфиденциальность",
      desc: "Ваши данные и обращения остаются строго защищёнными.",
    },
    {
      art: iconDispute,
      title: "Законные механизмы",
      desc: "Работаем исключительно в рамках действующего законодательства.",
    },
    {
      art: iconSupport,
      title: "Сопровождение",
      desc: "Поддержка на каждом этапе — от анализа ситуации до результата.",
    },
  ];
  return (
    <Section variant="tint" id="philosophy">
      <div
        aria-hidden
        className="pointer-events-none absolute -z-[1] left-1/2 top-24 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--champagne) 28%, transparent), transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <ScrollReveal>
        <div className="text-center">
          <span
            className="smallcaps text-[13px] tracking-[0.3em]"
            style={{ color: "var(--gold-heading-deep)" }}
          >
            Почему Status Svobody
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <H2 className="mx-auto mt-6 max-w-5xl text-center">
          Статус свободы — это не просто юридическая помощь.{" "}
          <span className="italic font-serif text-gradient-cyan text-glow" style={{ fontWeight: 500 }}>
            Это восстановление финансовой репутации и контроля над собственной жизнью.
          </span>
        </H2>
      </ScrollReveal>

      <ScrollReveal delay={2}>
        <PhilosophyAccordion />
      </ScrollReveal>

      <ScrollReveal delay={3}>
        <ul
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 md:grid-cols-3 md:divide-x"
          style={{
            borderTop: "1px solid color-mix(in oklab, var(--gold-light) 35%, transparent)",
            borderBottom: "1px solid color-mix(in oklab, var(--gold-light) 35%, transparent)",
            ["--tw-divide-opacity" as never]: 1,
          }}
        >
          {values.map((v) => {
            return (
              <li
                key={v.title}
                className="group/card flex items-start gap-4 px-5 py-6 md:flex-col md:items-center md:gap-3 md:py-8 md:text-center"
                style={{
                  borderColor: "color-mix(in oklab, var(--gold-light) 30%, transparent)",
                }}
              >
                <IconArt src={v.art} alt="" size="sm" />
                <div className="md:contents">
                  <h3
                    className="font-display text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: "var(--gold-heading-deep)" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="mt-1 text-[13px] md:text-sm leading-snug md:mt-2 md:max-w-[22ch]"
                    style={{ color: "#2A1118" }}
                  >
                    {v.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollReveal>
    </Section>
  );
}

/* ───────────────────── ABOUT ───────────────────── */
function PhilosophyAccordion() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOpen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            // small delay so user notices the reveal animation
            setTimeout(() => setOpen(true), 280);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const guarantees = [
    "Жизнь",
    "Достоинство",
    "Безопасность",
    "Свобода слова",
    "Совесть",
    "Вероисповедание",
    "Личная неприкосновенность",
    "Частная жизнь",
    "Семейная тайна",
    "Честь и доброе имя",
  ];

  return (
    <div ref={ref} className="mx-auto mt-12 max-w-3xl" style={{ color: "#2A1118" }}>
      {/* Art anchor — Roman II */}
      <figure
        aria-hidden
        className="relative mx-auto flex flex-col items-center select-none"
      >
        <div
          className="pointer-events-none absolute -inset-6 -z-[1] rounded-full opacity-70"
          style={{
            background:
              "transparent",
          }}
        />
        <IconArt src={iconRomanII} alt="" size="lg" />
        <span
          className="mt-3 block h-px w-20"
          style={{ background: "linear-gradient(90deg, transparent, var(--wine) 50%, transparent)" }}
        />
        <figcaption
          className="smallcaps mt-3 text-[10px] tracking-[0.32em]"
          style={{ color: "var(--gold-heading-deep)" }}
        >
          Глава · Конституция РФ
        </figcaption>
      </figure>

      {/* Lead — always visible */}
      <p
        className="philosophy-lead font-display text-center mt-8"
        style={{
          color: "#1F0A10",
          fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        В Российской Федерации <strong style={{ fontWeight: 700 }}>статус свободы</strong> закреплён
        во{" "}
        <em className="italic" style={{ color: "var(--gold-heading-deep)" }}>
          второй главе Конституции РФ
        </em>
        .
      </p>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mx-auto mt-6 flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] transition-colors"
        style={{
          color: "var(--gold-heading-deep)",
          border: "1px solid color-mix(in oklab, var(--gold-light) 55%, transparent)",
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--gold-mist) 18%, transparent), transparent)",
        }}
      >
        <span>{open ? "Свернуть" : "Подробнее"}</span>
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform duration-500"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Collapsible body — grid-rows trick for smooth height anim */}
      <div
        className="grid transition-[grid-template-rows,opacity] duration-700 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <div className="pt-8 space-y-6">
            <p className="text-base md:text-lg leading-[1.7] text-center">
              Человеку гарантированы:
            </p>

            <ul className="flex flex-wrap justify-center gap-2">
              {guarantees.map((g, i) => (
                <li
                  key={g}
                  className="rounded-full px-3.5 py-1.5 text-[12px] md:text-sm tracking-wide transition-all"
                  style={{
                    color: "#2A1118",
                    border: "1px solid color-mix(in oklab, var(--gold-light) 55%, transparent)",
                    background:
                      "linear-gradient(180deg, color-mix(in oklab, var(--gold-mist) 22%, transparent), color-mix(in oklab, var(--gold-light) 8%, transparent))",
                    transitionDelay: open ? `${i * 40 + 200}ms` : "0ms",
                    transform: open ? "translateY(0)" : "translateY(6px)",
                    opacity: open ? 1 : 0,
                  }}
                >
                  {g}
                </li>
              ))}
            </ul>

            <div
              aria-hidden
              className="mx-auto h-px w-16"
              style={{ background: "color-mix(in oklab, var(--gold-light) 70%, transparent)" }}
            />

            <p className="text-base md:text-lg leading-[1.7]">
              <span
                className="font-display italic"
                style={{ color: "var(--gold-heading-deep)", fontWeight: 600 }}
              >
                Status Svobody
              </span>{" "}
              помогает восстановить финансовую репутацию{" "}
              <strong style={{ fontWeight: 600 }}>
                законным, конфиденциальным и эффективным
              </strong>{" "}
              способом.
            </p>

            <blockquote
              className="relative pl-6 text-lg md:text-xl italic font-display leading-snug"
              style={{
                color: "#1F0A10",
                borderLeft: "2px solid color-mix(in oklab, var(--gold-light) 80%, transparent)",
              }}
            >
              Мы возвращаем не просто кредитный рейтинг. Мы возвращаем{" "}
              <span
                className="not-italic"
                style={{ color: "var(--gold-heading-deep)", fontWeight: 600 }}
              >
                свободу
              </span>{" "}
              принимать решения, строить карьеру, вести бизнес, получать финансирование
              и двигаться дальше.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────── ABOUT ───────────────────── */
function About() {
  return (
    <Section variant="wine" id="about">
      <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10 items-start lg:items-center">
        <ScrollReveal variant="right" delay={1} className="col-span-5 order-1 md:order-2">
          <figure className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 animate-pulse-glow pointer-events-none rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--champagne) 30%, transparent), color-mix(in oklab, var(--champagne-glow) 15%, transparent) 45%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />
            <div
              className="overflow-hidden rounded-[1.5rem] border"
              style={{
                borderColor: "color-mix(in oklab, var(--gold-heading) 35%, transparent)",
                boxShadow: "0 30px 80px -30px color-mix(in oklab, var(--wine-deep) 60%, transparent)",
              }}
            >
              <img
                src={yuliaAbout}
                alt="Юлия Армина — основатель Статус свободы Юлии Арминой"
                className="block w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption
              className="mt-3 sm:mt-5 text-center font-display text-sm sm:text-base md:text-xl"
              style={{ color: "#2A1118" }}
            >
              <span className="italic" style={{ color: "var(--gold-heading-deep)" }}>Юлия Армина</span>
              <span className="block mt-1 smallcaps text-[9px] sm:text-[11px] tracking-[0.16em]" style={{ color: "#3a1a22" }}>
                Основатель · «Статус свободы»
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={2} className="col-span-7 order-2 md:order-1 space-y-3 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-xl leading-relaxed" style={{ color: "var(--gold-heading)" }}>
          <p>
            <span className="italic font-display" style={{ color: "var(--gold-heading)", fontWeight: 700 }}>Юлия&nbsp;Армина</span> — основатель
            юридической компании «СТАТУС СВОБОДЫ». 15&nbsp;лет практики в сфере финансово-юридического сопровождения.
          </p>
          <p>
            Кредитные истории, бюро кредитных историй, Федеральная служба
            судебных приставов, защита активов и законные решения сложных
            финансовых ситуаций — в одном сопровождении с личным подходом
            и прямым контактом с финансовым поверенным.
          </p>
          <p>
            Более <span className="font-display italic" style={{ color: "var(--gold-heading)", fontWeight: 700 }}>888&nbsp;млн&nbsp;рублей</span> урегулированных долговых обязательств.
            Помогаем восстановить финансовую репутацию, снизить давление со стороны
            взыскателей и выстроить понятный план действий.
          </p>
          <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-8" style={{ borderTop: "1px solid color-mix(in oklab, var(--gold-heading) 30%, transparent)" }}>
            <div className="min-w-0">
              <div className="font-display text-sm sm:text-base md:text-lg leading-none" style={{ color: "var(--gold-heading)" }}>
                <AnimatedCounter to={500} suffix="+" />
              </div>
              <div className="mt-2 font-display uppercase text-[9px] sm:text-[10px] leading-tight tracking-tight break-words" style={{ color: "var(--gold-heading)" }}>клиентов</div>
            </div>
            <div className="min-w-0">
              <div className="font-display text-sm sm:text-base md:text-lg leading-none" style={{ color: "var(--gold-heading)" }}>
                <AnimatedCounter to={15} />
              </div>
              <div className="mt-2 font-display uppercase text-[9px] sm:text-[10px] leading-tight tracking-tight break-words" style={{ color: "var(--gold-heading)" }}>лет практики</div>
            </div>
            <div className="min-w-0">
              <div className="font-display text-sm sm:text-base md:text-lg leading-none" style={{ color: "var(--gold-heading)" }}>
                <AnimatedCounter to={888} suffix=" млн" />
              </div>
              <div className="mt-2 font-display uppercase text-[9px] sm:text-[10px] leading-tight tracking-tight break-words" style={{ color: "var(--gold-heading)" }}>списано долгов</div>
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
    { art: iconAudit, t: "Аудит кредитной истории", d: "Запрашиваем отчёты во всех бюро кредитных историй, выявляем неточности, ошибки и некорректные данные в вашем Цифровом профиле." },
    { art: iconConclusion, t: "Заключение", d: "Готовим пошаговый план-рекомендации по исправлению: что оспаривать, какие документы собрать, в каком порядке действовать." },
    { art: iconHandshake, t: "Сопровождение", d: "Подготовка документов, переговоры с кредиторами и бюро кредитных историй, представительство в судебных и досудебных процедурах." },
    { art: iconReputation, t: "Идеальная финансовая репутация", d: "Чистая кредитная история, одобрение ипотеки, кредитов и выгодных условий — фундамент будущего без ограничений." },
  ];
  return (
    <Section variant="tint" id="process">
      <ScrollReveal>
        <SectionLabel n="02" title="Как мы работаем" />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <H2 className="mt-8 max-w-3xl">
          Путь к <span className="text-cyan italic">безупречной репутации</span>
        </H2>
      </ScrollReveal>
      <ol className="mt-14 grid gap-5 md:grid-cols-2">
        {steps.map((s, i) => (
          <ScrollReveal as="li" key={i} variant="zoom" delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="card-lux group/card flex gap-5 p-7 transition-all">
            <IconArt src={s.art} alt="" size="lg" />
            <div className="flex-1">
              <div className="smallcaps text-sm md:text-base tabular">
                Шаг {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-base md:text-lg uppercase leading-snug">{s.t}</h3>
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
    { art: iconDataBureau, t: "Данные из кредитных бюро — кредитная история во всех бюро кредитных историй" },
    { art: iconDataCourt, t: "Информация о судебных взысканиях (Федеральная служба судебных приставов)" },
    { art: iconDataBankruptcy, t: "Сведения о банкротстве и арбитражных процедурах" },
    { art: iconDataScore, t: "Иные финансовые индикаторы и скоринговые маркеры" },
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
          Цифровизация уже здесь. У каждого сформирован цифровой финансовый профиль —
          совокупность всех финансовых следов, по которым о вас судят банки,
          работодатели и партнёры. <span className="text-cyan">Кредитная история</span> —
          невидимый, но мощный актив, влияющий на их решения.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {profile.map((p, i) => (
          <ScrollReveal
            key={i}
            variant="zoom"
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className="card-lux group/card flex items-center gap-5 p-6 md:p-7"
          >
            <IconArt src={p.art} alt="" size="md" />
            <p className="text-base md:text-lg leading-relaxed">{p.t}</p>
          </ScrollReveal>
        ))}
      </div>
      <div className="card-lux mt-12 px-7 py-6" style={{ borderLeftWidth: "3px", borderLeftColor: "var(--gold-heading)" }}>
        <p className="font-display text-base md:text-xl leading-snug">
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
    { art: iconDispute, t: "Оспаривание данных в Бюро кредитных историй", d: "Оспариваем ошибки, ложные записи и незаконные долги в кредитной истории. Повышаем кредитный рейтинг." },
    { art: iconRestore, t: "Восстановление кредитной истории после банкротства", d: "Исправляем ошибки и не закрытые после банкротства кредитные договоры. Полностью восстанавливаем кредитную историю." },
    { art: iconSvo, t: "Помощь в списании долгов участникам специальной военной операции", d: "Закон № 377-ФЗ допускает списание долгов участников специальной военной операции при гибели или инвалидности I группы. Аналогичное право — у членов семьи." },
    { art: iconUnlock, t: "Снятие арестов Федеральной службы судебных приставов", d: "Снимаем аресты на счета и имущество, закрываем исполнительные производства, удаляем недостоверную информацию." },
    { art: iconBuyout, t: "Выкуп долгов у коллекторов", d: "Помогаем выкупить долги у коллекторов с дисконтом до 90% и прекращаем преследование." },
    { art: iconDebtRelief, t: "Полное списание долгов", d: "От первой консультации до закрытия дела — единая точка ответственности и прозрачный план." },
  ];
  return (
    <Section variant="default" id="services">
      <ScrollReveal>
        <SectionLabel n="04" title="Наши услуги" />
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <div className="mt-8 max-w-3xl">
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text)" }}
          >
            Не просто подаём заявления — ведём дела до конца.
          </p>
          <p
            className="mt-2 text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text)" }}
          >
            Каждый этап — под пристальным вниманием юриста.
          </p>
          <div
            className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium tracking-wide"
            style={{
              background: "color-mix(in oklab, var(--gold) 14%, transparent)",
              border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
              color: "var(--wine-deep)",
            }}
          >
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }}
            />
            Работаем онлайн по всей России
          </div>
        </div>
      </ScrollReveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <ScrollReveal
            key={s.t}
            variant="zoom"
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className="card-lux group/card flex gap-5 p-7"
          >
            <IconArt src={s.art} alt="" size="md" />
            <div>
              <h3 className="font-display text-base md:text-lg uppercase leading-snug">{s.t}</h3>
              <p className="mt-2 text-base md:text-lg leading-relaxed">{s.d}</p>
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
      price: "5 000 ₽",
      features: [
        "Аудит отчётов БКИ",
        "Письменное заключение",
        "Пошаговый план для самостоятельного оспаривания кредитной истории",
      ],
      highlight: false,
      art: iconTierBasic,
    },
    {
      t: "Комплексное решение",
      price: "от 35 000 ₽",
      features: [
        "Оспаривание до 5 записей в Бюро кредитных историй",
        "Взаимодействие с банками, коллекторами",
        "Исправление записей в Федеральной службе судебных приставов",
        "Сопровождение юриста",
      ],
      highlight: true,
      art: iconTierPremium,
    },
    {
      t: "Премиум — защита",
      price: "от 65 000 ₽",
      features: [
        "Полное восстановление кредитной истории (в том числе после банкротства)",
        "Снятие арестов и замена записей в Федеральной службе судебных приставов",
        "Выкуп долгов свыше 3 лет с дисконтом до 90%",
        "Контроль исполнения решений судов",
      ],
      highlight: false,
      art: iconTierPlatinum,
    },
  ];
  return (
    <Section variant="wine" id="pricing">
      <ScrollReveal>
        <H2 className="uppercase">Тарифы</H2>
      </ScrollReveal>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tiers.map((p, i) => (
          <ScrollReveal
            key={p.t}
            variant="zoom"
            delay={((i + 1) as 1 | 2 | 3)}
            className={`card-lux relative flex flex-col p-8 ${p.highlight ? "ring-2" : ""}`}
            style={p.highlight ? {
              boxShadow:
                "0 0 0 1px var(--gold-heading), 0 26px 60px -28px color-mix(in oklab, #6a2735 65%, transparent), 0 0 32px color-mix(in oklab, var(--gold-heading) 30%, transparent)",
            } : undefined}
          >
            {p.highlight && (
              <div
                className="absolute -top-3 left-8 px-3 py-1 smallcaps text-xs"
                style={{
                  background: "var(--gold-heading)",
                  color: "#2A1118",
                  borderRadius: "2px",
                }}
              >Популярный</div>
            )}
            <IconArt src={p.art} alt="" size="lg" className="mb-4" />
            <h3 className="font-display uppercase tracking-[0.02em] text-xs md:text-[0.9375rem] leading-snug">{p.t}</h3>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-base md:text-lg">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "var(--gold-heading-deep)" }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <div className="font-display text-2xl md:text-3xl lg:text-4xl text-gradient-cyan leading-none">{p.price}</div>
            </div>
            <LeadFormDialog
              source={`pricing-${p.t}`}
              headline={`Тариф · ${p.t}`}
              trigger={
                <button type="button" className={`mt-5 ${p.highlight ? "btn-cyan" : "btn-ghost"} rounded-sm`}>
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
function EntryPoint() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden py-28 md:py-36 scroll-mt-24"
    >
      <ParticleField density={42} />
      <img src={particlesRise} alt="" aria-hidden className="hidden" loading="lazy" decoding="async" />
      <img src={featherImg} alt="" aria-hidden className="hidden" loading="lazy" decoding="async" />

      <div className="container-tight relative">
        <div className="text-center">
          <h2 className="display mt-8 text-[clamp(2.25rem,7vw,4.5rem)] max-w-4xl mx-auto leading-[1.05]">
            <span className="text-gradient-cyan text-glow">
              Начните восстановление сегодня
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl" style={{ color: "#2A1118" }}>
            Не ждите, пока проблема усугубится. Оставьте заявку — юрист свяжется с вами в ближайшее время.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl space-y-6">
          <LeadFormDialog
            source="entry-point"
            headline="Запись на консультацию"
            trigger={
              <button
                type="button"
                className="btn-cyan btn-cta-pulse group w-full justify-center rounded-sm"
              >
                <span>Оставить заявку</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://t.me/zakon_127"
              target="_blank"
              rel="noopener"
              className="card-lux group flex items-center gap-3 px-5 py-3.5 transition-all"
            >
              <IconArt src={iconTelegram} alt="" size="xs" />
              <div className="text-left">
                <div className="smallcaps text-[9px]" style={{ color: "#5a3540" }}>Telegram</div>
                <div className="text-sm" style={{ color: "#2A1118" }}>t.me/zakon_127</div>
              </div>
            </a>
            <a
              href="https://vk.ru/uarmina"
              target="_blank"
              rel="noopener"
              className="card-lux group flex items-center gap-3 px-5 py-3.5 transition-all"
            >
              <IconArt src={iconVk} alt="" size="xs" />
              <div className="text-left">
                <div className="smallcaps text-[9px]" style={{ color: "#5a3540" }}>ВКонтакте</div>
                <div className="text-sm" style={{ color: "#2A1118" }}>vk.ru/uarmina</div>
              </div>
            </a>
            <a
              href="https://max.ru/id312300900561_biz"
              target="_blank"
              rel="noopener"
              className="card-lux group flex items-center gap-3 px-5 py-3.5 transition-all"
            >
              <IconArt src={iconMax} alt="" size="xs" />
              <div className="text-left">
                <div className="smallcaps text-[9px]" style={{ color: "#5a3540" }}>Max</div>
                <div className="text-sm" style={{ color: "#2A1118" }}>Бизнес-аккаунт</div>
              </div>
            </a>
            <a
              href="https://uslugi.yandex.ru/profile/YuliyaYurevnaArmina-108290"
              target="_blank"
              rel="noopener"
              className="card-lux group flex items-center gap-3 px-5 py-3.5 transition-all"
            >
              <IconArt src={iconYandex} alt="" size="xs" />
              <div className="text-left">
                <div className="smallcaps text-[9px]" style={{ color: "#5a3540" }}>Яндекс Услуги</div>
                <div className="text-sm" style={{ color: "#2A1118" }}>Профиль Ю. Арминой</div>
              </div>
            </a>
          </div>

          <p className="text-center text-[11px] uppercase tracking-[0.2em]" style={{ color: "#5a3540" }}>
            Свяжемся лично в ближайшее время · конфиденциально
          </p>
        </div>
      </div>
    </section>
  );
}

