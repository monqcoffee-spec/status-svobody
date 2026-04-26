import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/intensive")({
  head: () => ({
    meta: [
      { title: "Интенсив «Статус свободы» — бесплатно в Telegram" },
      {
        name: "description",
        content:
          "5 коротких уроков о банкротстве физлиц. Без звонков и навязывания. Чек-лист «подходит ли вам банкротство» за 3 минуты.",
      },
      { property: "og:title", content: "Интенсив «Статус свободы»" },
      {
        property: "og:description",
        content:
          "Бесплатный интенсив о банкротстве по 127-ФЗ. Полностью в Telegram, 5 уроков.",
      },
    ],
  }),
  component: IntensivePage,
});

function IntensivePage() {
  const lessons = [
    {
      n: "01",
      t: "Что такое банкротство по 127-ФЗ",
      d: "Кому реально подходит, а кому — нет. Без юридического канцелярита.",
    },
    {
      n: "02",
      t: "Что заберут, а что — нельзя по закону",
      d: "Единственное жильё, личные вещи, доход на жизнь. Реальные ограничения статьи 446 ГПК.",
    },
    {
      n: "03",
      t: "Как остановить коллекторов и приставов",
      d: "Что делать прямо сейчас, до подачи заявления. И что меняется после введения процедуры.",
    },
    {
      n: "04",
      t: "Сколько это реально стоит",
      d: "Все статьи расходов до копейки. Что входит в работу АУ, а что — отдельные платежи в суд.",
    },
    {
      n: "05",
      t: "Чек-лист «подходит ли мне банкротство»",
      d: "10 вопросов за 3 минуты. По ответам — честный вердикт: идти или искать другой путь.",
    },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-navy text-cream">
        <div
          aria-hidden
          className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-tight relative py-20 md:py-32">
          <Eyebrow>Бесплатно · 5 уроков · полностью в Telegram</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">
            Интенсив <span className="text-gold">«Статус свободы»</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl text-cream/85 md:text-2xl">
            Разберётесь, подходит&nbsp;ли вам банкротство — без&nbsp;звонков
            и&nbsp;навязывания.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://t.me/status_svobody_bot"
              target="_blank"
              rel="noopener"
              className="inline-flex h-14 items-center gap-3 rounded-md bg-gold px-8 text-base font-medium text-navy shadow-lg hover:bg-gold-hover"
            >
              Запустить в Telegram
              <ArrowRight className="h-5 w-5" />
            </a>
            <span className="text-sm text-cream/60">@status_svobody_bot</span>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-tight grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Программа</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              5&nbsp;уроков, по&nbsp;5&nbsp;минут каждый
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Бот присылает уроки удобными порциями. Можно проходить за один вечер или
              растянуть на неделю — материалы остаются у вас навсегда.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              {[
                "Никаких звонков менеджера",
                "Никаких автодозвонов",
                "Только бот и полезная информация",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-navy/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-px overflow-hidden rounded-md border border-border bg-border">
            {lessons.map((l) => (
              <div key={l.n} className="grid gap-4 bg-card p-6 md:grid-cols-12 md:p-7">
                <div className="md:col-span-2 font-serif text-3xl text-gold tabular">
                  {l.n}
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-xl text-navy">{l.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-tight mt-16 rounded-md bg-navy px-8 py-12 text-center text-cream md:py-16">
          <h3 className="font-serif text-2xl md:text-3xl">
            Готовы пройти первый урок прямо сейчас?
          </h3>
          <a
            href="https://t.me/status_svobody_bot"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-gold px-6 text-sm font-medium text-navy hover:bg-gold-hover"
          >
            Запустить интенсив <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}