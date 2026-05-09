import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Scale,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  FileSearch,
  FileText,
  Gavel,
  Trophy,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionLabel, H2 } from "@/components/site/Section";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { ParticleField } from "@/components/site/ParticleField";
import { BotIntensive } from "@/components/site/BotIntensive";
import { IconBadge } from "@/components/site/IconBadge";

export const Route = createFileRoute("/bankruptcy")({
  head: () => ({
    meta: [
      { title: "Банкротство — премиальное юридическое сопровождение · STATUS SVOBODY" },
      {
        name: "description",
        content:
          "Личное банкротство под ключ: списание долгов по 127-ФЗ, сопровождение арбитражного процесса, защита имущества. Юлия Армина и команда финансовых юристов.",
      },
      { property: "og:title", content: "Банкротство · STATUS SVOBODY" },
      {
        property: "og:description",
        content: "Финансовое освобождение и новый старт. Премиальное сопровождение процедуры банкротства физических лиц.",
      },
    ],
  }),
  component: BankruptcyPage,
});

function BankruptcyPage() {
  return (
    <SiteLayout>
      <BankruptcyHero />
      <BankruptcyAdvantages />
      <BankruptcyStages />
      <BankruptcySupport />
      <BankruptcyResults />
      <BotIntensive />
      <BankruptcyFaq />
      <BankruptcyCTA />
    </SiteLayout>
  );
}

function BankruptcyHero() {
  return (
    <section className="relative overflow-hidden bg-aurora md:-mt-20 pt-32 md:pt-44 pb-20 md:pb-28">
      <ParticleField density={32} />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full opacity-30 animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 30%, transparent), transparent)",
        }}
      />
      <div className="container-tight relative">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="hairline-tight" />
            <span className="smallcaps text-cyan">127-ФЗ · Личное банкротство</span>
          </div>
          <h1 className="mt-8 font-display text-5xl md:text-7xl leading-[1.05] tracking-[-0.03em] text-silver">
            Финансовое <br />
            <span className="text-gradient-cyan text-glow italic font-serif">освобождение.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-silver/80">
            Долги — не приговор, а юридическая задача с предсказуемым решением.
            Премиальное сопровождение процедуры банкротства физических лиц:
            от стратегии до получения определения суда.
          </p>
          <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-3">
            <LeadFormDialog
              source="bankruptcy-hero"
              headline="Консультация по банкротству"
              trigger={
                <button type="button" className="btn-cyan group rounded-sm">
                  <span>Получить консультацию</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              }
            />
            <a href="#bot-intensive" className="btn-ghost group rounded-sm">
              <span>Бесплатный интенсив</span>
              <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BankruptcyAdvantages() {
  const items = [
    { icon: <Scale className="h-6 w-6" />, t: "Закон на вашей стороне", d: "127-ФЗ — рабочий механизм. Списываем кредиты, микрозаймы, налоговые задолженности и долги перед физлицами." },
    { icon: <ShieldCheck className="h-6 w-6" />, t: "Защита имущества", d: "Сохраняем единственное жильё, технику и ценные активы в рамках закона. Стратегия — до подачи заявления." },
    { icon: <HeartHandshake className="h-6 w-6" />, t: "Защита от коллекторов", d: "После принятия заявления — стоп звонки, аресты, исполнительные производства." },
    { icon: <Sparkles className="h-6 w-6" />, t: "Новый старт", d: "Чистый юридический статус. Возможность строить финансовую репутацию без груза прошлого." },
  ];
  return (
    <Section variant="darker" id="advantages">
      <SectionLabel n="01" title="Преимущества" />
      <H2 className="mt-8 max-w-3xl">
        Что вы получаете <span className="text-cyan italic">после процедуры</span>
      </H2>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.t}
            className="group/card flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40"
            style={{ borderRadius: "2px" }}
          >
            <IconBadge size="sm">{it.icon}</IconBadge>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-silver leading-snug">{it.t}</h3>
              <p className="mt-2 text-base md:text-lg leading-relaxed text-silver-dim">{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BankruptcyStages() {
  const steps = [
    { icon: <FileSearch className="h-7 w-7" />, t: "Аудит ситуации", d: "Анализируем долги, имущество, доходы. Определяем стратегию: банкротство, реструктуризация или альтернативный путь." },
    { icon: <FileText className="h-7 w-7" />, t: "Подготовка документов", d: "Собираем доказательную базу, выписки БКИ, ФССП, справки. Готовим заявление в арбитражный суд." },
    { icon: <Gavel className="h-7 w-7" />, t: "Судебная процедура", d: "Сопровождение арбитражного процесса, взаимодействие с финансовым управляющим, защита интересов клиента." },
    { icon: <Trophy className="h-7 w-7" />, t: "Освобождение от долгов", d: "Получение определения суда. Полное юридическое освобождение от обязательств." },
  ];
  return (
    <Section variant="default" id="stages">
      <SectionLabel n="02" title="Этапы работы" />
      <H2 className="mt-8 max-w-3xl">
        Прозрачный путь к <span className="text-cyan italic">финансовой свободе</span>
      </H2>
      <ol
        className="mt-14 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2"
        style={{ borderRadius: "2px" }}
      >
        {steps.map((s, i) => (
          <li key={s.t} className="group/card flex gap-5 bg-ink-soft p-8 transition-colors hover:bg-ink">
            <IconBadge size="md">{s.icon}</IconBadge>
            <div>
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

function BankruptcySupport() {
  return (
    <Section variant="darker" id="support">
      <SectionLabel n="03" title="Сопровождение" />
      <H2 className="mt-8 max-w-3xl">
        Полное сопровождение <span className="text-cyan italic">под ключ</span>
      </H2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/80">
        Прямой контакт с финансовым поверенным на всех этапах. Защищённый канал
        связи, единая точка ответственности, ежемесячные отчёты по делу.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { t: "Подготовка", d: "Сбор и оформление документов, разработка стратегии, расчёт сценариев." },
          { t: "Процесс", d: "Представительство в суде, взаимодействие с финансовым управляющим и кредиторами." },
          { t: "После процедуры", d: "Восстановление кредитной истории, чистый Цифровой профиль, новый финансовый старт." },
        ].map((p) => (
          <div
            key={p.t}
            className="border border-white/8 bg-ink-soft/60 p-8 transition-all hover:border-cyan/40"
            style={{ borderRadius: "2px" }}
          >
            <h3 className="font-display text-2xl text-silver">{p.t}</h3>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BankruptcyResults() {
  const stats = [
    { v: "100%", l: "Дел доведено до определения суда" },
    { v: "127-ФЗ", l: "Работаем строго в правовом поле" },
    { v: "от 6 мес", l: "Средний срок процедуры" },
    { v: "0 ₽", l: "Стоимость первой консультации" },
  ];
  return (
    <Section variant="default" id="results">
      <SectionLabel n="04" title="Результаты" />
      <H2 className="mt-8 max-w-3xl">
        Цифры, которые <span className="text-cyan italic">говорят за нас</span>
      </H2>
      <div className="mt-14 grid gap-px bg-white/5 border border-white/5 md:grid-cols-4" style={{ borderRadius: "2px" }}>
        {stats.map((s) => (
          <div key={s.l} className="bg-ink-soft p-8 text-center">
            <div className="font-display text-4xl md:text-5xl text-gradient-cyan text-glow">{s.v}</div>
            <div className="mt-4 smallcaps text-silver-dim">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BankruptcyFaq() {
  const items = [
    { q: "Сохраню ли я единственное жильё?", a: "Да, по общему правилу единственное жильё неприкосновенно. Стратегия защиты разрабатывается до подачи заявления." },
    { q: "Какие долги списываются?", a: "Кредиты банков, микрозаймы, задолженности перед физлицами, часть налоговых долгов и штрафов. Не списываются алименты, возмещение вреда жизни и здоровью, субсидиарная ответственность." },
    { q: "Сколько длится процедура?", a: "Реализация имущества — от 6 месяцев. Реструктуризация — до 3 лет. Конкретный срок зависит от состава долгов и имущества." },
    { q: "Можно ли работать после банкротства?", a: "Да. Ограничения касаются только руководящих должностей в финансовых организациях в течение определённого срока. Обычная работа и предпринимательство — без ограничений." },
    { q: "Когда можно снова брать кредиты?", a: "Сразу после завершения процедуры. Восстановление кредитной истории — отдельный сервис нашей команды." },
  ];
  return (
    <Section variant="default" id="faq">
      <SectionLabel n="07" title="Вопросы и ответы" />
      <H2 className="mt-8 max-w-3xl">
        Частые <span className="text-cyan italic">вопросы</span>
      </H2>
      <ul className="mt-12 max-w-4xl space-y-3">
        {items.map((it) => (
          <li
            key={it.q}
            className="border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40"
            style={{ borderRadius: "2px" }}
          >
            <h3 className="font-display text-lg md:text-xl text-silver leading-snug">{it.q}</h3>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">{it.a}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function BankruptcyCTA() {
  return (
    <section className="relative overflow-hidden bg-aurora py-28 md:py-36">
      <ParticleField density={40} />
      <div className="container-tight relative text-center">
        <h2 className="display text-[clamp(2rem,6vw,4.5rem)] max-w-4xl mx-auto">
          <span className="text-gradient-cyan text-glow">Начните процедуру с честной оценки.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-silver/75">
          Первая консультация бесплатна. Если банкротство вам не нужно —
          скажу об этом сразу.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LeadFormDialog
            source="bankruptcy-final"
            headline="Консультация по банкротству"
            trigger={
              <button type="button" className="btn-cyan group rounded-sm">
                <span>Получить консультацию</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
          <a
            href="https://t.me/status_svobody_bot"
            target="_blank"
            rel="noopener"
            className="btn-ghost rounded-sm"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}