import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Copy, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2 } from "@/components/site/Section";
import portrait from "@/assets/armina-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Юлия Армина — финансовый управляющий, банкротство физлиц в Москве" },
      {
        name: "description",
        content:
          "Прямой арбитражный управляющий, не посредник. 888 млн ₽ списанных долгов, 323 дела с 2020 года. Банкротство по 127-ФЗ и восстановление кредитной истории.",
      },
      { property: "og:title", content: "Юлия Армина — финансовый управляющий" },
      {
        property: "og:description",
        content:
          "Честно о деньгах, долгах и финансовой свободе. Банкротство физлиц по 127-ФЗ и восстановление кредитной истории после процедуры.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <BigNumber />
      <Audience />
      <CompareAU />
      <Process />
      <Intensive />
      <CreditHistory />
      <FAQ />
    </SiteLayout>
  );
}

/* ─────────── HERO ─────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      {/* Decorative cream side */}
      <div className="absolute inset-y-0 right-0 hidden lg:block lg:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-deep" />
      </div>

      <div className="container-tight relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="reveal lg:col-span-7 flex flex-col justify-center">
          <Eyebrow>
            Финансовый управляющий · СРО «Созидание» · Реестр № 20068
          </Eyebrow>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Юлия Армина
          </h1>
          <p className="mt-5 max-w-xl font-serif text-xl text-cream/85 md:text-2xl">
            Честно о деньгах, долгах и&nbsp;финансовой свободе.
          </p>

          <ul className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
            <Stat value="888 000 000 ₽" label="списанных долгов с 2020 года" />
            <Stat value="323" label="завершённых дела по 127-ФЗ" />
            <Stat
              value="Прямой АУ"
              label="не юридический посредник — личная ответственность по СРО"
            />
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-6 text-sm font-medium text-navy shadow-sm transition-colors hover:bg-gold-hover"
            >
              Бесплатный интенсив «Статус свободы»
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contacts"
              className="inline-flex h-12 items-center rounded-md border border-cream/25 px-6 text-sm font-medium text-cream transition-colors hover:bg-cream/5"
            >
              Связаться лично
            </Link>
          </div>
        </div>

        <div className="reveal lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-sm border border-gold/30" />
            <img
              src={portrait}
              alt="Юлия Армина, финансовый управляющий"
              className="aspect-square w-full object-cover object-top grayscale-[0.05]"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 bg-navy/80 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-cream/80 backdrop-blur-sm">
              Москва · Цветной бульвар, 13
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <li className="flex flex-col gap-1 py-4 md:flex-row md:items-baseline md:gap-6">
      <div className="font-serif text-2xl text-gold tabular md:w-72">{value}</div>
      <div className="text-sm text-cream/75">{label}</div>
    </li>
  );
}

/* ─────────── TRUST BAR ─────────── */
function TrustBar() {
  const items = [
    {
      label: "Реестр ЕФРСБ",
      value: "АУ № 20068",
      sub: "от 17.11.2020",
      href: "https://fedresurs.ru/",
      cta: "Открыть",
    },
    {
      label: "СРО",
      value: "«Созидание»",
      sub: "Союз арбитражных управляющих",
      href: "https://sozidanie-sro.ru/",
      cta: "Карточка",
    },
    {
      label: "ИНН",
      value: "312300900561",
      sub: "ИП Армина Юлия Юрьевна",
      copy: "312300900561",
    },
    {
      label: "ОГРНИП",
      value: "324774600450864",
      sub: "Свидетельство о регистрации",
      copy: "324774600450864",
    },
  ];
  return (
    <Section variant="cream" className="border-y border-border">
      <div className="flex items-end justify-between gap-6">
        <div>
          <Eyebrow>Прозрачность</Eyebrow>
          <H2 className="mt-3 max-w-2xl">Все данные открыты и&nbsp;проверяемы</H2>
        </div>
        <ShieldCheck className="hidden h-8 w-8 text-gold md:block" />
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="bg-card p-6">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {it.label}
            </div>
            <div className="mt-3 font-serif text-2xl tabular text-navy">{it.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{it.sub}</div>
            {it.href && (
              <a
                href={it.href}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-hover"
              >
                {it.cta} <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {it.copy && (
              <button
                onClick={() => navigator.clipboard?.writeText(it.copy!)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-hover"
              >
                Скопировать <Copy className="h-3 w-3" />
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
        Любую цифру на этом сайте можно проверить в открытых государственных реестрах.
        Ссылки рядом с каждым показателем.
      </p>
    </Section>
  );
}

/* ─────────── BIG NUMBER ─────────── */
function BigNumber() {
  return (
    <section className="bg-navy text-cream">
      <div className="container-tight py-24 md:py-36 text-center">
        <Eyebrow>Главная цифра</Eyebrow>
        <div className="mt-6 font-serif text-[clamp(3rem,12vw,9rem)] leading-none tracking-tight text-gold tabular">
          888&thinsp;000&thinsp;000&nbsp;₽
        </div>
        <p className="mt-6 font-serif text-2xl text-cream md:text-3xl">
          списано долгов клиентов с 2020 года
        </p>
        <p className="mx-auto mt-6 max-w-xl text-sm text-cream/65">
          Каждое дело завершено решением арбитражного суда.{" "}
          <a
            href="https://fedresurs.ru/"
            target="_blank"
            rel="noopener"
            className="border-b border-gold/40 text-gold hover:border-gold"
          >
            Публичные отчёты в ЕФРСБ
          </a>{" "}
          — последний пример: сообщение №1900946 от 22.04.2026.
        </p>
      </div>
    </section>
  );
}

/* ─────────── AUDIENCE ─────────── */
function Audience() {
  const items = [
    {
      title: "Долг от 500 000 ₽, нечем платить",
      text: "Кредиты, микрозаймы, поручительство — когда платежи стали больше дохода и просрочки уже несколько месяцев.",
    },
    {
      title: "Звонят коллекторы и приставы",
      text: "Списания со счетов, арест карт, давление на родственников. Всё это останавливается с момента введения процедуры.",
    },
    {
      title: "ИП с долгами перед налоговой",
      text: "Доначисления, дробление бизнеса, субсидиарка. Нужна тонкая работа — расскажу, что реально, а что нет.",
    },
    {
      title: "Уже банкрот, нужна кредитная история",
      text: "Прошли процедуру, но банки отказывают. Помогу выстроить путь восстановления КИ за 1,5–3 года.",
    },
  ];
  return (
    <Section variant="cream">
      <Eyebrow>Кому я помогаю</Eyebrow>
      <H2 className="mt-3 max-w-3xl">К&nbsp;кому я обращаюсь</H2>

      <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {items.map((it, i) => (
          <div key={it.title} className="group bg-card p-8 transition-colors hover:bg-cream-warm">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-sm text-gold tabular">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl text-navy">{it.title}</h3>
            </div>
            <p className="mt-3 pl-9 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────── COMPARE ─────────── */
function CompareAU() {
  const rows: [string, string][] = [
    ["Посредник между вами и судом", "Сама веду дело в суде"],
    ["Нанимает АУ со стороны", "Личная ответственность по СРО"],
    ["Агентские наценки в стоимости", "Работаете напрямую, без надбавок"],
    ["Менеджер ≠ ваш юрист", "Один человек ведёт всё дело"],
    ["Видит процедуру «снаружи»", "Знаю систему изнутри 5+ лет"],
  ];
  return (
    <Section variant="navy">
      <Eyebrow>Главное возражение</Eyebrow>
      <H2 className="mt-3 max-w-4xl text-cream">
        Почему лучше работать напрямую с&nbsp;арбитражным управляющим
      </H2>

      <div className="mt-12 overflow-hidden rounded-md border border-cream/10">
        <div className="grid grid-cols-2 bg-cream/5 text-xs uppercase tracking-[0.18em] text-cream/60">
          <div className="border-r border-cream/10 p-4">Юридическая компания</div>
          <div className="p-4 text-gold">Арбитражный управляющий (я)</div>
        </div>
        {rows.map(([a, b], i) => (
          <div
            key={i}
            className="grid grid-cols-2 border-t border-cream/10 text-sm md:text-base"
          >
            <div className="border-r border-cream/10 p-5 text-cream/65">{a}</div>
            <div className="p-5 text-cream">
              <div className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                <span>{b}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-3xl font-serif text-lg text-cream/80 italic">
        «Юридическая фирма продаёт вам услугу. Я — несу за неё имущественную
        ответственность через&nbsp;СРО. Это разные уровни вовлечённости и&nbsp;разная цена
        ошибки.»
      </p>
    </Section>
  );
}

/* ─────────── PROCESS ─────────── */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Анализ ситуации",
      time: "1–2 дня · бесплатно",
      text: "Смотрю долги, имущество, доход. Говорю честно — подходит банкротство или нет.",
    },
    {
      n: "02",
      title: "Подготовка заявления",
      time: "2–4 недели",
      text: "Сбор документов, расчёт задолженности, выбор стратегии: реализация или реструктуризация.",
    },
    {
      n: "03",
      title: "Введение процедуры",
      time: "1–3 месяца от подачи",
      text: "Суд назначает финансового управляющего. С этого момента приставы и коллекторы по закону прекращают давление.",
    },
    {
      n: "04",
      title: "Реализация имущества или план",
      time: "6–9 месяцев",
      text: "Защищаем единственное жильё и личные вещи. Не всё, что вам сказали в банке — правда.",
    },
    {
      n: "05",
      title: "Списание долгов",
      time: "Финальный этап",
      text: "Решение суда. Долг закрыт. Сведения публикуются в ЕФРСБ. Можно начинать восстановление КИ.",
    },
  ];
  return (
    <Section variant="cream">
      <Eyebrow>Процедура</Eyebrow>
      <H2 className="mt-3 max-w-3xl">
        Путь к&nbsp;финансовой свободе — 5&nbsp;этапов по&nbsp;127-ФЗ
      </H2>

      <div className="mt-14 space-y-px overflow-hidden rounded-md border border-border bg-border">
        {steps.map((s) => (
          <div
            key={s.n}
            className="grid gap-4 bg-card p-6 md:grid-cols-12 md:gap-8 md:p-8"
          >
            <div className="md:col-span-2">
              <div className="font-serif text-4xl text-gold tabular">{s.n}</div>
            </div>
            <div className="md:col-span-7">
              <h3 className="font-serif text-xl text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
            <div className="md:col-span-3 text-xs uppercase tracking-[0.16em] text-muted-foreground md:text-right">
              {s.time}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Средняя процедура — 8–11 месяцев. Сроки зависят от объёма имущества и количества
        кредиторов.
      </p>
    </Section>
  );
}

/* ─────────── INTENSIVE CTA ─────────── */
function Intensive() {
  const items = [
    "Пошаговый план списания долгов по 127-ФЗ — простыми словами",
    "Как законно сохранить единственное жильё и личные вещи",
    "Что делать со звонками коллекторов и приставов прямо сейчас",
    "Чек-лист: подходит ли вам банкротство (3 минуты)",
  ];
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-tight relative grid gap-12 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Eyebrow>Бесплатно · 5 уроков · полностью в Telegram</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-6xl">
            Интенсив <span className="text-gold">«Статус свободы»</span>
          </h2>
          <p className="mt-6 max-w-lg font-serif text-xl text-cream/85">
            Разберётесь, подходит ли вам банкротство — без звонков и&nbsp;навязывания.
          </p>

          <a
            href="https://t.me/status_svobody_bot"
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex h-14 items-center gap-3 rounded-md bg-gold px-8 text-base font-medium text-navy shadow-lg transition-colors hover:bg-gold-hover"
          >
            Запустить интенсив в Telegram
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-3 max-w-md text-xs text-cream/55">
            Никаких звонков менеджера. Никаких автодозвонов. Только бот и&nbsp;полезная
            информация.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-md border border-cream/15 bg-cream/[0.03] p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-cream/55">Что внутри</div>
            <ul className="mt-6 space-y-5">
              {items.map((t, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif text-sm text-gold tabular pt-1">
                    0{i + 1}
                  </span>
                  <span className="text-cream/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── CREDIT HISTORY ─────────── */
function CreditHistory() {
  return (
    <Section variant="cream">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Уникальная услуга</Eyebrow>
          <H2 className="mt-3">
            Жизнь после банкротства: восстановление кредитной истории
          </H2>
          <p className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
            Самый частый страх — «после банкротства мне больше никогда не дадут кредит».
            Это миф. Кредитная история восстанавливается. Вопрос только — насколько
            грамотно вы это сделаете.
          </p>
          <Link
            to="/services/credit-history"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-navy hover:text-gold"
          >
            Узнать подробнее <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {[
            {
              t: "Чистим записи",
              d: "После завершения процедуры в БКИ часто остаются некорректные записи — открытые долги, продолжающиеся проценты. Убираем их через официальные обращения.",
            },
            {
              t: "Выстраиваем кредитный рейтинг",
              d: "План на 1,5–3 года через малые финансовые инструменты — с конкретными шагами, не «общими советами».",
            },
            {
              t: "Готовим к крупным займам",
              d: "Цель — ипотека или автокредит через 2–3 года после списания. У моих клиентов это работает.",
            },
          ].map((it, i) => (
            <div
              key={i}
              className="flex gap-6 border-l-2 border-gold/40 bg-card p-6 hover:border-gold transition-colors"
            >
              <div className="font-serif text-3xl text-gold tabular shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── FAQ ─────────── */
function FAQ() {
  const qa = [
    {
      q: "Меня посадят за долги?",
      a: "Нет. Невозможность платить по гражданским долгам — не уголовное преступление. Уголовная ответственность возможна только за мошенничество или преднамеренное банкротство. В обычной процедуре банкротства физлица этого нет.",
    },
    {
      q: "Узнают ли о банкротстве на работе?",
      a: "Сведения публичны и есть в ЕФРСБ — теоретически их может найти любой. На практике работодатели редко проверяют. Уведомлять обязанности нет, кроме отдельных случаев (госслужба, руководящие должности в финсекторе).",
    },
    {
      q: "Могу ли я быть директором или ИП после банкротства?",
      a: "На время процедуры — нет. После завершения: 5 лет нельзя занимать руководящие должности в кредитных организациях, 3 года — в обычных компаниях, 5 лет — нельзя повторно банкротиться. ИП можно открыть через 5 лет.",
    },
    {
      q: "Сколько стоит банкротство?",
      a: "Обязательные расходы: госпошлина 300 ₽, вознаграждение АУ 25 000 ₽ за процедуру, публикации в ЕФРСБ и «Коммерсанте» (15–20 тыс.₽). Моё сопровождение — обсуждается индивидуально. Никаких «доп.расходов в процессе» — всё фиксируется в договоре до старта.",
    },
    {
      q: "У меня единственная квартира, её заберут?",
      a: "Нет, если она не в ипотеке и не куплена за счёт средств, которые суд может оспорить. Единственное жильё защищено ст. 446 ГПК РФ. Исключение: ипотечная квартира — её банк имеет право реализовать.",
    },
    {
      q: "Правда ли, что после банкротства не дают кредиты?",
      a: "Первые 1–2 года — действительно сложно. Но кредитная история восстанавливается. У моих клиентов через 2–3 года после списания получалось получить ипотеку и автокредит.",
    },
    {
      q: "Сколько длится процедура?",
      a: "В среднем 8–11 месяцев. Простое дело — 6 месяцев, сложное — до 1,5 лет.",
    },
    {
      q: "Что отличает АУ от юридической компании?",
      a: "Юр.компания — посредник: подаёт заявление, нанимает АУ со стороны. АУ — лицо, назначенное судом, ведущее процедуру и несущее личную имущественную ответственность через СРО.",
    },
  ];
  return (
    <Section variant="cream" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <H2 className="mt-3">Частые вопросы</H2>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Если ответа нет — задайте свой в Telegram-боте или по телефону. Отвечаю
            лично.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {qa.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-serif text-lg text-navy md:text-xl">{item.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
