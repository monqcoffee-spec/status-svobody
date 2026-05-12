import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionLabel, H2 } from "@/components/site/Section";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { ParticleField } from "@/components/site/ParticleField";
import { BotIntensive } from "@/components/site/BotIntensive";
import { IconArt } from "@/components/site/IconArt";
import { Testimonials } from "@/components/site/Testimonials";
import iconSvo from "@/assets/icons-3d/svo.png";
import iconSupport from "@/assets/icons-3d/support.png";
import iconHandshake from "@/assets/icons-3d/handshake.png";
import iconRestore from "@/assets/icons-3d/restore.png";
import iconAudit from "@/assets/icons-3d/audit.png";
import iconDataBureau from "@/assets/icons-3d/data-bureau.png";
import iconDataCourt from "@/assets/icons-3d/data-court.png";
import iconUnlock from "@/assets/icons-3d/unlock.png";
import iconLiberation from "@/assets/icons-3d/liberation.png";

export const Route = createFileRoute("/bankruptcy")({
  head: () => ({
    meta: [
      { title: "Банкротство — премиальное юридическое сопровождение · Статус свободы Юлии Арминой" },
      {
        name: "description",
        content:
          "Личное банкротство под ключ: списание долгов по 127-ФЗ, сопровождение арбитражного процесса, защита имущества. Юлия Армина и команда финансовых юристов.",
      },
      { property: "og:title", content: "Банкротство · Статус свободы Юлии Арминой" },
      {
        property: "og:description",
        content: "Финансовое освобождение и новый старт. Премиальное сопровождение процедуры банкротства физических лиц.",
      },
    ],
  }),
  component: BankruptcyPage,
});

function BankruptcyPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        );
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <SiteLayout>
      <BankruptcyHero />
      <BankruptcyAdvantages />
      <BankruptcyStages />
      <BankruptcyResults />
      <BotIntensive />
      <Testimonials compact />
      <BankruptcyFaq />
      <BankruptcyCTA />
    </SiteLayout>
  );
}

function BankruptcyHero() {
  return (
    <section className="relative overflow-hidden bg-aurora md:-mt-20 flex items-end md:items-center min-h-[600px] sm:min-h-[680px] md:min-h-[760px] lg:min-h-[820px] xl:min-h-[880px] pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-10 sm:pb-16 md:pb-32 lg:pb-40">
      <ParticleField density={32} />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full opacity-30 animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 30%, transparent), transparent)",
        }}
      />
      <div className="container-tight relative w-full">
        <div className="reveal flex flex-col-reverse md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-3">
            <span className="hairline-tight" />
            <span className="smallcaps text-cyan">127-ФЗ · Личное банкротство</span>
          </div>
          <h1 className="mt-4 md:mt-8 font-display uppercase text-xl sm:text-3xl md:text-5xl lg:text-[4rem] leading-[1.02] tracking-[-0.03em] text-silver break-words">
            ФИНАНСОВОЕ <br />
            <span className="text-gradient-cyan text-glow">ОСВОБОЖДЕНИЕ</span>
          </h1>
          <p className="mt-4 md:mt-8 w-full text-xs md:text-lg leading-tight text-silver/85 font-display uppercase tracking-tight">
            Долги — не приговор, а юридическая задача
          </p>
          <div className="reveal reveal-delay-2 mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4">
            <LeadFormDialog
              source="bankruptcy-hero"
              headline="Консультация по банкротству"
              trigger={
                <button type="button" className="btn-cyan group rounded-sm text-lg px-8 py-5">
                  <span>Получить консультацию</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              }
            />
            <a href="#bot-intensive" className="btn-ghost group rounded-sm text-lg px-8 py-5">
              <span>Бесплатный интенсив</span>
              <ArrowUpRight className="h-5 w-5 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          </div>
          <div className="reveal mb-2 md:mb-0 flex justify-center md:justify-end md:flex-shrink-0">
            <img
              src={iconLiberation}
              alt="Финансовое освобождение — символ"
              width={1024}
              height={1024}
              loading="eager"
              decoding="async"
              className="block h-auto w-[160px] sm:w-[200px] md:w-[280px] lg:w-[340px] xl:w-[380px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BankruptcyAdvantages() {
  const items = [
    { art: iconSupport, t: "Защита имущества", d: "Сохраняем единственное жильё, технику и ценные активы в рамках закона. Стратегия — до подачи заявления." },
    { art: iconHandshake, t: "Защита от коллекторов", d: "После принятия заявления — стоп звонки, аресты, исполнительные производства." },
    { art: iconSvo, t: "Чистый юридический статус", d: "127-ФЗ — рабочий механизм. Возможность списать кредиты, микрозаймы, задолженности перед физлицами, долги по ЖКХ." },
    { art: iconRestore, t: "Финансовое будущее без груза прошлого", d: "Возможность строить финансовую репутацию заново — без старых обязательств." },
  ];
  return (
    <Section variant="darker" id="advantages">
      <SectionLabel n="01" title="Преимущества" />
      <H2 className="mt-8 max-w-4xl uppercase">
        ВОЗМОЖНОСТИ, КОТОРЫЕ <span className="text-cyan">ОТКРЫВАЕТ ПРОЦЕДУРА</span>
      </H2>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.t}
            className="card-lux group/card flex gap-6 p-9 md:p-11"
          >
            <IconArt src={it.art} alt="" size="md" />
            <div>
              <h3 className="font-display uppercase text-base md:text-lg leading-snug">{it.t}</h3>
              <p className="mt-3 text-lg md:text-xl leading-relaxed">{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BankruptcyStages() {
  const steps = [
    { art: iconAudit, t: "АУДИТ СИТУАЦИИ", d: "Анализируем долги, имущество, доходы. Смотрим, подходит ли вам процедура банкротства." },
    { art: iconDataCourt, t: "ОПРЕДЕЛЯЕМ СТРАТЕГИЮ", d: "Выбираем оптимальный путь: банкротство, реструктуризация или альтернативное решение." },
    { art: iconDataBureau, t: "ПОДГОТОВКА ДОКУМЕНТОВ", d: "Собираем доказательную базу, выписки бюро кредитных историй, Федеральной службы судебных приставов, справки. Готовим заявление в арбитражный суд." },
    { art: iconUnlock, t: "ЗАВЕРШЕНИЕ ПРОЦЕДУРЫ", d: "Получение определения суда и доведение вас до результата." },
  ];
  return (
    <Section variant="default" id="stages">
      <SectionLabel n="02" title="Этапы работы" />
      <H2 className="mt-8 max-w-4xl uppercase">
        ПРОЗРАЧНЫЙ ПУТЬ К <span className="text-cyan">ФИНАНСОВОЙ СВОБОДЕ</span>
      </H2>
      <ol className="mt-14 grid gap-5 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.t} className="card-lux group/card flex gap-6 p-9 md:p-11">
            <IconArt src={s.art} alt="" size="lg" />
            <div>
              <div className="smallcaps text-sm md:text-base tabular">
                Шаг {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display uppercase text-base md:text-lg leading-snug">{s.t}</h3>
              <p className="mt-3 text-lg md:text-xl leading-relaxed">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function BankruptcyResults() {
  const stats = [
    { v: "888 000 000 ₽", l: "Списано долгов" },
    { v: "Более 1000", l: "Семей прошли процедуру" },
    { v: "127-ФЗ", l: "Работаем строго в правовом поле" },
    { v: "8 месяцев", l: "Средний срок процедуры" },
  ];
  return (
    <Section variant="default" id="results">
      <SectionLabel n="04" title="Результаты" />
      <H2 className="mt-8 max-w-4xl uppercase">
        ЦИФРЫ, КОТОРЫЕ <span className="text-cyan">ГОВОРЯТ ЗА НАС</span>
      </H2>
      <div className="mt-14 grid gap-5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="card-lux p-8 text-center">
            <div className="font-display text-xl md:text-3xl text-gradient-gold text-glow">{s.v}</div>
            <div className="mt-4 smallcaps">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BankruptcyFaq() {
  const items = [
    { q: "Сохраню ли я единственное жильё?", a: "Да, по общему правилу единственное жильё неприкосновенно. Стратегия защиты разрабатывается до подачи заявления." },
    { q: "Сохраняется ли ипотека?", a: "Да, сохраняем. Все индивидуально, но есть возможность списания с сохранением жилья и платежами. Остальное списывается." },
    { q: "Какие долги списываются?", a: "Кредиты банков, микрозаймы, задолженности перед физлицами, часть налоговых долгов и штрафов. Не списываются алименты, возмещение вреда жизни и здоровью, субсидиарная ответственность." },
    { q: "Сколько длится процедура?", a: "Реализация имущества — от 6 месяцев. Реструктуризация — до 3 лет. Конкретный срок зависит от состава долгов и имущества." },
    { q: "Можно ли работать после банкротства?", a: "Да. Ограничения касаются только руководящих должностей в финансовых организациях в течение определённого срока. Обычная работа и предпринимательство — без ограничений." },
    { q: "Когда можно снова брать кредиты?", a: "Сразу после завершения процедуры. Восстановление кредитной истории — отдельный сервис нашей команды." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section variant="default" id="faq">
      <SectionLabel n="07" title="Вопросы и ответы" />
      <H2 className="mt-8 max-w-3xl">
        Частые <span className="text-cyan italic">вопросы</span>
      </H2>
      <ul className="mt-12 max-w-4xl space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <li
              key={it.q}
              className="card-lux relative overflow-hidden transition-all duration-500"
              style={isOpen ? {
                borderColor: "color-mix(in oklab, var(--gold-heading) 70%, transparent)",
                boxShadow:
                  "0 0 0 1px color-mix(in oklab, var(--gold-heading) 45%, transparent), 0 18px 40px -20px color-mix(in oklab, #6a2735 50%, transparent)",
              } : undefined}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
              >
                <span
                  className="font-display text-lg md:text-xl leading-snug transition-colors duration-500"
                  style={{ color: isOpen ? "var(--gold-heading)" : "var(--gold-heading-deep)" }}
                >
                  {it.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 transition-all duration-500 ${
                    isOpen ? "rotate-[135deg] scale-110" : ""
                  }`}
                  style={{
                    color: "var(--gold-heading-deep)",
                    filter: isOpen ? "drop-shadow(0 0 8px var(--gold-heading))" : undefined,
                  }}
                />
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p
                    className={`px-7 pb-6 text-base md:text-lg leading-relaxed transition-all duration-700 ${
                      isOpen
                        ? "translate-y-0 opacity-100 blur-0"
                        : "-translate-y-2 opacity-0 blur-sm"
                    }`}
                  >
                    {it.a}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function BankruptcyCTA() {
  return (
    <section className="relative overflow-hidden bg-aurora py-28 md:py-36">
      <ParticleField density={40} />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full opacity-30 animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 30%, transparent), transparent)",
        }}
      />
      <div className="container-tight relative text-center">
        <h2 className="font-display uppercase text-3xl md:text-5xl lg:text-[4rem] leading-[1.02] tracking-[-0.03em] max-w-6xl mx-auto text-silver">
          ПОЛУЧИТЕ РАЗБОР <br />
          <span className="text-gradient-cyan text-glow">ВАШЕЙ КОНКРЕТНОЙ СИТУАЦИИ</span>
        </h2>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LeadFormDialog
            source="bankruptcy-final"
            headline="Консультация по банкротству"
            trigger={
              <button type="button" className="btn-cyan group rounded-sm text-lg px-8 py-5">
                <span>Получить консультацию</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            }
          />
          <a
            href="https://t.me/status_svobody_bot"
            target="_blank"
            rel="noopener"
            className="btn-ghost rounded-sm text-lg px-8 py-5"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}