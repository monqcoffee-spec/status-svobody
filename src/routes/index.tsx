import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";
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
import yuliaAbout from "@/assets/yulia-armina-vertical.png";
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
      <div className="relative reveal reveal-delay-1 w-full container-tight pt-6 md:pt-10">
        <div
          className="mx-auto overflow-hidden rounded-[1.5rem]"
          style={{
            maxWidth: "min(960px, 92vw)",
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--wine) 18%, transparent), transparent 70%)",
            boxShadow:
              "0 30px 80px -30px color-mix(in oklab, var(--wine-deep) 55%, transparent)",
          }}
        >
          <img
            src={yuliaPortrait}
            alt="Юлия Армина — основатель Статус свободы Юлии Арминой"
            className="block w-full h-auto max-h-[58vh] sm:max-h-[62vh] md:max-h-[68vh] object-contain mx-auto"
            style={{ filter: "contrast(1.08) saturate(1.12)" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="relative container-tight pt-8 pb-24 md:pt-12 md:pb-36 lg:pt-16 lg:pb-40">

        <h2 className="mx-auto mt-6 max-w-5xl text-center font-display uppercase tracking-[0.01em] leading-[1.05]"
            style={{ color: "var(--text)" }}>
          <span
            className="reveal reveal-delay-2 block text-[1.5rem] sm:text-[2.1rem] md:text-[2.9rem] lg:text-[3.4rem] font-semibold"
          >
            Кредитную историю невозможно исправить.
          </span>
          <span
            className="reveal reveal-delay-3 mt-3 block text-[1.5rem] sm:text-[2.1rem] md:text-[2.9rem] lg:text-[3.4rem] italic font-serif text-gradient-cyan text-glow"
            style={{ fontWeight: 500 }}
          >
            Но&nbsp;её можно оспорить.
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
      title: "Конфиденциальность",
      desc: "Ваши данные и обращения остаются строго защищёнными.",
    },
    {
      title: "Законные механизмы",
      desc: "Работаем исключительно в рамках действующего законодательства.",
    },
    {
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
            className="smallcaps text-[11px] tracking-[0.3em]"
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
        <div
          className="philosophy-prose mx-auto mt-12 max-w-3xl space-y-6 text-base md:text-lg leading-[1.75]"
          style={{ color: "#2A1118" }}
        >
          <p className="philosophy-lead text-lg md:text-xl" style={{ color: "#1F0A10" }}>
            В Российской Федерации <strong style={{ fontWeight: 600 }}>статус свободы</strong> закреплён во{" "}
            <em className="italic" style={{ color: "var(--gold-heading-deep)" }}>второй главе Конституции РФ</em>.
            Человеку гарантированы: право на жизнь, достоинство, безопасность, свобода слова,
            совести, вероисповедания, личная неприкосновенность, неприкосновенность частной
            жизни, личная и семейная тайна, защита своей чести и доброго имени.
          </p>

          <div
            aria-hidden
            className="mx-auto h-px w-16"
            style={{ background: "color-mix(in oklab, var(--gold) 60%, transparent)" }}
          />

          <p>
            Цифровизация давно перестала быть будущим — <strong style={{ fontWeight: 600 }}>она уже здесь</strong>.
            У каждого человека сформирован цифровой финансовый профиль.{" "}
            <span style={{ color: "var(--gold-heading-deep)", fontWeight: 600 }}>Кредитная история</span> —
            это невидимый, но мощный актив, который влияет на решения банков, работодателей,
            партнёров и государственных структур.
          </p>

          <p>
            <span className="font-display italic" style={{ color: "var(--gold-heading-deep)", fontWeight: 600 }}>
              Status Svobody
            </span>{" "}
            помогает восстановить финансовую репутацию{" "}
            <strong style={{ fontWeight: 600 }}>законным, конфиденциальным и эффективным</strong> способом.
          </p>

          <blockquote
            className="relative mt-2 pl-6 text-lg md:text-xl italic font-display leading-snug"
            style={{
              color: "#1F0A10",
              borderLeft: "2px solid color-mix(in oklab, var(--gold) 75%, transparent)",
            }}
          >
            Мы возвращаем не просто кредитный рейтинг. Мы возвращаем{" "}
            <span className="not-italic" style={{ color: "var(--gold-heading-deep)", fontWeight: 600 }}>
              свободу
            </span>{" "}
            принимать решения, строить карьеру, вести бизнес, получать финансирование
            и двигаться дальше.
          </blockquote>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={(i + 1) as 1 | 2 | 3}>
            <div
              className="card-lux relative h-full p-7 md:p-8 transition-transform duration-500 hover:-translate-y-1"
              style={{
                borderColor: "color-mix(in oklab, var(--gold-heading) 45%, transparent)",
              }}
            >
              <h3
                className="font-display text-xl md:text-2xl uppercase tracking-wide"
                style={{ color: "var(--gold-heading-deep)" }}
              >
                {v.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed" style={{ color: "#2A1118" }}>
                {v.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── ABOUT ───────────────────── */
function About() {
  return (
    <Section variant="wine" id="about">
      <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:items-center">
        <ScrollReveal variant="left" delay={1} className="lg:col-span-5 order-1">
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
              className="mt-5 text-center font-display text-lg md:text-xl"
              style={{ color: "#2A1118" }}
            >
              <span className="italic" style={{ color: "var(--gold-heading-deep)" }}>Юлия Армина</span>
              <span className="block mt-1 smallcaps text-[11px] tracking-[0.18em]" style={{ color: "#3a1a22" }}>
                Основатель · «Статус свободы Юлии Арминой»
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={2} className="lg:col-span-7 order-2 space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: "#2A1118" }}>
          <p>
            <span className="italic font-display" style={{ color: "var(--gold-heading-deep)", fontWeight: 600 }}>Юлия&nbsp;Армина</span> — основатель
            «Статус свободы Юлии Арминой». 15&nbsp;лет практики в сфере финансово-юридического сопровождения.
          </p>
          <p>
            Кредитные истории, бюро кредитных историй, Федеральная служба
            судебных приставов, защита активов и законные решения сложных
            финансовых ситуаций — в одном сопровождении с личным подходом
            и прямым контактом с финансовым поверенным.
          </p>
          <p>
            Более <span className="font-display italic" style={{ color: "var(--gold-heading-deep)", fontWeight: 600 }}>888&nbsp;млн&nbsp;рублей</span> урегулированных долговых обязательств.
            Помогаем восстановить финансовую репутацию, снизить давление со стороны
            взыскателей и выстроить понятный план действий.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 pt-8" style={{ borderTop: "1px solid color-mix(in oklab, var(--gold-heading) 30%, transparent)" }}>
            <div>
              <div className="font-display text-3xl md:text-4xl" style={{ color: "var(--gold-heading)" }}>
                <AnimatedCounter to={500} suffix="+" />
              </div>
              <div className="mt-2 smallcaps text-[10px]" style={{ color: "var(--gold-heading)" }}>клиентов</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl" style={{ color: "var(--gold-heading)" }}>
                <AnimatedCounter to={15} />
              </div>
              <div className="mt-2 smallcaps text-[10px]" style={{ color: "var(--gold-heading)" }}>лет практики</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl" style={{ color: "var(--gold-heading)" }}>
                <AnimatedCounter to={888} suffix=" млн" />
              </div>
              <div className="mt-2 smallcaps text-[10px]" style={{ color: "var(--gold-heading)" }}>списанных долгов</div>
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
    { art: iconAudit, t: "Аудит кредитной истории", d: "Запрашиваем отчёты во всех трёх бюро кредитных историй, выявляем неточности, ошибки и некорректные данные в вашем Цифровом профиле." },
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
    { art: iconDataBureau, t: "Данные из кредитных бюро — кредитная история во всех трёх бюро кредитных историй" },
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
          Цифровой профиль — совокупность всех финансовых следов, по которым
          о вас судят банки, работодатели и партнёры.
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
    { art: iconDispute, t: "Оспаривание данных в Бюро кредитных историй", d: "Оспариваем ошибки, ложные записи и незаконные долги в кредитной истории. Повышаем кредитный рейтинг." },
    { art: iconRestore, t: "Восстановление кредитной истории после банкротства", d: "Исправляем ошибки и не закрытые после банкротства кредитные договоры. Полностью восстанавливаем кредитную историю." },
    { art: iconSvo, t: "Помощь в списании долгов участникам специальной военной операции", d: "Закон № 377-ФЗ допускает списание долгов участников специальной военной операции при гибели или инвалидности I группы. Аналогичное право — у членов семьи." },
    { art: iconUnlock, t: "Снятие арестов Федеральной службы судебных приставов", d: "Снимаем аресты на счета и имущество, закрываем исполнительные производства, удаляем недостоверную информацию." },
    { art: iconBuyout, t: "Выкуп долгов у коллекторов", d: "Помогаем выкупить долги у коллекторов с дисконтом до 90% и прекращаем преследование." },
    { art: iconSupport, t: "Полный спектр сопровождения", d: "От первой консультации до закрытия дела — единая точка ответственности и прозрачный план." },
  ];
  return (
    <Section variant="default" id="services">
      <ScrollReveal>
        <SectionLabel n="04" title="Наши услуги" />
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
          Не просто подаём заявления — ведём дела до конца: анализ кредитной
          истории, переговоры с банками и коллекторами, жалобы в Бюро кредитных
          историй, контроль исполнения судебных решений. Каждый этап — под
          пристальным вниманием юриста.
        </p>
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
              <h3 className="font-display text-lg md:text-xl leading-snug">{s.t}</h3>
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
      sub: "Пошаговый план для самостоятельного исправления КИ",
      price: "5 000 ₽",
      meta: "Включает 1 консультацию",
      features: ["Аудит отчётов в трёх бюро кредитных историй", "Письменное заключение", "План действий"],
      highlight: false,
      art: iconTierBasic,
    },
    {
      t: "Премиум",
      sub: "Оспаривание до 5 записей + работа с коллекторами и банками",
      price: "от 35 000 ₽",
      meta: "Включает 3 консультации",
      features: ["До 5 оспариваний в бюро кредитных историй", "Переговоры с банками и коллекторами", "Сопровождение юриста"],
      highlight: true,
      art: iconTierPremium,
    },
    {
      t: "Платинум — комплексный подход",
      sub: "Полное восстановление: бюро кредитных историй, Федеральной службы судебных приставов, банкротство, выкуп долгов",
      price: "от 65 000 ₽",
      meta: "5 консультаций · сопровождение 6 месяцев",
      features: ["Все направления под одним юристом", "Снятие арестов Федеральной службы судебных приставов", "Выкуп долгов с дисконтом", "Контроль исполнения решений"],
      highlight: false,
      art: iconTierPlatinum,
    },
  ];
  return (
    <Section variant="wine" id="pricing">
      <ScrollReveal>
        <SectionLabel n="05" title="Тарифы" />
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <H2 className="mt-8 max-w-3xl">
          Понятные пакеты —{" "}
          <span className="text-cyan italic">цена закреплена в договоре</span>
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
            <h3 className="font-display uppercase tracking-[0.02em] text-2xl md:text-3xl leading-snug">{p.t}</h3>
            <p className="mt-3 text-base md:text-lg leading-relaxed">{p.sub}</p>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-base md:text-lg">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "var(--gold-heading-deep)" }} />
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
            <div className="mt-4 text-center">
              <div className="font-display text-2xl md:text-3xl text-gradient-cyan">{p.price}</div>
              <div className="mt-1 smallcaps text-[10px]">{p.meta}</div>
            </div>
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

