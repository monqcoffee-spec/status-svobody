import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileSearch, FileText, Handshake, Sparkles, ShieldCheck, Scale, Database, Gavel, Shield, Banknote, HeartHandshake, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import particlesRise from "@/assets/particles-rise.jpg";

export const Route = createFileRoute("/services/credit-history")({
  head: () => ({
    meta: [
      { title: "Юридическое восстановление кредитной истории — STATUS SVOBODY" },
      {
        name: "description",
        content:
          "Исправляем кредитную историю и формируем безупречную финансовую репутацию: аудит Цифрового профиля, оспаривание ошибок в БКИ по 218-ФЗ, сопровождение командой финансового поверенного Юлии Арминой.",
      },
      { property: "og:title", content: "Юридическое восстановление кредитной истории — STATUS SVOBODY" },
      {
        property: "og:description",
        content:
          "Цифровой профиль, кредитная история, ФССП, банкротство — приводим финансовую репутацию в порядок. Команда финансового поверенного Юлии Арминой.",
      },
      { name: "twitter:title", content: "Юридическое восстановление кредитной истории — STATUS SVOBODY" },
      {
        name: "twitter:description",
        content:
          "Исправляем кредитную историю и формируем безупречную финансовую репутацию.",
      },
    ],
  }),
  component: CreditPage,
});

function CreditPage() {
  const profile = [
    "Данные из кредитных бюро — кредитная история во всех трёх БКИ",
    "Информация о судебных взысканиях (ФССП)",
    "Сведения о банкротстве и арбитражных процедурах",
    "Иные финансовые индикаторы и скоринговые маркеры",
  ];

  const pillars = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      t: "Защита",
      d: "Конфиденциальность по умолчанию. Защищённые каналы связи, NDA, ограниченный круг доступа к вашим данным.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      t: "Результат",
      d: "Не процесс ради процесса — измеримый итог. Каждый кейс закрывается определённым решением.",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      t: "Команда",
      d: "Юлия Армина и юристы под её руководством. Личное участие основателя в стратегии — без передачи дела на конвейер.",
    },
  ];

  const steps = [
    {
      icon: <FileSearch className="h-7 w-7" />,
      t: "Аудит кредитной истории",
      d: "Запрашиваем отчёты во всех трёх БКИ, выявляем неточности, ошибки и некорректные данные в вашем Цифровом профиле.",
    },
    {
      icon: <FileText className="h-7 w-7" />,
      t: "Заключение",
      d: "Готовим пошаговый план-рекомендации по исправлению: что оспаривать, какие документы собрать, в каком порядке действовать.",
    },
    {
      icon: <Handshake className="h-7 w-7" />,
      t: "Сопровождение",
      d: "Подготовка документов, переговоры с кредиторами и БКИ, представительство в судебных и досудебных процедурах.",
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      t: "Идеальная финансовая репутация",
      d: "Чистая кредитная история, одобрение ипотеки, кредитов и выгодных условий — фундамент будущего без ограничений.",
    },
  ];

  return (
    <SiteLayout>
      <section className="relative -mt-20 overflow-hidden bg-aurora pt-32 pb-20 md:pt-40 md:pb-28">
        <ParticleField density={50} />
        <img
          src={particlesRise}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
          style={{ maskImage: "radial-gradient(ellipse 80% 80% at 70% 60%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 60%, black, transparent 80%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
        <div className="container-tight relative">
          <Eyebrow>Услуга 02 · флагманский продукт</Eyebrow>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,7.5vw,6rem)] text-gradient-cyan text-glow">
            Исправляем кредитную историю — создаём будущее без ограничений
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-silver/85">
            Решение сложных ситуаций. Доверие клиентов.
            Поддержка на каждом шагу.
          </p>
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-silver/70">
            Деньги имеют цифровой код, который считывают банки, работодатели
            и партнёры. Пусть ваша
            <span className="text-cyan"> финансовая репутация </span>
            будет безупречной.
          </p>
        </div>
      </section>

      {/* ───── Цифровой профиль ───── */}
      <Section variant="default">
        <SectionLabel n="01" title="Цифровой профиль" />
        <H2 className="mt-8 max-w-3xl">
          Что входит в ваш <span className="text-cyan italic">Цифровой профиль</span>
        </H2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-silver/75">
          Цифровой профиль — совокупность всех финансовых следов, по которым
          о вас судят банки, работодатели и партнёры.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {profile.map((p, i) => (
            <div
              key={i}
              className="flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-colors hover:border-cyan/40"
              style={{ borderRadius: "2px" }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan/30 text-cyan" style={{ borderRadius: "2px" }}>
                <Database className="h-5 w-5" />
              </div>
              <p className="text-base md:text-lg leading-relaxed text-silver/85 pt-1.5">{p}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 border-l-2 border-cyan/60 bg-cyan/5 px-7 py-6"
          style={{ borderRadius: "2px" }}
        >
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

      {/* ───── Принципы работы ───── */}
      <Section variant="darker">
        <SectionLabel n="02" title="Принципы" />
        <H2 className="mt-8 max-w-3xl">
          Три опоры <span className="text-cyan italic">премиального сопровождения</span>
        </H2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.t}
              className="group border border-white/8 bg-ink-soft/60 p-8 transition-all hover:border-cyan/40"
              style={{ borderRadius: "2px" }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-cyan/30 text-cyan transition-all group-hover:border-cyan group-hover:shadow-[0_0_20px_color-mix(in_oklab,var(--cyan)_40%,transparent)]" style={{ borderRadius: "2px" }}>
                {p.icon}
              </div>
              <h3 className="mt-6 font-display text-xl md:text-2xl text-silver">{p.t}</h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───── Как мы работаем ───── */}
      <Section variant="default">
        <SectionLabel n="03" title="Как мы работаем" />
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

      {/* ───── Услуги ───── */}
      <Section variant="darker">
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
          {[
            {
              icon: <FileText className="h-6 w-6" />,
              t: "Оспаривание данных в БКИ",
              d: "Оспариваем ошибки, ложные записи и незаконные долги в кредитной истории. Срок — до 30 дней. Повышаем кредитный рейтинг.",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              t: "Восстановление КИ после банкротства",
              d: "Исправляем ошибки и не закрытые после банкротства кредитные договоры. Полностью восстанавливаем кредитную историю.",
            },
            {
              icon: <HeartHandshake className="h-6 w-6" />,
              t: "Помощь в списании долгов участникам СВО",
              d: "Закон № 377-ФЗ допускает списание долгов участников СВО при гибели или инвалидности I группы. Аналогичное право — у членов семьи.",
            },
            {
              icon: <Gavel className="h-6 w-6" />,
              t: "Снятие арестов ФССП",
              d: "Снимаем аресты на счета и имущество, закрываем исполнительные производства, удаляем недостоверную информацию.",
            },
            {
              icon: <Banknote className="h-6 w-6" />,
              t: "Выкуп долгов у коллекторов",
              d: "Помогаем выкупить долги у коллекторов с дисконтом до 90% и прекращаем преследование.",
            },
            {
              icon: <Shield className="h-6 w-6" />,
              t: "Полный спектр сопровождения",
              d: "От первой консультации до закрытия дела — единая точка ответственности и прозрачный план.",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="flex gap-5 border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40"
              style={{ borderRadius: "2px" }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan/30 text-cyan"
                style={{ borderRadius: "2px" }}
              >
                {s.icon}
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl text-silver leading-snug">
                  {s.t}
                </h3>
                <p className="mt-2 text-base md:text-lg leading-relaxed text-silver-dim">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ───── Практика ───── */}
      <Section variant="default">
        <SectionLabel n="05" title="Из практики" />
        <H2 className="mt-8 max-w-3xl">
          Свежие дела команды{" "}
          <span className="text-cyan italic">STATUS SVOBODY</span>
        </H2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              date: "15.03.2026",
              t: "Оспаривание данных в БКИ",
              d: "Подаём заявления и жалобы в БКИ на недостоверные данные, ошибочные записи о просрочках и незаконные кредитные договоры. В 99% случаев данные удаляются или исправляются.",
              author: "Александр Волков",
            },
            {
              date: "22.03.2026",
              t: "Восстановление КИ после банкротства",
              d: "Банки часто игнорируют решение суда и оставляют долги открытыми. Добиваемся полного обнуления данных в БКИ и восстанавливаем кредитную историю.",
              author: "Елена Морозова",
            },
            {
              date: "08.04.2026",
              t: "Снятие арестов по ФССП",
              d: "Аресты остаются даже после окончания исполнительного производства. Подаём заявления в ФССП, снимаем аресты и удаляем недостоверную информацию.",
              author: "Дмитрий Сидоров",
            },
          ].map((n) => (
            <article
              key={n.t}
              className="flex flex-col border border-white/8 bg-ink-soft/60 p-7 transition-all hover:border-cyan/40"
              style={{ borderRadius: "2px" }}
            >
              <time className="font-display text-xs tabular tracking-[0.22em] text-cyan-glow uppercase">
                {n.date}
              </time>
              <h3 className="mt-3 font-display text-xl md:text-2xl text-silver leading-snug">
                {n.t}
              </h3>
              <p className="mt-3 flex-1 text-base md:text-lg leading-relaxed text-silver-dim">
                {n.d}
              </p>
              <div className="mt-6 pt-4 border-t border-white/8 smallcaps text-cyan">
                {n.author}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ───── Тарифы ───── */}
      <Section variant="darker">
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
          {[
            {
              t: "Анализ кредитной истории",
              sub: "Пошаговый план для самостоятельного исправления КИ",
              price: "5 000 ₽",
              meta: "Включает 1 консультацию",
              features: [
                "Аудит отчётов в трёх БКИ",
                "Письменное заключение",
                "План действий",
              ],
              highlight: false,
            },
            {
              t: "Премиум",
              sub: "Оспаривание до 5 записей + работа с коллекторами и банками",
              price: "от 35 000 ₽",
              meta: "Включает 3 консультации",
              features: [
                "До 5 оспариваний в БКИ",
                "Переговоры с банками и коллекторами",
                "Сопровождение юриста",
              ],
              highlight: true,
            },
            {
              t: "Платинум — комплексный подход",
              sub: "Полное восстановление: БКИ, ФССП, банкротство, выкуп долгов",
              price: "от 65 000 ₽",
              meta: "5 консультаций · сопровождение 6 месяцев",
              features: [
                "Все направления под одним юристом",
                "Снятие арестов ФССП",
                "Выкуп долгов с дисконтом",
                "Контроль исполнения решений",
              ],
              highlight: false,
            },
          ].map((p) => (
            <div
              key={p.t}
              className={`relative flex flex-col border bg-ink-soft/60 p-8 transition-all ${
                p.highlight
                  ? "border-cyan/60"
                  : "border-white/8 hover:border-cyan/40"
              }`}
              style={{
                borderRadius: "2px",
                boxShadow: p.highlight
                  ? "0 0 32px color-mix(in oklab, var(--cyan) 22%, transparent)"
                  : undefined,
              }}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-8 bg-cyan text-ink-deep px-3 py-1 smallcaps text-xs">
                  Популярный
                </div>
              )}
              <h3 className="font-display text-2xl md:text-3xl text-silver leading-snug">
                {p.t}
              </h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-silver-dim">
                {p.sub}
              </p>
              <div className="mt-6 font-display text-3xl md:text-4xl text-gradient-cyan">
                {p.price}
              </div>
              <div className="mt-2 smallcaps text-cyan">{p.meta}</div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 text-base md:text-lg text-silver/85"
                  >
                    <Check className="h-5 w-5 shrink-0 text-cyan mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <LeadFormDialog
                source={`pricing-${p.t}`}
                headline={`Тариф · ${p.t}`}
                trigger={
                  <button
                    type="button"
                    className={`mt-8 ${p.highlight ? "btn-cyan" : "btn-ghost"} rounded-sm`}
                  >
                    Оставить заявку
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </Section>

      <Section variant="glow">
        <div className="text-center">
          <H2 className="max-w-3xl mx-auto">
            Идеальная <span className="text-cyan italic text-glow">финансовая репутация</span>
          </H2>
          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-silver/80">
            Чистая кредитная история, одобрение ипотеки и кредита,
            доверие банков, работодателей и партнёров. Начните с разбора
            вашего Цифрового профиля.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan rounded-sm">
              Разбор моей КИ — записаться <ArrowRight className="h-4 w-4" />
            </a>
            <LeadFormDialog
              source="credit-history"
              headline="Запись на разбор кредитной истории"
              trigger={
                <button type="button" className="btn-ghost rounded-sm">Оставить заявку</button>
              }
            />
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
