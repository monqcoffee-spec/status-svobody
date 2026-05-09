import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  Check,
  Database,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { Logo } from "@/components/site/Logo";
import { Faq } from "@/components/site/Faq";
import { IconBadge } from "@/components/site/IconBadge";
import { IconArt } from "@/components/site/IconArt";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import particlesRise from "@/assets/particles-rise.jpg";
import yuliaPortrait from "@/assets/yulia-armina-hero.png";
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
import iconPhone from "@/assets/icons-3d/phone.png";
import iconTelegram from "@/assets/icons-3d/telegram.png";
import iconBot from "@/assets/icons-3d/bot.png";

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
  return (
    <section className="relative overflow-hidden">
      <h1 className="sr-only">
        Статус Свободы Юлии Арминой — премиальный финансово-юридический консалтинг.
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

      {/* Full-width hero image */}
      <div className="relative reveal reveal-delay-1 w-full">
        <img
          src={yuliaPortrait}
          alt="Юлия Армина — основатель Статус Свободы"
          className="block w-full h-[70vh] sm:h-[75vh] md:h-auto object-cover object-[78%_center] sm:object-[72%_center] md:object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="mt-6 md:mt-8 text-center font-display tracking-[0.32em] uppercase text-[13px] sm:text-base md:text-xl"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--gold-soft), var(--wine-deep) 50%, var(--gold-soft))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 24px color-mix(in oklab, var(--gold) 30%, transparent)",
          }}
        >
          Статус Свободы Юлии Арминой
        </div>
      </div>

      <div className="relative container-tight pt-10 pb-24 md:pt-16 md:pb-36 lg:pt-20 lg:pb-40">

        <h2 className="mx-auto mt-12 max-w-5xl text-center font-display tracking-[-0.04em] leading-[0.98]"
            style={{ color: "var(--text)" }}>
          <span
            className="reveal reveal-delay-2 block text-[2.6rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.4rem]"
          >
            Свобода начинается
          </span>
          <span
            className="reveal reveal-delay-3 block text-[2.6rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.4rem] italic font-serif text-gradient-cyan text-glow"
            style={{ fontWeight: 400 }}
          >
            с правильного решения
          </span>
        </h2>

        <p
          className="reveal reveal-delay-3 mx-auto mt-8 max-w-2xl text-center text-base sm:text-lg md:text-xl leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Личное сопровождение основателем бренда. Восстановление кредитной
          истории, банкротство, ФССП, БКИ — без посредников и колл-центров.
        </p>

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
          <div className="relative flex aspect-[4/5] w-full items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 animate-pulse-glow pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--champagne) 35%, transparent), color-mix(in oklab, var(--champagne-glow) 18%, transparent) 40%, transparent 70%)",
                filter: "blur(36px)",
              }}
            />
            <Logo size={180} onDark />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={2} className="lg:col-span-7 order-2 space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: "#2A1118" }}>
          <p>
            <span className="italic" style={{ color: "var(--gold-heading-deep)" }}>Статус Свободы</span> — премиальный
            финансово-юридический консалтинг. Поддержка на каждом шагу:
            от первой консультации до закрытия дела.
          </p>
          <p style={{ color: "#3a1a22" }}>
            Личный финансовый поверенный сопровождает дело лично, без передачи
            на конвейер. Прямой контакт, честный диалог и прозрачный план —
            если задача решается проще, скажу об этом на первой встрече,
            бесплатно.
          </p>
          <div
            className="card-lux relative mt-2 px-7 py-6"
          >
            <div className="smallcaps text-[10px]" style={{ color: "var(--gold-heading-deep)" }}>Почему «Статус Свободы»</div>
            <p className="mt-3 font-display text-xl md:text-2xl leading-snug">
              Статус свободы человека закреплён во{" "}
              <span className="italic" style={{ color: "var(--gold-heading-deep)" }}>второй главе Конституции РФ</span>.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed">
              Бренд назван в честь основополагающего права —
              и зарегистрирован как товарный знак. Возвращаем
              финансовую свободу через закон.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 pt-8" style={{ borderTop: "1px solid color-mix(in oklab, var(--gold-heading) 30%, transparent)" }}>
            <div>
              <div className="font-display text-3xl md:text-4xl text-gradient-cyan text-glow">
                <AnimatedCounter to={500} suffix="+" />
              </div>
              <div className="mt-2 smallcaps text-[10px]" style={{ color: "#5a3540" }}>клиентов</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-gradient-cyan text-glow">
                <AnimatedCounter to={8} />
              </div>
              <div className="mt-2 smallcaps text-[10px]" style={{ color: "#5a3540" }}>лет практики</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-gradient-cyan text-glow">
                <AnimatedCounter to={98} suffix="%" />
              </div>
              <div className="mt-2 smallcaps text-[10px]" style={{ color: "#5a3540" }}>успех</div>
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
    { art: iconAudit, t: "Аудит кредитной истории", d: "Запрашиваем отчёты во всех трёх БКИ, выявляем неточности, ошибки и некорректные данные в вашем Цифровом профиле." },
    { art: iconConclusion, t: "Заключение", d: "Готовим пошаговый план-рекомендации по исправлению: что оспаривать, какие документы собрать, в каком порядке действовать." },
    { art: iconHandshake, t: "Сопровождение", d: "Подготовка документов, переговоры с кредиторами и БКИ, представительство в судебных и досудебных процедурах." },
    { art: iconReputation, t: "Идеальная финансовая репутация", d: "Чистая кредитная история, одобрение ипотеки, кредитов и выгодных условий — фундамент будущего без ограничений." },
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
            <IconArt src={s.art} alt={s.t} size="lg" />
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
    { art: iconDispute, t: "Оспаривание данных в БКИ", d: "Оспариваем ошибки, ложные записи и незаконные долги в кредитной истории. Срок — до 30 дней. Повышаем кредитный рейтинг." },
    { art: iconRestore, t: "Восстановление КИ после банкротства", d: "Исправляем ошибки и не закрытые после банкротства кредитные договоры. Полностью восстанавливаем кредитную историю." },
    { art: iconSvo, t: "Помощь в списании долгов участникам СВО", d: "Закон № 377-ФЗ допускает списание долгов участников СВО при гибели или инвалидности I группы. Аналогичное право — у членов семьи." },
    { art: iconUnlock, t: "Снятие арестов ФССП", d: "Снимаем аресты на счета и имущество, закрываем исполнительные производства, удаляем недостоверную информацию." },
    { art: iconBuyout, t: "Выкуп долгов у коллекторов", d: "Помогаем выкупить долги у коллекторов с дисконтом до 90% и прекращаем преследование." },
    { art: iconSupport, t: "Полный спектр сопровождения", d: "От первой консультации до закрытия дела — единая точка ответственности и прозрачный план." },
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
            className="card-lux group/card flex gap-5 p-7"
          >
            <IconArt src={s.art} alt={s.t} size="md" />
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
      features: ["Аудит отчётов в трёх БКИ", "Письменное заключение", "План действий"],
      highlight: false,
      art: iconTierBasic,
    },
    {
      t: "Премиум",
      sub: "Оспаривание до 5 записей + работа с коллекторами и банками",
      price: "от 35 000 ₽",
      meta: "Включает 3 консультации",
      features: ["До 5 оспариваний в БКИ", "Переговоры с банками и коллекторами", "Сопровождение юриста"],
      highlight: true,
      art: iconTierPremium,
    },
    {
      t: "Платинум — комплексный подход",
      sub: "Полное восстановление: БКИ, ФССП, банкротство, выкуп долгов",
      price: "от 65 000 ₽",
      meta: "5 консультаций · сопровождение 6 месяцев",
      features: ["Все направления под одним юристом", "Снятие арестов ФССП", "Выкуп долгов с дисконтом", "Контроль исполнения решений"],
      highlight: false,
      art: iconTierPlatinum,
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
            <IconArt src={p.art} alt={p.t} size="lg" className="mb-4" />
            <h3 className="font-display text-2xl md:text-3xl leading-snug">{p.t}</h3>
            <p className="mt-3 text-base md:text-lg leading-relaxed">{p.sub}</p>
            <div className="mt-6 font-display text-3xl md:text-4xl text-gradient-cyan">{p.price}</div>
            <div className="mt-2 smallcaps">{p.meta}</div>
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
        className="card-lux relative overflow-hidden p-8 md:p-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold-heading) 35%, transparent), transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="smallcaps" style={{ color: "var(--gold-heading-deep)" }}>Списать долги · Банкротство</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em]" style={{ color: "var(--gold-heading-deep)" }}>
              Не уверены, спишут ли{" "}
              <span className="text-gradient-cyan italic">ваши долги</span>?
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed">
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
      className="relative overflow-hidden py-28 md:py-36 scroll-mt-24"
    >
      <ParticleField density={42} />
      <img src={particlesRise} alt="" aria-hidden className="hidden" />
      <img src={featherImg} alt="" aria-hidden className="hidden" />

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
          <p className="mx-auto mt-6 max-w-xl" style={{ color: "#2A1118" }}>
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

            <div className="card-lux relative inline-flex w-full items-center gap-4 px-6 py-4">
              <IconArt src={iconPhone} alt="Телефон" size="sm" />
              <div className="text-left">
                <div className="smallcaps text-[9px]" style={{ color: "#5a3540" }}>Телефон</div>
                <a href="tel:+79654457378" className="font-display text-lg tabular transition-colors" style={{ color: "#2A1118" }}>
                  +7 (965) 445-73-78
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://t.me/zakon_127"
                target="_blank"
                rel="noopener"
                className="card-lux group flex items-center gap-3 px-5 py-3.5 transition-all"
              >
                <IconArt src={iconTelegram} alt="Telegram-канал" size="sm" />
                <div className="text-left">
                  <div className="smallcaps text-[9px]" style={{ color: "#5a3540" }}>Telegram-канал</div>
                  <div className="text-sm transition-colors" style={{ color: "#2A1118" }}>t.me/zakon_127</div>
                </div>
              </a>
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="card-lux group flex items-center gap-3 px-5 py-3.5 transition-all"
              >
                <IconArt src={iconBot} alt="Бесплатный интенсив" size="sm" />
                <div className="text-left">
                  <div className="smallcaps text-[9px]" style={{ color: "#5a3540" }}>Бесплатный интенсив</div>
                  <div className="text-sm transition-colors" style={{ color: "#2A1118" }}>@status_svobody_bot</div>
                </div>
              </a>
            </div>

            <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "#5a3540" }}>
              Свяжемся лично в течение 15 минут · конфиденциально
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              className="card-lux relative p-8 md:p-10"
            >
              <div className="smallcaps" style={{ color: "var(--gold-heading-deep)" }}>Заявка</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl leading-snug">
                Узнайте перспективы вашего дела
              </h3>
              <p className="mt-3 text-sm md:text-base">
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
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.22em]" style={{ color: "#5a3540" }}>
                Имя · Телефон · E-mail · Описание (опционально)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

