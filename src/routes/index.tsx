import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
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
      <EntryPoint />
    </SiteLayout>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-deep md:-mt-20">
      <h1 className="sr-only">
        Статус Свободы Юлии Арминой — премиальный финансово-юридический консалтинг.
      </h1>

      <div className="relative md:hidden">
        <img
          src={yuliaPortrait}
          alt="Юлия Армина — основатель STATUS SVOBODY"
          width={1024}
          height={1536}
          fetchPriority="high"
          className="block w-full select-none"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-1 inset-x-0 h-32"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--ink-deep) 100%)",
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
              <span className="smallcaps text-cyan">Legal consulting</span>
            </div>
            <p className="mt-6 font-display text-5xl leading-[1.05] tracking-[-0.03em] text-silver lg:text-6xl">
              СТАТУС СВОБОДЫ <br />
              <span className="text-gradient-cyan text-glow italic font-serif">Юлии Арминой</span>
            </p>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-silver/80">
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

      <div className="relative md:hidden bg-ink-deep px-5 pb-12 pt-2">
        <div className="reveal mb-5 text-center">
          <p className="font-display text-3xl leading-[1.1] tracking-[-0.02em] text-silver">
            СТАТУС СВОБОДЫ <br />
            <span className="text-gradient-cyan italic font-serif">Юлии Арминой</span>
          </p>
          <p className="mt-4 text-base leading-relaxed text-silver/80">
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
    <Section variant="default" id="about">
      <SectionLabel n="02" title="О компании" />
      <H2 className="mt-8 max-w-3xl">
        О <span className="text-cyan italic">нас</span>
      </H2>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5 order-1">
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
              <div className="relative animate-float">
                <Logo size={140} />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 animate-pulse-glow"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklab, var(--cyan) 35%, transparent), transparent 65%)",
                    filter: "blur(28px)",
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
            <div className="absolute inset-x-0 bottom-0 px-6 pb-5 text-center">
              <div className="smallcaps text-cyan-glow text-[10px]">Основатель</div>
              <div className="mt-1 font-display text-xl text-silver">Юлия Армина</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-2 space-y-6 text-lg md:text-xl leading-relaxed text-silver/85">
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
        </div>
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
    <Section variant="default" id="process">
      <SectionLabel n="05" title="Как мы работаем" />
      <H2 className="mt-8 max-w-3xl">
        Путь к <span className="text-cyan italic">безупречной репутации</span>
      </H2>
      <ol className="mt-14 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2" style={{ borderRadius: "2px" }}>
        {steps.map((s, i) => (
          <li key={i} className="flex gap-5 bg-ink-soft p-8 transition-colors hover:bg-ink">
            <IconBadge size="md">{s.icon}</IconBadge>
            <div className="flex-1">
              <div className="font-display text-xs tabular tracking-[0.22em] text-cyan-glow uppercase">
                Шаг {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-xl md:text-2xl text-silver leading-snug">{s.t}</h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">{s.d}</p>
            </div>
          </li>
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
      <SectionLabel n="03" title="Цифровой профиль" />
      <H2 className="mt-8 max-w-3xl">
        Что входит в ваш <span className="text-cyan italic">Цифровой профиль</span>
      </H2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-silver/75">
        Цифровой профиль — совокупность всех финансовых следов, по которым
        о вас судят банки, работодатели и партнёры.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {profile.map((p, i) => (
          <div key={i} className="flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-colors hover:border-cyan/40" style={{ borderRadius: "2px" }}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan/30 text-cyan" style={{ borderRadius: "2px" }}>
              <Database className="h-5 w-5" />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-silver/85 pt-1.5">{p}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 border-l-2 border-cyan/60 bg-cyan/5 px-7 py-6" style={{ borderRadius: "2px" }}>
        <p className="font-display text-xl md:text-2xl leading-snug text-silver">
          Срок исковой давности
          <span className="text-cyan-glow"> не обнуляет </span>
          ваши долги.
        </p>
        <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">
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
      <SectionLabel n="04" title="Наши услуги" />
      <H2 className="mt-8 max-w-3xl">
        Полный спектр решений для{" "}
        <span className="text-cyan italic">восстановления кредитной истории</span>
      </H2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
        Не просто подаём заявления — ведём дела до конца: анализ КИ,
        переговоры с банками и коллекторами, жалобы в БКИ, контроль
        исполнения решений суда. Каждый этап — под пристальным вниманием
        юриста.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.t} className="flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40" style={{ borderRadius: "2px" }}>
            <IconBadge size="sm">{s.icon}</IconBadge>
            <div>
              <h3 className="font-display text-lg md:text-xl text-silver leading-snug">{s.t}</h3>
              <p className="mt-2 text-base md:text-lg leading-relaxed text-silver-dim">{s.d}</p>
            </div>
          </div>
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
    <Section variant="darker" id="pricing">
      <SectionLabel n="06" title="Тарифы" />
      <H2 className="mt-8 max-w-3xl">
        Прозрачные тарифы{" "}
        <span className="text-cyan italic">без скрытых платежей</span>
      </H2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
        Три чётких пакета — от быстрого оспаривания одной записи до
        полного восстановления кредитной истории. В договоре все цены
        фиксированы, никаких дополнительных сборов.
      </p>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tiers.map((p) => (
          <div
            key={p.t}
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
          </div>
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
          <Eyebrow>Точка входа</Eyebrow>
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

