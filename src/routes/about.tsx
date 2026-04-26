import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, H2 } from "@/components/site/Section";
import fullbody from "@/assets/armina-fullbody.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Обо мне — Юлия Армина, арбитражный управляющий" },
      {
        name: "description",
        content:
          "Юлия Юрьевна Армина: 5 лет в реестре арбитражных управляющих, 323 завершённые процедуры, 888 миллионов списанных долгов. Член СРО «Созидание».",
      },
      { property: "og:title", content: "Юлия Армина — обо мне" },
      {
        property: "og:description",
        content:
          "Финансовый управляющий, член СРО «Созидание». Веду процедуры банкротства напрямую — лично, без посредников.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-cream">
        <div className="container-tight grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={fullbody}
              alt="Юлия Армина в библиотеке"
              className="w-full max-w-md object-cover"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Eyebrow>Обо мне</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] md:text-6xl">
              Юлия Юрьевна Армина
            </h1>
            <p className="mt-5 max-w-xl font-serif text-xl text-cream/85">
              Финансовый управляющий. 5&nbsp;лет в&nbsp;реестре. 888&nbsp;миллионов
              списано.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8 text-cream">
              {[
                ["323", "процедуры"],
                ["50", "активных дел"],
                ["888 млн ₽", "списано"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-serif text-2xl text-gold tabular">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-cream/55">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-tight grid gap-16 py-20 md:py-28 lg:grid-cols-12">
          <article className="prose-content lg:col-span-8 lg:col-start-3 space-y-6 font-serif text-lg leading-relaxed text-navy/85">
            <p>
              Я — арбитражный управляющий. Мой статус с&nbsp;17&nbsp;ноября 2020 года
              занесён в&nbsp;Единый федеральный реестр сведений о&nbsp;банкротстве,
              регистрационный номер&nbsp;20068. Состою в&nbsp;Союзе арбитражных
              управляющих «Созидание» — это саморегулируемая организация, которая
              контролирует мою работу и&nbsp;страхует мою профессиональную
              ответственность.
            </p>
            <p>
              За пять лет я провела 323&nbsp;процедуры банкротства физических лиц.
              Сегодня в&nbsp;моей работе одновременно находится 50&nbsp;активных дел.
              Сумма долгов, которую удалось законно списать с&nbsp;моих клиентов —
              888&nbsp;миллионов рублей. Каждое дело завершено решением арбитражного
              суда и&nbsp;опубликовано в&nbsp;ЕФРСБ.
            </p>
            <p>
              Я не&nbsp;юридическая компания. Я&nbsp;не&nbsp;нанимаю АУ
              со&nbsp;стороны и&nbsp;не&nbsp;передаю клиентов «менеджерам». Когда вы
              приходите ко&nbsp;мне — мы&nbsp;работаем напрямую, и&nbsp;я&nbsp;лично
              веду ваше дело в&nbsp;суде от&nbsp;первой консультации до&nbsp;решения
              о&nbsp;списании.
            </p>

            <H2 className="!text-3xl pt-8">Почему я&nbsp;этим занимаюсь</H2>
            <p>
              В&nbsp;долговую яму попадают не&nbsp;«безответственные люди». Туда
              попадают те, кому в&nbsp;банке не&nbsp;объяснили условия, кто потерял
              работу, кто заболел, кто поручился за&nbsp;родственника. Закон 127-ФЗ был
              принят в&nbsp;2015 году именно для них — чтобы дать второй финансовый
              шанс.
            </p>
            <p>
              Моя работа — не&nbsp;просто закрыть долги. Моя работа — научить дальше
              жить без них. Поэтому после процедуры я&nbsp;помогаю восстановить
              кредитную историю и&nbsp;выстроить нормальные финансовые привычки. Чтобы
              повторно к&nbsp;этому не&nbsp;возвращаться.
            </p>

            <H2 className="!text-3xl pt-8">Принципы работы</H2>
            <ul className="not-prose space-y-4 font-sans text-base text-navy/80">
              {[
                ["Честность на входе.", "Если банкротство вам не подходит — я скажу это сразу. Бесплатно."],
                ["Никаких 100%-гарантий списания.", "Гарантирует только суд. Я гарантирую качество подготовки дела."],
                ["Полная прозрачность по деньгам.", "Стоимость обсуждаем до начала, никаких «доп.расходов вылезли»."],
                ["На связи лично.", "Я не передаю ваше дело ассистентам."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-l-2 border-gold pl-5">
                  <div>
                    <span className="font-serif text-navy">{t}</span>{" "}
                    <span className="text-muted-foreground">{d}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="not-prose pt-10 flex flex-wrap gap-3">
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-6 text-sm font-medium text-navy hover:bg-gold-hover"
              >
                Бесплатная консультация в боте <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contacts"
                className="inline-flex h-12 items-center rounded-md border border-navy/20 px-6 text-sm font-medium text-navy hover:bg-cream-warm"
              >
                Все контакты
              </Link>
            </div>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}