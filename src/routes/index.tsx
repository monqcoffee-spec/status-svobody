import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, Shield, Zap, Eye, Layers, GitBranch } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { Logo } from "@/components/site/Logo";
import { BankruptcyCalculator } from "@/components/site/BankruptcyCalculator";
import { Cases } from "@/components/site/Cases";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import heroLiberation from "@/assets/hero-liberation.jpg";
import particlesRise from "@/assets/particles-rise.jpg";
import yuliaPortrait from "@/assets/yulia-armina-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STATUS SVOBODY — Освобождение от долгов нового поколения" },
      {
        name: "description",
        content:
          "Legal-tech бренд: банкротство физлиц по 127-ФЗ напрямую с арбитражным управляющим. 888 млн ₽ списанных долгов, 323 дела. Технологичный подход к финансовой свободе.",
      },
      { property: "og:title", content: "STATUS SVOBODY — Status of Freedom" },
      {
        property: "og:description",
        content:
          "Освобождение от долгов через арбитражную процедуру. Технология. Прозрачность. Результат.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Technology />
      <CalculatorSection />
      <CasesSection />
      <TestimonialsSection />
      <BigNumber />
      <Process />
      <Trust />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative -mt-20 min-h-[100svh] overflow-hidden bg-aurora pt-20">
      {/* Particle field background */}
      <ParticleField density={90} />

      {/* Airy liberation imagery */}
      <img
        src={heroLiberation}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        style={{ maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 80%)" }}
      />

      {/* Founder portrait — blended into background, no frame */}
      <img
        src={yuliaPortrait}
        alt="Юлия Армина — основатель Статус Свободы"
        width={1024}
        height={1536}
        className="pointer-events-none absolute select-none
                   right-1/2 translate-x-1/2 bottom-0
                   h-[78svh] w-auto opacity-90
                   md:right-[6%] md:translate-x-0 md:bottom-0 md:h-[92svh]
                   lg:right-[8%] lg:h-[96svh]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%), radial-gradient(ellipse 70% 80% at 50% 55%, black 55%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%), radial-gradient(ellipse 70% 80% at 50% 55%, black 55%, transparent 95%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          filter: "drop-shadow(0 0 60px rgba(201,166,107,0.18))",
        }}
      />

      {/* Grid pattern */}
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />

      {/* Soft glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-32 h-[600px] w-[600px] rounded-full opacity-40 animate-drift"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 25%, transparent), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-20 h-[500px] w-[500px] rounded-full opacity-30 animate-drift"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--teal) 30%, transparent), transparent)", animationDelay: "-8s" }}
      />

      <div className="container-tight relative grid min-h-[80svh] place-items-center pt-12 pb-24 md:place-items-start md:pt-20">
        <div className="text-center max-w-5xl md:text-left md:max-w-[58%]">
          {/* Top eyebrow */}
          <div className="reveal flex items-center justify-center gap-3 text-silver-dim md:justify-start">
            <span className="hairline-tight" />
            <span className="smallcaps text-cyan">Legal · Tech · Liberation</span>
            <span className="hairline-tight" />
          </div>

          {/* Logo mark — small, integrated */}
          <div className="reveal reveal-delay-1 mt-8 flex justify-center md:justify-start">
            <div className="relative">
              <Logo size={84} className="md:!h-24 md:!w-24" />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, color-mix(in oklab, var(--cyan) 35%, transparent) 0%, transparent 65%)",
                  filter: "blur(20px)",
                }}
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="reveal reveal-delay-2 display mt-8 text-[clamp(2.5rem,8vw,6rem)] text-glow">
            <span className="text-gradient-cyan">Статус Свободы</span>
          </h1>
          <div className="reveal reveal-delay-2 mt-3 font-display text-xs tracking-[0.5em] text-cyan uppercase md:text-sm">
            Status · Svobody
          </div>

          {/* Tagline */}
          <p className="reveal reveal-delay-3 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-silver/75 md:mx-0 md:text-lg">
            Превращение тяжести долгов в&nbsp;ясность финансовой свободы.
            Арбитражная процедура нового поколения — прямо, технологично, законно.
          </p>

          {/* CTA */}
          <div className="reveal reveal-delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="btn-cyan group rounded-sm"
            >
              <span>Запустить интенсив</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link to="/services/bankruptcy" className="btn-ghost group rounded-sm">
              <span>Узнать о процедуре</span>
              <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="reveal reveal-delay-3 mt-16 inline-flex flex-col items-center gap-3 text-silver-dim md:items-start">
            <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-cyan/60 to-transparent md:ml-4" />
          </div>
        </div>
      </div>

      {/* Stats footer */}
      <div className="container-tight relative pb-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/5 bg-white/[0.03] backdrop-blur-sm md:grid-cols-4">
          {[
            { v: "888 млн ₽", l: "Списано долгов" },
            { v: "323", l: "Завершённых дел" },
            { v: "50", l: "Активных процедур" },
            { v: "5 лет", l: "В реестре АУ" },
          ].map((s) => (
            <div key={s.l} className="bg-ink/40 px-5 py-7 text-center md:text-left">
              <div className="font-display text-2xl text-cyan tabular md:text-3xl text-glow">{s.v}</div>
              <div className="smallcaps mt-2 text-[9px] text-silver-dim">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── MARQUEE ───────────────────── */
function Marquee() {
  const items = [
    "ЕФРСБ № 20068",
    "СРО «Созидание»",
    "127-ФЗ",
    "ИНН 312300900561",
    "ОГРНИП 324774600450864",
    "Москва · Цветной бульвар, 13",
    "Профиль на Федресурсе",
    "5 лет в реестре АУ",
  ];
  const repeated = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-white/5 bg-ink py-5">
      <div className="marquee flex w-max items-center gap-12 whitespace-nowrap">
        {repeated.map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="smallcaps text-silver-dim">{t}</span>
            <span className="text-cyan">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────── MANIFESTO ───────────────────── */
function Manifesto() {
  return (
    <Section variant="darker">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel n="01" title="Манифест" />
          <h2 className="display mt-8 text-4xl text-silver md:text-5xl">
            От тяжести —<br />
            <span className="text-cyan text-glow italic">к свету.</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-silver/75 max-w-2xl">
          <p>
            Долг — это не приговор. Это статус, который можно изменить.
            <span className="text-silver"> Закон 127-ФЗ дал право на финансовую свободу каждому. </span>
            Мы превращаем это право в результат.
          </p>
          <p>
            Юридическая фирма продаёт услугу. Арбитражный управляющий несёт
            <span className="text-cyan"> личную имущественную ответственность через СРО</span> —
            это другой уровень вовлечённости и другая цена ошибки.
          </p>
          <p className="text-silver-dim">
            Здесь нет менеджеров, скриптов и колл-центров. Только прямой диалог,
            прозрачная процедура и измеримый результат.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────── SERVICES ───────────────────── */
function Services() {
  const services = [
    {
      icon: <Shield className="h-6 w-6" />,
      n: "01",
      title: "Банкротство 127-ФЗ",
      desc: "Законное списание долгов через арбитражный суд. От 500 000 ₽ задолженности. Личное ведение дела от первой консультации до решения.",
      to: "/services/bankruptcy",
      tag: "Основная процедура",
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      n: "02",
      title: "Восстановление КИ",
      desc: "Уникальная услуга после процедуры. Алгоритм возвращения кредитного рейтинга за 1,5–3 года. Реальный путь к ипотеке.",
      to: "/services/credit-history",
      tag: "После банкротства",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      n: "03",
      title: "Интенсив «Status Svobody»",
      desc: "5 уроков в Telegram. Бесплатно, без звонков и навязывания. Чек-лист «подходит ли вам банкротство» за 3 минуты.",
      to: "/intensive",
      tag: "Бесплатно",
    },
  ];

  return (
    <Section variant="default">
      <div className="flex items-end justify-between gap-8 flex-wrap">
        <div>
          <SectionLabel n="02" title="Направления" />
          <H2 className="mt-8 max-w-3xl">
            Три пути <span className="text-cyan italic">к статусу свободы</span>
          </H2>
        </div>
        <p className="max-w-sm text-sm text-silver-dim">
          Выберите точку входа — каждое направление выстроено как самостоятельный продукт
          с прозрачной структурой и фиксированным результатом.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.n}
            to={s.to}
            className="group relative overflow-hidden border border-white/8 bg-ink-soft/60 p-8 transition-all duration-500 hover:border-cyan/40 hover:bg-ink-soft"
            style={{ borderRadius: "2px" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: "radial-gradient(ellipse at top, color-mix(in oklab, var(--cyan) 12%, transparent), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="font-display text-xs tabular text-cyan/70 tracking-[0.3em]">{s.n}</div>
                <div className="smallcaps text-[9px] text-silver-dim">{s.tag}</div>
              </div>
              <div className="mt-8 inline-flex h-12 w-12 items-center justify-center border border-cyan/30 text-cyan transition-all group-hover:border-cyan group-hover:text-cyan-glow group-hover:shadow-[0_0_24px_color-mix(in_oklab,var(--cyan)_40%,transparent)]" style={{ borderRadius: "2px" }}>
                {s.icon}
              </div>
              <h3 className="mt-7 font-display text-2xl text-silver group-hover:text-cyan-glow transition-colors">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver-dim">{s.desc}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan">
                Подробнее <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── TECHNOLOGY ───────────────────── */
function Technology() {
  const features = [
    { icon: <Cpu className="h-5 w-5" />, t: "Telegram-бот", d: "Первичная диагностика и интенсив автоматизированы. 24/7, без ожидания." },
    { icon: <Eye className="h-5 w-5" />, t: "Прозрачный трекинг", d: "Каждое действие в деле фиксируется. Доступ к статусу в любой момент." },
    { icon: <Layers className="h-5 w-5" />, t: "Интеграция с реестрами", d: "Прямая работа с ЕФРСБ, БКИ, ФНС, арбитражной системой." },
    { icon: <Shield className="h-5 w-5" />, t: "Защита данных", d: "Документы хранятся в зашифрованном контуре. NDA по умолчанию." },
  ];
  return (
    <Section variant="glow">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel n="03" title="Технология" />
          <H2 className="mt-8">
            Legal-tech, <br />
            <span className="text-cyan italic text-glow">а не «юристы по старинке»</span>
          </H2>
          <p className="mt-6 max-w-md text-silver-dim">
            Каждый этап процедуры цифровизован. Вы видите процесс, а не ждёте звонка
            «у нас всё хорошо». Это бренд новой эпохи юридических услуг.
          </p>
        </div>

        <div className="lg:col-span-7 grid gap-px bg-white/8 border border-white/8 sm:grid-cols-2" style={{ borderRadius: "2px" }}>
          {features.map((f) => (
            <div key={f.t} className="group bg-ink-soft p-7 transition-colors hover:bg-ink">
              <div className="inline-flex h-10 w-10 items-center justify-center border border-cyan/30 text-cyan transition-all group-hover:border-cyan group-hover:shadow-[0_0_18px_color-mix(in_oklab,var(--cyan)_40%,transparent)]" style={{ borderRadius: "2px" }}>
                {f.icon}
              </div>
              <h3 className="mt-5 font-display text-lg text-silver">{f.t}</h3>
              <p className="mt-2 text-sm text-silver-dim leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────── BIG NUMBER ───────────────────── */
/* ───────────────────── CALCULATOR ───────────────────── */
function CalculatorSection() {
  return (
    <Section variant="darker" id="calculator">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <SectionLabel n="04" title="AI-диагностика" />
          <H2 className="mt-8">
            Узнайте за <span className="text-cyan italic text-glow">2 минуты</span>
          </H2>
          <p className="mt-6 max-w-md text-silver-dim">
            AI-юрист задаст 3–5 уточняющих вопросов и сформулирует персональный
            вердикт: подходит ли процедура, какая стратегия и что делать дальше.
          </p>
        </div>
        <div className="lg:col-span-7 text-right">
          <span className="smallcaps text-silver-dim">
            Анонимно · контакты только если кейс требует юриста
          </span>
        </div>
      </div>

      <div className="mt-12">
        <BankruptcyCalculator />
      </div>
    </Section>
  );
}

/* ───────────────────── CASES ───────────────────── */
function CasesSection() {
  return (
    <Section variant="default" id="cases">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionLabel n="05" title="Кейсы" />
          <H2 className="mt-8">
            Реальные дела. <span className="text-cyan italic text-glow">Реальные цифры.</span>
          </H2>
        </div>
        <p className="max-w-sm text-sm text-silver-dim lg:col-span-5">
          Анонимизировано: имена, регионы и профессии изменены. Суммы долгов, сроки
          и решения судов — без изменений, проверяются в ЕФРСБ.
        </p>
      </div>

      <div className="mt-14">
        <Cases />
      </div>
    </Section>
  );
}

/* ───────────────────── TESTIMONIALS ───────────────────── */
function TestimonialsSection() {
  return (
    <Section variant="darker" id="testimonials">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionLabel n="06" title="Отзывы" />
          <H2 className="mt-8">
            Истории тех, кто уже <span className="text-cyan italic text-glow">получил статус.</span>
          </H2>
        </div>
        <p className="max-w-sm text-sm text-silver-dim lg:col-span-5">
          Видеоистории и развёрнутые отзывы публикуются с письменного согласия клиентов.
          Имена изменены, факты, суммы и сроки — без правок.
        </p>
      </div>

      <div className="mt-14">
        <Testimonials />
      </div>
    </Section>
  );
}

function BigNumber() {
  return (
    <Section variant="default">
      <img
        src={particlesRise}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        style={{ maskImage: "radial-gradient(ellipse 70% 80% at 50% 60%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 60%, black, transparent 80%)" }}
      />
      <div className="text-center">
        <SectionLabel n="07" title="Главная метрика" />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklab, var(--cyan) 18%, transparent), transparent 70%)",
            }}
          />
          <div className="display tabular text-[clamp(4rem,18vw,14rem)] text-gradient-cyan text-glow leading-none">
            888
          </div>
          <div className="smallcaps mt-2 text-cyan">миллионов ₽</div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl font-display text-2xl text-silver md:text-3xl">
          восемьсот восемьдесят восемь миллионов рублей
        </p>
        <p className="mx-auto mt-3 max-w-md text-silver-dim italic">
          списано с долгов клиентов с 2020 года
        </p>

        <div className="mx-auto mt-12 flex max-w-md items-center gap-4">
          <span className="h-px flex-1 bg-white/10" />
          <a href="https://fedresurs.ru/" target="_blank" rel="noopener" className="smallcaps text-cyan hover:text-cyan-glow">
            Подтверждено в ЕФРСБ →
          </a>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────── PROCESS ───────────────────── */
function Process() {
  const steps = [
    { n: "01", t: "Бесплатная диагностика", d: "Запускаете бота — за 3 минуты понимаете, подходит ли вам процедура." },
    { n: "02", t: "Личная консультация", d: "Разбираем ситуацию, имущество, риски. Финальное решение — за вами." },
    { n: "03", t: "Подготовка дела", d: "Сбор документов, заявление в арбитражный суд. Берём на себя." },
    { n: "04", t: "Процедура и списание", d: "Веду дело до решения суда. Долги списаны, статус свободы получен." },
  ];

  return (
    <Section variant="darker">
      <SectionLabel n="08" title="Процесс" />
      <H2 className="mt-8 max-w-3xl">
        Четыре шага <span className="text-cyan italic">от диагностики до свободы</span>
      </H2>

      <div className="mt-16 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2 lg:grid-cols-4" style={{ borderRadius: "2px" }}>
        {steps.map((s, i) => (
          <div key={s.n} className="relative bg-ink p-8">
            {i < steps.length - 1 && (
              <div aria-hidden className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-1/2 bg-cyan/40 lg:block" style={{ boxShadow: "0 0 8px var(--cyan)" }} />
            )}
            <div className="font-display text-3xl tabular text-cyan text-glow">{s.n}</div>
            <h3 className="mt-6 font-display text-lg text-silver">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-silver-dim">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── TRUST ───────────────────── */
function Trust() {
  const items = [
    { label: "Реестр ЕФРСБ", value: "АУ № 20068", sub: "от 17.11.2020", href: "https://fedresurs.ru/" },
    { label: "СРО", value: "«Созидание»", sub: "Союз АУ", href: "https://sozidanie-sro.ru/" },
    { label: "ИНН", value: "312300900561", sub: "ИП Армина Ю. Ю." },
    { label: "ОГРНИП", value: "324774600450864", sub: "Свидетельство ИП" },
  ];
  return (
    <Section variant="default">
      <div className="flex items-end justify-between gap-8 flex-wrap">
        <div>
          <SectionLabel n="09" title="Прозрачность" />
          <H2 className="mt-8 max-w-2xl">
            Все данные открыты <br />
            и <span className="text-cyan italic text-glow">проверяемы.</span>
          </H2>
        </div>
        <p className="max-w-sm text-sm text-silver-dim">
          Каждую цифру с этого сайта можно сверить в государственных реестрах.
          Это не маркетинг — юридический факт.
        </p>
      </div>

      <div className="mt-14 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2 lg:grid-cols-4" style={{ borderRadius: "2px" }}>
        {items.map((it) => (
          <div key={it.label} className="group relative bg-ink-soft p-7 transition-all hover:bg-ink">
            <div className="absolute inset-x-7 top-0 h-px bg-cyan/0 transition-colors group-hover:bg-cyan" style={{ boxShadow: "0 0 8px var(--cyan)" }} />
            <div className="smallcaps text-[9px] text-silver-dim">{it.label}</div>
            <div className="mt-4 font-display text-2xl tabular text-silver md:text-3xl">{it.value}</div>
            <div className="mt-2 text-xs text-silver-dim">{it.sub}</div>
            {it.href && (
              <a href={it.href} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-1.5 text-xs text-cyan hover:text-cyan-glow">
                Открыть реестр <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── FINAL CTA ───────────────────── */
function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-aurora py-32 md:py-40 scroll-mt-24">
      <ParticleField density={50} />
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />

      <div className="container-tight relative text-center">
        <Eyebrow>Точка входа</Eyebrow>
        <h2 className="display mt-8 text-[clamp(2.25rem,7vw,5rem)] max-w-4xl mx-auto">
          <span className="text-gradient-cyan text-glow">Получите свой статус свободы.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-silver/75">
          Начните с бесплатного интенсива в Telegram. 5 уроков, чек-лист, чёткое
          понимание — подходит ли вам процедура.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan group rounded-sm">
            <span>Запустить бесплатно</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <LeadFormDialog
            source="index-final"
            trigger={
              <button type="button" className="btn-ghost group rounded-sm">
                <span>Оставить заявку</span>
                <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
          Telegram-бот · или оставьте заявку — свяжемся в течение часа
        </p>
      </div>
    </section>
  );
}
