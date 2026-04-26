import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, H2 } from "@/components/site/Section";

export const Route = createFileRoute("/services/credit-history")({
  head: () => ({
    meta: [
      { title: "Восстановление кредитной истории после банкротства" },
      {
        name: "description",
        content:
          "Банкротство — не приговор для КИ. Алгоритм восстановления за 1,5–3 года: чистка некорректных записей, выстраивание рейтинга, путь к ипотеке.",
      },
      { property: "og:title", content: "Восстановление КИ после банкротства" },
      {
        property: "og:description",
        content:
          "Уникальная услуга: помогаю восстановить кредитную историю после процедуры банкротства. Реальный путь к ипотеке через 2–3 года.",
      },
    ],
  }),
  component: CreditPage,
});

function CreditPage() {
  const myths = [
    {
      m: "Долги исчезают по сроку давности",
      a: "Нет. В БКИ они остаются навсегда без официального закрытия.",
    },
    {
      m: "После банкротства запись в БКИ — клеймо на всю жизнь",
      a: "Нет, это просто фиксация юридического факта. Рейтинг восстанавливается.",
    },
    {
      m: "Финуправляющий может не передавать данные в БКИ",
      a: "Нет. Это прямая обязанность по закону. Без передачи процедура не считается завершённой.",
    },
  ];

  const steps = [
    "Запросить свою КИ во всех 3 БКИ (НБКИ, ОКБ, Эквифакс)",
    "Найти некорректные записи: проданные долги, незакрытые проценты",
    "Подать официальные обращения на исправление",
    "Открыть безопасный финансовый продукт — карта рассрочки или дебетовая с лимитом",
    "Чистая платёжная дисциплина 6–12 месяцев",
    "Малый кредит → крупный → ипотека",
  ];

  return (
    <SiteLayout>
      <section className="bg-navy text-cream">
        <div className="container-tight py-20 md:py-28">
          <Eyebrow>Уникальная услуга</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
            Восстановление кредитной истории после банкротства
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl text-cream/85">
            Банкротство — не приговор для&nbsp;КИ. Это запись о&nbsp;юридическом факте.
            Восстановить рейтинг можно за&nbsp;1,5–3&nbsp;года, если действовать
            грамотно.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-tight space-y-24">
          <div>
            <Eyebrow>Главные мифы</Eyebrow>
            <H2 className="mt-3 max-w-3xl">Что говорят в&nbsp;интернете — и&nbsp;как на&nbsp;самом деле</H2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {myths.map((it, i) => (
                <div
                  key={i}
                  className="rounded-md border border-border bg-card p-6"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Миф {i + 1}
                  </div>
                  <p className="mt-3 font-serif text-lg text-navy">«{it.m}»</p>
                  <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                    {it.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>Алгоритм</Eyebrow>
            <H2 className="mt-3 max-w-3xl">6&nbsp;шагов до&nbsp;нормального кредитного рейтинга</H2>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
              {steps.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-5 bg-card p-6"
                >
                  <div className="font-serif text-3xl text-gold tabular">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-serif text-lg text-navy/90 leading-snug">{s}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-md bg-navy p-10 text-cream md:p-14">
            <H2 className="text-cream max-w-3xl">
              Реальная цель: ипотека через&nbsp;2–3 года после&nbsp;списания
            </H2>
            <p className="mt-6 max-w-2xl text-cream/75">
              У моих клиентов это работает. Главное — начать сразу после завершения
              процедуры и не делать ошибок «по советам с форумов».
            </p>
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-gold px-6 text-sm font-medium text-navy hover:bg-gold-hover"
            >
              Разбор моей КИ — записаться <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}