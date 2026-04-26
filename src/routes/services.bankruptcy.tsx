import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, H2 } from "@/components/site/Section";

export const Route = createFileRoute("/services/bankruptcy")({
  head: () => ({
    meta: [
      { title: "Банкротство физических лиц по 127-ФЗ — Юлия Армина" },
      {
        name: "description",
        content:
          "Законная процедура списания долгов через арбитражный суд. От 500 000 ₽ долга. Этапы, сохраняемое имущество, реструктуризация vs реализация — без юридического канцелярита.",
      },
      {
        property: "og:title",
        content: "Банкротство физлиц по 127-ФЗ",
      },
      {
        property: "og:description",
        content:
          "Процедура, сроки, что сохраняется, кому подходит и кому — нет. Прямой арбитражный управляющий ведёт дело лично.",
      },
    ],
  }),
  component: BankruptcyPage,
});

function BankruptcyPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-cream">
        <div className="container-tight py-20 md:py-28">
          <Eyebrow>Услуга</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
            Банкротство физических лиц по&nbsp;127-ФЗ
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl text-cream/85">
            Законная процедура списания долгов через арбитражный суд. Подходит, если
            общая сумма задолженности больше 500&nbsp;000&nbsp;₽ и&nbsp;платить нечем.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-tight space-y-24">
          {/* Подходит / не подходит */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-md border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-success">
                Подходит
              </div>
              <h2 className="mt-3 font-serif text-2xl text-navy">Кому я помогаю</h2>
              <ul className="mt-6 space-y-4 text-sm text-navy/80">
                {[
                  "Долг от 500 000 ₽, нечем платить — кредиты, микрозаймы, поручительство",
                  "Звонят коллекторы и приставы, списывают со счетов",
                  "ИП с долгами перед ФНС — доначисления, дробление",
                  "Уже банкрот, нужна работа с кредитной историей",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Не подходит — скажу честно
              </div>
              <h2 className="mt-3 font-serif text-2xl text-navy">Когда лучше не идти</h2>
              <ul className="mt-6 space-y-4 text-sm text-navy/70">
                {[
                  "Долг меньше 300 000 ₽ — выгоднее внесудебное банкротство через МФЦ (бесплатно)",
                  "За последние 3 года переписали имущество на родственников — высокий риск отказа",
                  "Есть возможность платить, но не хочется — суд это увидит",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Что сохраняется / в зоне риска */}
          <div>
            <Eyebrow>Имущество</Eyebrow>
            <H2 className="mt-3 max-w-3xl">Что сохраняется, а&nbsp;что — в&nbsp;зоне риска</H2>

            <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
              <div className="bg-card p-8">
                <div className="text-xs uppercase tracking-[0.18em] text-success">
                  Сохраняется
                </div>
                <ul className="mt-6 space-y-3 text-sm text-navy/80">
                  {[
                    "Единственное жильё (если не в ипотеке)",
                    "Личные вещи, бытовая техника до 10 000 ₽ за предмет",
                    "Профессиональный инструмент",
                    "Средства на прожиточный минимум на вас и иждивенцев",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 text-success shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  В зоне риска
                </div>
                <ul className="mt-6 space-y-3 text-sm text-navy/80">
                  {[
                    "Вторая квартира, машина, дача",
                    "Сделки за последние 3 года (могут оспорить)",
                    "Доходы выше прожиточного минимума на время процедуры",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <X className="mt-0.5 h-4 w-4 text-muted-foreground shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Реструктуризация vs Реализация */}
          <div>
            <Eyebrow>Стратегия</Eyebrow>
            <H2 className="mt-3 max-w-3xl">Реструктуризация vs&nbsp;Реализация</H2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Это не одно и то же. От выбора зависит срок, расходы и итог. Разбираем
              на первой встрече по конкретно вашей ситуации.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-md bg-card p-8 border border-border">
                <h3 className="font-serif text-xl text-navy">Реструктуризация</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  План погашения долгов на срок до 3 лет с фиксированным графиком.
                  Имущество не продаётся. Подходит, если есть стабильный доход.
                </p>
              </div>
              <div className="rounded-md bg-card p-8 border border-border">
                <h3 className="font-serif text-xl text-navy">Реализация имущества</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Продажа имущества, не защищённого законом, и списание оставшейся
                  суммы. Самая частая стратегия — около 95% дел.
                </p>
              </div>
            </div>
          </div>

          {/* Стоимость */}
          <div className="rounded-md bg-navy p-10 text-cream md:p-14">
            <Eyebrow>Стоимость</Eyebrow>
            <H2 className="mt-3 text-cream max-w-3xl">Прозрачная вилка, без сюрпризов</H2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                ["Госпошлина", "300 ₽", "В арбитражный суд"],
                ["Вознаграждение АУ", "25 000 ₽", "За процедуру, фикс по закону"],
                ["Публикации", "15–20 тыс. ₽", "ЕФРСБ + «Коммерсантъ»"],
              ].map(([k, v, d]) => (
                <div key={k} className="border-t border-cream/15 pt-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-cream/55">
                    {k}
                  </div>
                  <div className="mt-2 font-serif text-2xl text-gold tabular">{v}</div>
                  <div className="mt-1 text-xs text-cream/60">{d}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm text-cream/70">
              Моё сопровождение обсуждается индивидуально и фиксируется в договоре до
              старта. Никаких «доп.расходов вылезли в&nbsp;процессе».
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-6 text-sm font-medium text-navy hover:bg-gold-hover"
              >
                Узнать стоимость моего сопровождения
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contacts"
                className="inline-flex h-12 items-center rounded-md border border-cream/25 px-6 text-sm font-medium text-cream hover:bg-cream/5"
              >
                Связаться лично
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}