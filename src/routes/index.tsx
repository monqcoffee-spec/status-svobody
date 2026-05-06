import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  FileSearch,
  FileText,
  Handshake,
  Sparkles,
  ShieldCheck,
  Scale,
  Database,
  Gavel,
  Shield,
  Banknote,
  HeartHandshake,
  Award,
  GraduationCap,
  BadgeCheck,
  Workflow,
  Phone,
  Send,
  MessageCircle,
  MapPin,
  AtSign,
  Megaphone,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { Logo } from "@/components/site/Logo";
import { Team } from "@/components/site/Team";
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
      <Advantages />
      <About />
      <Regalia />
      <Process />
      <DigitalProfile />
      <Services />
      <Practice />
      <Team2 />
      <Pricing />
      <Contacts />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-deep md:-mt-20">
      <h1 className="sr-only">
        STATUS SVOBODY — юридические решения для вашей свободы. Юлия Армина, основатель.
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
              <span className="smallcaps text-cyan">Premium legal consulting</span>
            </div>
            <p className="mt-6 font-serif text-4xl italic leading-snug text-silver lg:text-5xl">
              Юридические решения<br />
              <span className="text-cyan-glow">для вашей свободы.</span>
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-silver/70">
              Финансовый поверенный Юлия Армина и команда юристов.
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
              <a href="#process" className="btn-ghost group rounded-sm">
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

      <div className="relative md:hidden bg-ink-deep px-5 pb-12 pt-2">
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
          <a href="#process" className="btn-ghost group rounded-sm w-full">
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
    { title: "Освобождение", desc: "Снятие груза правовой неопределённости. Чистый юридический статус без скрытых рисков.", icon: <IconLiberation /> },
    { title: "Контроль", desc: "Каждый документ под управлением. Прозрачный план, фиксированные сроки, отчётность.", icon: <IconControl /> },
    { title: "Защита", desc: "Конфиденциальность по умолчанию. NDA, защищённые каналы, доступ только у юриста.", icon: <IconShield /> },
    { title: "Результат", desc: "Не процесс ради процесса — измеримый итог. Каждый кейс закрывается определённым решением.", icon: <IconResult /> },
  ];

  return (
    <Section variant="darker" id="advantages">
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
              <h3 className="mt-6 font-display text-lg tracking-[0.04em] text-silver">{it.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-silver-dim">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── ABOUT ───────────────────── */
function About() {
  return (
    <Section variant="default" id="about">
      <SectionLabel n="02" title="О бренде" />
      <H2 className="mt-8 max-w-3xl">
        Статус <span className="text-cyan italic">Свободы</span>
      </H2>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
          <div className="relative animate-float">
            <Logo size={160} />
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
  );
}

/* ───────────────────── REGALIA ───────────────────── */
function Regalia() {
  const items = [
    { icon: <Award className="h-6 w-6" />, t: "Финансовый поверенный", d: "Профессиональный статус: личное представительство интересов клиента в финансово-правовых вопросах." },
    { icon: <GraduationCap className="h-6 w-6" />, t: "Высшее юридическое образование", d: "Профильная специализация по финансовому и гражданскому праву." },
    { icon: <Scale className="h-6 w-6" />, t: "Практика по 218-ФЗ", d: "Системная работа с НБКИ, ОКБ и Скоринг Бюро. Оспаривание ошибок, дублей, проданных долгов." },
    { icon: <BadgeCheck className="h-6 w-6" />, t: "Сотни закрытых дел", d: "Кредитная история, ФССП, банкротство, ипотека после восстановления — измеримый результат у каждого клиента." },
  ];
  return (
    <Section variant="darker" id="regalia">
      <SectionLabel n="03" title="Регалии" />
      <H2 className="mt-8 max-w-3xl">
        Регалии <span className="text-cyan italic">финансового юриста</span>
      </H2>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {items.map((r) => (
          <div key={r.t} className="flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40" style={{ borderRadius: "2px" }}>
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
      <SectionLabel n="04" title="Как мы работаем" />
      <H2 className="mt-8 max-w-3xl">
        Путь к <span className="text-cyan italic">безупречной репутации</span>
      </H2>
      <ol className="mt-14 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2" style={{ borderRadius: "2px" }}>
        {steps.map((s, i) => (
          <li key={i} className="flex gap-5 bg-ink-soft p-8 transition-colors hover:bg-ink">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-cyan/30 text-cyan" style={{ borderRadius: "2px", boxShadow: "0 0 14px color-mix(in oklab, var(--cyan) 22%, transparent)" }}>
              {s.icon}
            </div>
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
  const pillars = [
    { icon: <ShieldCheck className="h-6 w-6" />, t: "Защита", d: "Конфиденциальность по умолчанию. Защищённые каналы связи, NDA, ограниченный круг доступа к вашим данным." },
    { icon: <Sparkles className="h-6 w-6" />, t: "Результат", d: "Не процесс ради процесса — измеримый итог. Каждый кейс закрывается определённым решением." },
    { icon: <Workflow className="h-6 w-6" />, t: "Команда", d: "Юлия Армина и юристы под её руководством. Личное участие основателя в стратегии — без передачи дела на конвейер." },
  ];
  return (
    <Section variant="darker" id="digital-profile">
      <SectionLabel n="05" title="Цифровой профиль" />
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

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
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
      <SectionLabel n="06" title="Наши услуги" />
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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan/30 text-cyan" style={{ borderRadius: "2px" }}>
              {s.icon}
            </div>
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

/* ───────────────────── PRACTICE ───────────────────── */
function Practice() {
  const news = [
    { date: "15.03.2026", t: "Оспаривание данных в БКИ", d: "Подаём заявления и жалобы в БКИ на недостоверные данные, ошибочные записи о просрочках и незаконные кредитные договоры. В 99% случаев данные удаляются или исправляются.", author: "Александр Волков" },
    { date: "22.03.2026", t: "Восстановление КИ после банкротства", d: "Банки часто игнорируют решение суда и оставляют долги открытыми. Добиваемся полного обнуления данных в БКИ и восстанавливаем кредитную историю.", author: "Елена Морозова" },
    { date: "08.04.2026", t: "Снятие арестов по ФССП", d: "Аресты остаются даже после окончания исполнительного производства. Подаём заявления в ФССП, снимаем аресты и удаляем недостоверную информацию.", author: "Дмитрий Сидоров" },
  ];
  return (
    <Section variant="darker" id="practice">
      <SectionLabel n="07" title="Из практики" />
      <H2 className="mt-8 max-w-3xl">
        Свежие дела команды{" "}
        <span className="text-cyan italic">STATUS SVOBODY</span>
      </H2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {news.map((n) => (
          <article key={n.t} className="flex flex-col border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40" style={{ borderRadius: "2px" }}>
            <time className="font-display text-xs tabular tracking-[0.22em] text-cyan-glow uppercase">{n.date}</time>
            <h3 className="mt-3 font-display text-xl md:text-2xl text-silver leading-snug">{n.t}</h3>
            <p className="mt-3 flex-1 text-base md:text-lg leading-relaxed text-silver-dim">{n.d}</p>
            <div className="mt-6 pt-4 border-t border-white/8 smallcaps text-cyan">{n.author}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── TEAM ───────────────────── */
function Team2() {
  return (
    <Section variant="default" id="team">
      <SectionLabel n="08" title="Наши эксперты" />
      <H2 className="mt-8 max-w-3xl">
        Команда, которая знает, как вернуть{" "}
        <span className="text-cyan italic">доверие к финансовой системе</span>
      </H2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
        Юристы с опытом работы в банках, БКИ, у судебных приставов и
        в делах о банкротстве. Сотни закрытых аналогичных дел —
        практика, а не только теория.
      </p>
      <div className="mt-16">
        <Team />
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
      <SectionLabel n="09" title="Тарифы" />
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

/* ───────────────────── CONTACTS ───────────────────── */
function Contacts() {
  return (
    <Section variant="default" id="contacts">
      <SectionLabel n="10" title="Контакты" />
      <H2 className="mt-8 max-w-3xl">
        Свяжитесь <span className="text-cyan italic">напрямую</span>
      </H2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-silver/75">
        Никаких колл-центров. Общение веду лично — Telegram, WhatsApp, телефон.
        Для предварительного разбора удобнее всего написать в Telegram.
      </p>

      <div className="mt-12 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2 lg:grid-cols-3" style={{ borderRadius: "2px" }}>
        <ContactCard icon={<Phone className="h-5 w-5" />} label="Телефон" value="+7 (965) 445-73-78" href="tel:+79654457378" />
        <ContactCard icon={<AtSign className="h-5 w-5" />} label="Telegram (личный)" value="@u_armina" href="https://t.me/u_armina" />
        <ContactCard icon={<Megaphone className="h-5 w-5" />} label="Telegram-канал" value="ЮЛИЯ АРМИНА · t.me/zakon_127" href="https://t.me/zakon_127" />
        <ContactCard icon={<Send className="h-5 w-5" />} label="Бесплатный интенсив" value="@status_svobody_bot" href="https://t.me/status_svobody_bot" />
        <ContactCard icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Написать" href="https://wa.me/79654457378" />
        <ContactCard icon={<MapPin className="h-5 w-5" />} label="Адрес" value="Москва, Цветной бульвар, 13" />
      </div>
    </Section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="group flex h-full flex-col gap-5 bg-ink-soft p-7 transition-all hover:bg-ink">
      <div className="inline-flex h-10 w-10 items-center justify-center border border-cyan/30 text-cyan transition-all group-hover:border-cyan group-hover:shadow-[0_0_18px_color-mix(in_oklab,var(--cyan)_40%,transparent)]" style={{ borderRadius: "2px" }}>
        {icon}
      </div>
      <div>
        <div className="smallcaps text-[9px] text-silver-dim">{label}</div>
        <div className="mt-2 font-display text-base text-silver">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{content}</a>
  ) : content;
}

/* ───────────────────── FINAL CTA ───────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-aurora py-32 md:py-40 scroll-mt-24">
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
      <img src={featherImg} alt="" aria-hidden className="hidden" />
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />

      <div className="container-tight relative text-center">
        <Eyebrow>Точка входа</Eyebrow>
        <h2 className="display mt-8 text-[clamp(2.25rem,7vw,5rem)] max-w-4xl mx-auto">
          <span className="text-gradient-cyan text-glow">Начните восстановление сегодня.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-silver/75">
          Не ждите, пока проблема усугубится. Оставьте заявку — юрист
          свяжется с вами в течение 15 минут. Первичная консультация бесплатно.
          Работаем по всей России.
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
            <ArrowRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
          Свяжемся лично в течение 15 минут · конфиденциально
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── ICONS ───────────────────── */
function IconLiberation() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden>
      <path d="M20 4 A16 16 0 1 0 32 32" />
      <path d="M28 4 L36 4 L36 12" />
      <path d="M36 4 L20 20" strokeOpacity="0.6" />
    </svg>
  );
}
function IconControl() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden>
      <rect x="6" y="6" width="28" height="28" />
      <path d="M6 14 H34 M14 6 V34" strokeOpacity="0.5" />
      <circle cx="20" cy="20" r="3" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 4 L34 10 V20 C34 28 28 34 20 36 C12 34 6 28 6 20 V10 Z" />
      <path d="M14 20 L18 24 L26 16" />
    </svg>
  );
}
function IconResult() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="8" strokeOpacity="0.6" />
      <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}