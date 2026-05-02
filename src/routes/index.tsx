import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, Shield, Eye, Layers, GitBranch, LineChart, FileSearch } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { Cases } from "@/components/site/Cases";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { AiDiagnostic } from "@/components/site/AiDiagnostic";
import particlesRise from "@/assets/particles-rise.jpg";
import yuliaPortrait from "@/assets/yulia-armina-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Статус Свободы — восстановление кредитной истории" },
      {
        name: "description",
        content:
          "Финансовый консультант: разбор БКИ, чистка ошибочных записей, рост кредитного рейтинга, путь к ипотеке за 1,5–3 года.",
      },
      { property: "og:title", content: "Статус Свободы — кредитная история" },
      {
        property: "og:description",
        content:
          "Алгоритм восстановления рейтинга. Чистка БКИ, выстраивание истории, ипотека.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteLayout>
      <Hero />
      <Manifesto />
      <Services />
      <Approach />
      <DiagnosticSection />
      <CasesSection />
      <TestimonialsSection />
      <Process />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative -mt-16 md:-mt-20 min-h-[92svh] md:min-h-[100svh] overflow-hidden bg-black pt-16 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, color-mix(in oklab, var(--cyan) 6%, transparent) 0%, transparent 70%), #000",
        }}
      />
      <ParticleField density={70} />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-[0.18]"
        style={{
          maskImage: "linear-gradient(180deg, black 0%, black 40%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(180deg, black 0%, black 40%, transparent 85%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-32 h-[600px] w-[600px] rounded-full opacity-30 animate-drift"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 22%, transparent), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-20 h-[500px] w-[500px] rounded-full opacity-20 animate-drift"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--teal) 28%, transparent), transparent)", animationDelay: "-8s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--ink, #000) 100%)" }}
      />

      <div className="container-tight relative flex min-h-[70svh] flex-col items-center justify-between pt-1 pb-8 md:min-h-[80svh] md:justify-center md:pt-10 md:pb-20">
        <h1 className="sr-only">Статус Свободы — восстановление кредитной истории с Юлией Арминой</h1>

        <div className="reveal reveal-delay-1 relative w-full">
          <div className="relative mx-auto w-fit">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 animate-pulse-glow"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 42%, color-mix(in oklab, var(--cyan) 20%, transparent) 0%, transparent 70%)",
                filter: "blur(70px)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24"
              style={{
                background:
                  "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(0,0,0,0.85) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            <img
              src={yuliaPortrait}
              alt="Юлия Армина — финансовый консультант, основатель «Статус Свободы»"
              width={1024}
              height={1536}
              className="relative z-10 mx-auto h-[46svh] w-auto select-none md:h-[78svh] lg:h-[84svh]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 60% 78% at 42% 44%, black 28%, rgba(0,0,0,0.55) 62%, transparent 92%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 78% at 42% 44%, black 28%, rgba(0,0,0,0.55) 62%, transparent 92%)",
                filter:
                  "drop-shadow(0 30px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 80px rgba(201,166,107,0.10))",
              }}
            />
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-4 flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row md:mt-10 md:gap-3">
          <Link to="/services/credit-history" className="btn-cyan group rounded-sm">
            <span>Восстановить кредитную историю</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link to="/services/diagnostic" className="btn-ghost group rounded-sm">
            <span>Финансовая диагностика</span>
            <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
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
            Из тени БКИ —<br />
            <span className="text-cyan text-glow italic">в свой рейтинг.</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-silver/75 max-w-2xl">
          <p>
            Кредитная история — это не приговор. Это набор записей,
            <span className="text-silver"> которые можно проверить, оспорить и переписать. </span>
            Главное — действовать по алгоритму, а не «по советам с форумов».
          </p>
          <p>
            Я работаю с тем, что у вас уже есть: тремя бюро кредитных историй,
            фактическими записями, реальной финансовой картиной. <span className="text-cyan">
            Без обещаний «удалим всё за 1 день» </span> — таких сервисов не существует.
          </p>
          <p className="text-silver-dim">
            Здесь нет менеджеров, скриптов и колл-центров. Только разбор вашей ситуации,
            понятный план и сопровождение до результата.
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
      icon: <FileSearch className="h-6 w-6" />,
      n: "01",
      title: "Финансовая диагностика",
      desc: "Полный разбор вашей ситуации: долги, доходы, имущество, текущая кредитная история. На выходе — стратегия и понимание следующего шага.",
      to: "/services/diagnostic",
      tag: "С чего начать",
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      n: "02",
      title: "Восстановление КИ",
      desc: "Алгоритм возвращения кредитного рейтинга за 1,5–3 года: запрос отчётов в трёх БКИ, чистка ошибок, выстраивание истории, путь к ипотеке.",
      to: "/services/credit-history",
      tag: "Основной продукт",
    },
  ];

  return (
    <Section variant="default">
      <div className="flex items-end justify-between gap-8 flex-wrap">
        <div>
          <SectionLabel n="02" title="Направления" />
          <H2 className="mt-8 max-w-3xl">
            Два пути <span className="text-cyan italic">к статусу свободы</span>
          </H2>
        </div>
        <p className="max-w-sm text-sm text-silver-dim">
          Начинаем с диагностики и переходим к восстановлению — каждый этап
          с прозрачным результатом и фиксированным сроком.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
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

/* ───────────────────── APPROACH ───────────────────── */
function Approach() {
  const features = [
    { icon: <Cpu className="h-5 w-5" />, t: "Telegram-канал", d: "Полезные материалы по работе с БКИ. Без спама и автодозвонов, только суть." },
    { icon: <Eye className="h-5 w-5" />, t: "Прозрачный план", d: "Каждый шаг описан заранее. Видите, что делается, в какие сроки и зачем." },
    { icon: <Layers className="h-5 w-5" />, t: "Работа с тремя БКИ", d: "НБКИ, ОКБ, Скоринг Бюро. Запросы, проверка, исправление через официальные каналы." },
    { icon: <Shield className="h-5 w-5" />, t: "Конфиденциальность", d: "Документы и данные остаются у вас. NDA по умолчанию, доступ только у консультанта." },
  ];
  return (
    <Section variant="glow">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel n="03" title="Подход" />
          <H2 className="mt-8">
            Метод, <br />
            <span className="text-cyan italic text-glow">а не «магия удаления»</span>
          </H2>
          <p className="mt-6 max-w-md text-silver-dim">
            Никто не «стирает» кредитную историю — это миф. Но рейтинг можно
            нарастить грамотными действиями. Это проверяемо, измеримо и работает.
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

/* ───────────────────── DIAGNOSTIC ───────────────────── */
function DiagnosticSection() {
  return (
    <Section variant="darker" id="diagnostic">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <SectionLabel n="04" title="AI-диагностика" />
          <H2 className="mt-8">
            Узнайте за <span className="text-cyan italic text-glow">2 минуты</span>
          </H2>
          <p className="mt-6 max-w-md text-silver-dim">
            AI-консультант задаст 3–5 уточняющих вопросов и сформулирует персональную
            рекомендацию: с чего начать работу с КИ и какой путь подходит вам.
          </p>
        </div>
        <div className="lg:col-span-7 text-right">
          <span className="smallcaps text-silver-dim">
            Анонимно · контакты — только если нужен разбор
          </span>
        </div>
      </div>

      <div className="mt-12">
        <AiDiagnostic />
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
            Реальные истории. <span className="text-cyan italic text-glow">Реальный рост.</span>
          </H2>
        </div>
        <p className="max-w-sm text-sm text-silver-dim lg:col-span-5">
          Анонимизировано: имена, регионы и профессии изменены. Динамика рейтинга
          и итоговые результаты — без правок.
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
    <Section variant="glow" id="testimonials">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionLabel n="06" title="Отзывы" />
          <H2 className="mt-8">
            Те, кто уже <span className="text-cyan italic text-glow">вернул свой рейтинг.</span>
          </H2>
        </div>
        <p className="max-w-sm text-sm text-silver-dim lg:col-span-5">
          Истории публикуются с письменного согласия клиентов. Имена изменены,
          цифры рейтинга — реальные.
        </p>
      </div>

      <div className="mt-14">
        <Testimonials />
      </div>
    </Section>
  );
}

/* ───────────────────── PROCESS ───────────────────── */
function Process() {
  const steps = [
    { n: "01", t: "Диагностика", d: "Запрашиваем отчёты во всех трёх БКИ, разбираем вашу ситуацию по фактам, а не догадкам." },
    { n: "02", t: "Чистка ошибок", d: "Подаём официальные обращения на исправление некорректных записей: проданные долги, незакрытые проценты." },
    { n: "03", t: "Выстраивание истории", d: "Безопасный финансовый продукт, чистая платёжная дисциплина 6–12 месяцев, регулярный мониторинг." },
    { n: "04", t: "Большой шаг", d: "Малый кредит → крупный → одобрение ипотеки. Реалистичный горизонт — 1,5–3 года." },
  ];

  return (
    <Section variant="darker">
      <SectionLabel n="07" title="Процесс" />
      <H2 className="mt-8 max-w-3xl">
        Четыре шага <span className="text-cyan italic">от разбора до ипотеки</span>
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
          <span className="text-gradient-cyan text-glow">Запишитесь на разбор кредитной истории.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-silver/75">
          Бесплатная консультация: смотрим ваши отчёты в трёх БКИ, формулируем
          стратегию роста рейтинга и горизонт до ипотеки.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan group rounded-sm">
            <span>Написать в Telegram</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <LeadFormDialog
            source="index-final"
            headline="Запись на разбор кредитной истории"
            trigger={
              <button type="button" className="btn-ghost group rounded-sm">
                <span>Оставить заявку</span>
                <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
          Telegram · или оставьте заявку — свяжемся в течение часа
        </p>
        <div className="mt-10 flex justify-center">
          <LineChart className="h-6 w-6 text-cyan/40" aria-hidden />
        </div>
      </div>
    </section>
  );
}
