import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Copy } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Monogram } from "@/components/site/Monogram";
import portrait from "@/assets/armina-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Юлия Армина — финансовый управляющий, банкротство физлиц" },
      {
        name: "description",
        content:
          "Прямой арбитражный управляющий, не посредник. 888 млн ₽ списанных долгов, 323 дела с 2020 года. Банкротство по 127-ФЗ и восстановление кредитной истории.",
      },
      { property: "og:title", content: "Юлия Армина — финансовый управляющий" },
      {
        property: "og:description",
        content:
          "Честно о деньгах, долгах и финансовой свободе. Банкротство физлиц по 127-ФЗ.",
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
      <Trust />
      <Manifesto />
      <BigNumber />
      <Audience />
      <Compare />
      <Process />
      <Intensive />
      <Credit />
      <FAQ />
    </SiteLayout>
  );
}

/* ────────────────── HERO ────────────────── */
function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden navy-texture pt-28 text-cream">
      {/* Decorative gold corner frame */}
      <div className="pointer-events-none absolute inset-x-6 top-24 bottom-6 hidden border border-gold/15 lg:block" />
      <div className="pointer-events-none absolute left-10 top-28 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 border-l border-t border-gold lg:block" />
      <div className="pointer-events-none absolute right-10 top-28 hidden h-3 w-3 translate-x-1/2 -translate-y-1/2 border-r border-t border-gold lg:block" />

      <div className="container-tight relative pt-10 pb-20 lg:pt-16 lg:pb-28">
        {/* Top eyebrow row */}
        <div className="mb-12 flex items-center justify-between gap-4 text-cream/70">
          <div className="flex items-center gap-3">
            <span className="gold-rule-tight" />
            <span className="smallcaps text-cream/60">Москва · с 2020</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="smallcaps text-cream/60">Реестр АУ № 20068</span>
            <span className="gold-rule-tight" />
          </div>
        </div>

        {/* Mobile-first: photo first, then text */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Photo column */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* outer frame */}
              <div className="absolute -inset-3 border border-gold/30" />
              <div className="absolute -inset-3 border border-gold/30" style={{ transform: "translate(10px,10px)", opacity: 0.3 }} />
              <img
                src={portrait}
                alt="Юлия Армина — финансовый управляющий"
                className="relative aspect-[4/5] w-full object-cover object-top"
                loading="eager"
              />
              {/* Gold accent label on image */}
              <div className="absolute -bottom-4 -right-4 hidden bg-cream px-5 py-3 text-navy shadow-xl md:block">
                <div className="smallcaps text-[9px] text-gold">СРО</div>
                <div className="font-serif text-base">«Созидание»</div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
            <div className="smallcaps text-gold">Финансовый управляющий</div>
            <h1 className="display mt-6 text-[clamp(3rem,11vw,7.5rem)] text-cream">
              Юлия<br />
              <span className="italic-serif text-gold/90">Армина</span>
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <span className="gold-rule-tight" />
              <p className="italic-serif text-lg text-cream/85 md:text-xl">
                Честно о&nbsp;деньгах, долгах и&nbsp;финансовой свободе
              </p>
            </div>

            {/* Hero CTA */}
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="group inline-flex h-14 items-center justify-between gap-4 border border-gold bg-gold px-6 text-navy transition-colors hover:bg-gold-hover hover:border-gold-hover"
              >
                <span className="smallcaps">Бесплатный интенсив</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/contacts"
                className="group inline-flex h-14 items-center justify-between gap-4 border border-cream/25 px-6 text-cream transition-colors hover:border-gold"
              >
                <span className="smallcaps">Связаться лично</span>
                <ArrowUpRight className="h-5 w-5 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero footer regalia */}
        <div className="mt-20 grid grid-cols-2 gap-px border-y border-cream/10 bg-cream/5 md:mt-24 md:grid-cols-4">
          {[
            { v: "888 млн ₽", l: "Списано долгов" },
            { v: "323", l: "Дела с 2020 года" },
            { v: "50", l: "Активных дел сейчас" },
            { v: "5 лет", l: "В реестре АУ" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-navy/40 px-5 py-6 text-center md:px-6 md:py-8 md:text-left"
            >
              <div className="font-serif text-2xl text-gold tabular md:text-3xl">{s.v}</div>
              <div className="smallcaps mt-2 text-[10px] text-cream/55">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── MARQUEE (regalia strip) ────────────────── */
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
    <section className="overflow-hidden border-y border-border bg-cream-warm py-5">
      <div className="marquee flex w-max items-center gap-12 whitespace-nowrap">
        {repeated.map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="smallcaps text-navy/60">{t}</span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────── TRUST (registry cards) ────────────────── */
function Trust() {
  const items = [
    { label: "Реестр ЕФРСБ", value: "АУ № 20068", sub: "от 17.11.2020", href: "https://fedresurs.ru/" },
    { label: "СРО", value: "«Созидание»", sub: "Союз АУ", href: "https://sozidanie-sro.ru/" },
    { label: "ИНН", value: "312300900561", sub: "ИП Армина Ю. Ю.", copy: "312300900561" },
    { label: "ОГРНИП", value: "324774600450864", sub: "Свидетельство ИП", copy: "324774600450864" },
  ];
  return (
    <section className="cream-texture py-24 md:py-32">
      <div className="container-tight">
        <SectionLabel n="01" title="Прозрачность" />
        <h2 className="display mt-8 max-w-3xl text-4xl text-navy md:text-6xl">
          Все данные открыты <br />
          и&nbsp;<span className="italic-serif text-gold">проверяемы</span>
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">
          Каждую цифру с&nbsp;этого сайта можно сверить в&nbsp;государственных реестрах.
          Это не маркетинг — это юридический факт.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="group relative bg-card p-7 transition-colors hover:bg-cream-warm">
              <div className="absolute inset-x-7 top-0 h-px bg-gold/0 transition-colors group-hover:bg-gold" />
              <div className="smallcaps text-[10px] text-muted-foreground">{it.label}</div>
              <div className="mt-4 font-serif text-2xl tabular text-navy md:text-3xl">
                {it.value}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{it.sub}</div>
              {it.href ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs text-gold link-gold"
                >
                  Открыть реестр
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : (
                <button
                  onClick={() => navigator.clipboard?.writeText(it.copy!)}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs text-gold link-gold"
                >
                  Скопировать
                  <Copy className="h-3 w-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── MANIFESTO ────────────────── */
function Manifesto() {
  return (
    <section className="bg-cream-warm py-24 md:py-32">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <SectionLabel n="02" title="Принцип" />
        </div>
        <div className="lg:col-span-9">
          <p className="dropcap font-serif text-2xl leading-[1.4] text-navy md:text-3xl md:leading-[1.45]">
            Юридическая фирма продаёт вам услугу. Я несу за&nbsp;неё имущественную
            ответственность через&nbsp;СРО — это разные уровни вовлечённости
            и&nbsp;разная цена ошибки. Когда вы&nbsp;приходите ко&nbsp;мне, мы&nbsp;работаем
            напрямую: я&nbsp;лично веду ваше дело в&nbsp;арбитражном суде от&nbsp;первой
            консультации до&nbsp;решения о&nbsp;списании.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Monogram className="h-8 w-8 text-gold" />
            <div>
              <div className="font-serif text-lg text-navy">Юлия Армина</div>
              <div className="smallcaps text-[10px] text-muted-foreground">Арбитражный управляющий</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── BIG NUMBER ────────────────── */
function BigNumber() {
  return (
    <section className="navy-texture py-32 text-cream md:py-40">
      <div className="container-tight text-center">
        <SectionLabel n="03" title="Главная цифра" theme="dark" align="center" />

        <div className="relative mt-12">
          <div className="absolute inset-x-0 top-1/2 -z-10 hidden h-px -translate-y-1/2 bg-gold/20 md:block" />
          <div className="display inline-block bg-navy px-6 text-[clamp(3.5rem,16vw,12rem)] tabular text-gold md:px-12">
            <span className="italic-serif font-light">8</span>88<span className="italic-serif font-light">,0</span>
          </div>
          <div className="mt-2 smallcaps text-cream/60">миллиардов ₽? — нет, миллионов</div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl font-serif text-2xl text-cream md:text-3xl">
          восемьсот восемьдесят восемь миллионов рублей
        </p>
        <p className="mx-auto mt-4 max-w-md italic-serif text-cream/70">
          списано с&nbsp;долгов клиентов с&nbsp;2020 года
        </p>

        <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
          <span className="h-px flex-1 bg-cream/20" />
          <a
            href="https://fedresurs.ru/"
            target="_blank"
            rel="noopener"
            className="smallcaps text-cream/70 link-gold"
          >
            Подтверждено в ЕФРСБ →
          </a>
          <span className="h-px flex-1 bg-cream/20" />
        </div>
      </div>
    </section>
  );
}

/* ────────────────── AUDIENCE ────────────────── */
function Audience() {
  const items = [
    { t: "Долг от 500 000 ₽,\nнечем платить", d: "Кредиты, микрозаймы, поручительство — когда платежи стали больше дохода и просрочки уже несколько месяцев." },
    { t: "Звонят коллекторы\nи приставы", d: "Списания со счетов, арест карт, давление на родственников. Всё это останавливается с момента введения процедуры." },
    { t: "ИП с долгами\nперед налоговой", d: "Доначисления, дробление бизнеса, субсидиарка. Здесь нужна тонкая работа — расскажу, что реально, а что нет." },
    { t: "Уже банкрот, нужна\nкредитная история", d: "Прошли процедуру, но банки отказывают. Помогу выстроить путь восстановления КИ за 1,5–3 года." },
  ];
  return (
    <section className="cream-texture py-24 md:py-32">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel n="04" title="Кому я помогаю" />
            <h2 className="display mt-8 text-4xl text-navy md:text-6xl">
              К кому я <br />
              <span className="italic-serif text-gold">обращаюсь</span>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              Четыре типичные ситуации. Если вы узнаёте в одной из них себя — мы
              сможем поговорить предметно, не теряя времени.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-px border border-border bg-border sm:grid-cols-2">
            {items.map((it, i) => (
              <div key={i} className="group bg-card p-7 transition-all hover:bg-navy hover:text-cream">
                <div className="font-serif text-3xl text-gold tabular">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 whitespace-pre-line font-serif text-xl leading-tight text-navy group-hover:text-cream">
                  {it.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-cream/70">
                  {it.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── COMPARE ────────────────── */
function Compare() {
  const rows: [string, string][] = [
    ["Посредник между вами и судом", "Сама веду дело в суде"],
    ["Нанимает АУ со стороны", "Личная ответственность по СРО"],
    ["Агентские наценки в стоимости", "Работаете напрямую, без надбавок"],
    ["Менеджер ≠ ваш юрист", "Один человек ведёт всё дело"],
    ["Видит процедуру «снаружи»", "Знаю систему изнутри 5+ лет"],
  ];
  return (
    <section className="navy-texture py-24 text-cream md:py-32">
      <div className="container-tight">
        <SectionLabel n="05" title="Главное возражение" theme="dark" />
        <h2 className="display mt-8 max-w-4xl text-4xl text-cream md:text-6xl">
          Почему лучше работать <br />
          напрямую с&nbsp;<span className="italic-serif text-gold">арбитражным управляющим</span>
        </h2>

        <div className="mt-14 overflow-hidden border border-cream/15">
          <div className="grid grid-cols-2 border-b border-cream/15 bg-cream/[0.03]">
            <div className="border-r border-cream/15 p-5 md:p-7">
              <div className="smallcaps text-cream/55">Юридическая компания</div>
            </div>
            <div className="p-5 md:p-7">
              <div className="smallcaps text-gold">Арбитражный управляющий</div>
            </div>
          </div>
          {rows.map(([a, b], i) => (
            <div key={i} className="grid grid-cols-2 border-b border-cream/10 last:border-0">
              <div className="border-r border-cream/15 p-5 text-sm text-cream/55 md:p-7 md:text-base">
                <span className="text-cream/35 line-through decoration-gold/40 decoration-1">{a}</span>
              </div>
              <div className="p-5 md:p-7">
                <div className="flex items-start gap-3">
                  <span className="font-serif text-sm text-gold tabular pt-0.5">
                    0{i + 1}
                  </span>
                  <span className="text-sm text-cream md:text-base">{b}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── PROCESS ────────────────── */
function Process() {
  const steps = [
    { n: "I", t: "Анализ ситуации", time: "1–2 дня · бесплатно", d: "Смотрю долги, имущество, доход. Говорю честно — подходит банкротство или нет." },
    { n: "II", t: "Подготовка заявления", time: "2–4 недели", d: "Сбор документов, расчёт задолженности, выбор стратегии." },
    { n: "III", t: "Введение процедуры", time: "1–3 месяца", d: "Суд назначает финансового управляющего. Приставы и коллекторы прекращают давление." },
    { n: "IV", t: "Реализация или план", time: "6–9 месяцев", d: "Защищаем единственное жильё и личные вещи. Работаем по 127-ФЗ." },
    { n: "V", t: "Списание долгов", time: "Финал", d: "Решение суда. Долг закрыт. Сведения публикуются в ЕФРСБ." },
  ];
  return (
    <section className="cream-texture py-24 md:py-32">
      <div className="container-tight">
        <SectionLabel n="06" title="Процедура" />
        <h2 className="display mt-8 max-w-3xl text-4xl text-navy md:text-6xl">
          Путь к&nbsp;финансовой свободе
          <span className="italic-serif text-gold"> — пять этапов</span>
        </h2>

        <div className="mt-16 border-t border-border">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group grid gap-6 border-b border-border py-8 transition-colors hover:bg-cream-warm md:grid-cols-12 md:gap-10 md:py-10"
            >
              <div className="md:col-span-2">
                <div className="font-serif text-5xl italic font-light text-gold tabular md:text-6xl">
                  {s.n}
                </div>
              </div>
              <div className="md:col-span-7">
                <h3 className="font-serif text-2xl text-navy md:text-3xl">{s.t}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.d}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <div className="smallcaps text-muted-foreground">{s.time}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 italic-serif text-base text-muted-foreground md:text-lg">
          Средняя процедура — 8–11&nbsp;месяцев. Сроки зависят от&nbsp;объёма имущества
          и&nbsp;количества кредиторов.
        </p>
      </div>
    </section>
  );
}

/* ────────────────── INTENSIVE ────────────────── */
function Intensive() {
  const items = [
    "Пошаговый план списания долгов по 127-ФЗ — простыми словами",
    "Как законно сохранить единственное жильё и личные вещи",
    "Что делать со звонками коллекторов и приставов прямо сейчас",
    "Чек-лист: подходит ли вам банкротство (3 минуты)",
  ];
  return (
    <section className="relative overflow-hidden navy-texture py-24 text-cream md:py-32">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionLabel n="07" title="Бесплатно · 5 уроков · Telegram" theme="dark" />
          <h2 className="display mt-8 text-4xl text-cream md:text-6xl">
            Интенсив <br />
            <span className="italic-serif text-gold">«Статус свободы»</span>
          </h2>
          <p className="mt-8 max-w-md italic-serif text-xl text-cream/85">
            Разберётесь, подходит&nbsp;ли вам банкротство — без&nbsp;звонков
            и&nbsp;навязывания.
          </p>

          <a
            href="https://t.me/status_svobody_bot"
            target="_blank"
            rel="noopener"
            className="group mt-10 inline-flex h-14 items-center justify-between gap-6 border border-gold bg-gold px-7 text-navy transition-colors hover:bg-gold-hover"
          >
            <span className="smallcaps">Запустить в Telegram</span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-4 max-w-sm text-xs text-cream/55">
            Никаких звонков менеджера. Никаких автодозвонов.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="border border-cream/15 bg-cream/[0.03] p-8 md:p-10">
            <div className="smallcaps text-gold">Программа</div>
            <ol className="mt-8 divide-y divide-cream/10">
              {items.map((t, i) => (
                <li key={i} className="grid grid-cols-12 gap-4 py-5">
                  <span className="col-span-2 font-serif text-2xl italic text-gold tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 text-cream/90">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── CREDIT HISTORY ────────────────── */
function Credit() {
  return (
    <section className="cream-texture py-24 md:py-32">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel n="08" title="Уникальная услуга" />
          <h2 className="display mt-8 text-4xl text-navy md:text-5xl">
            Жизнь после банкротства:<br />
            <span className="italic-serif text-gold">кредитная история</span>
          </h2>
          <p className="mt-8 max-w-md text-base text-muted-foreground">
            «После банкротства мне больше никогда не&nbsp;дадут кредит» — самый частый
            страх. Это миф. Кредитная история восстанавливается. Вопрос только —
            насколько грамотно вы&nbsp;это сделаете.
          </p>
          <Link
            to="/services/credit-history"
            className="mt-8 inline-flex items-center gap-2 link-gold smallcaps text-navy"
          >
            Подробнее об услуге
            <ArrowUpRight className="h-3 w-3 text-gold" />
          </Link>
        </div>

        <div className="lg:col-span-7 space-y-px border border-border bg-border">
          {[
            { t: "Чистим записи", d: "После завершения процедуры в БКИ часто остаются некорректные записи — открытые долги, продолжающиеся проценты. Убираем их через официальные обращения." },
            { t: "Выстраиваем рейтинг", d: "План на 1,5–3 года через малые финансовые инструменты — с конкретными шагами, не «общими советами»." },
            { t: "Готовим к крупным займам", d: "Цель — ипотека или автокредит через 2–3 года после списания. У моих клиентов это работает." },
          ].map((it, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-5 bg-card p-7 transition-colors hover:bg-cream-warm"
            >
              <div className="col-span-2">
                <div className="font-serif text-3xl italic text-gold tabular">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="col-span-10">
                <h3 className="font-serif text-xl text-navy">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── FAQ ────────────────── */
function FAQ() {
  const qa = [
    { q: "Меня посадят за долги?", a: "Нет. Невозможность платить по гражданским долгам — не уголовное преступление. Уголовная ответственность возможна только за мошенничество или преднамеренное банкротство. В обычной процедуре банкротства физлица этого нет." },
    { q: "Узнают ли о банкротстве на работе?", a: "Сведения публичны и есть в ЕФРСБ — теоретически их может найти любой. На практике работодатели редко проверяют. Уведомлять обязанности нет, кроме отдельных случаев (госслужба, руководящие должности в финсекторе)." },
    { q: "Могу ли я быть директором или ИП после банкротства?", a: "На время процедуры — нет. После завершения: 5 лет нельзя занимать руководящие должности в кредитных организациях, 3 года — в обычных компаниях, 5 лет — нельзя повторно банкротиться." },
    { q: "Сколько стоит банкротство?", a: "Обязательные расходы: госпошлина 300 ₽, вознаграждение АУ 25 000 ₽ за процедуру, публикации в ЕФРСБ и «Коммерсантъ» (15–20 тыс.₽). Моё сопровождение — обсуждается индивидуально, никаких «доп.расходов в процессе»." },
    { q: "У меня единственная квартира, её заберут?", a: "Нет, если она не в ипотеке. Единственное жильё защищено ст. 446 ГПК РФ. Исключение: ипотечная квартира — её банк имеет право реализовать." },
    { q: "Правда ли, что после банкротства не дают кредиты?", a: "Первые 1–2 года — действительно сложно. Но кредитная история восстанавливается. У моих клиентов через 2–3 года после списания получалось получить ипотеку и автокредит." },
    { q: "Сколько длится процедура?", a: "В среднем 8–11 месяцев. Простое дело — 6 месяцев, сложное — до 1,5 лет." },
    { q: "Что отличает АУ от юридической компании?", a: "Юр.компания — посредник: подаёт заявление, нанимает АУ со стороны. АУ — лицо, назначенное судом, ведущее процедуру и несущее личную имущественную ответственность через СРО." },
  ];
  return (
    <section className="bg-cream-warm py-24 md:py-32">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel n="09" title="Вопросы и ответы" />
          <h2 className="display mt-8 text-4xl text-navy md:text-5xl">
            Ответы на тревоги, <br />
            <span className="italic-serif text-gold">которые мешают спать</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Если ответа нет — задайте свой в Telegram-боте или по телефону. Я отвечаю
            лично.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="border-y border-navy/15">
            {qa.map((item, i) => (
              <details
                key={i}
                className="group border-b border-navy/10 py-6 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-sm italic text-gold tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl leading-snug text-navy md:text-2xl">
                      {item.q}
                    </span>
                  </div>
                  <span className="mt-2 grid h-6 w-6 shrink-0 place-items-center text-gold transition-transform group-open:rotate-45">
                    <span className="block h-px w-4 bg-current" />
                    <span className="absolute block h-4 w-px bg-current" />
                  </span>
                </summary>
                <p className="mt-5 max-w-2xl pl-11 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── small bits ────────────────── */
function SectionLabel({
  n,
  title,
  theme = "light",
  align = "left",
}: {
  n: string;
  title: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
}) {
  const dimmed = theme === "dark" ? "text-cream/55" : "text-muted-foreground";
  return (
    <div className={"flex items-center gap-4 " + (align === "center" ? "justify-center" : "")}>
      <span className={"font-serif text-sm italic " + (theme === "dark" ? "text-gold" : "text-gold")}>
        № {n}
      </span>
      <span className="gold-rule-tight" />
      <span className={"smallcaps " + dimmed}>{title}</span>
    </div>
  );
}