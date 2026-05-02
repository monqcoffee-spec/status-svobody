import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, SectionLabel } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import aboutImg from "@/assets/about-transformation.jpg";

export const Route = createFileRoute("/services/bankruptcy")({
  head: () => ({
    meta: [
      { title: "Банкротство по 127-ФЗ — STATUS SVOBODY" },
      {
        name: "description",
        content:
          "Законная процедура списания долгов через арбитражный суд. От 500 000 ₽ долга. Этапы, сохраняемое имущество, реструктуризация vs реализация — без юридического канцелярита.",
      },
      { property: "og:title", content: "Банкротство физлиц по 127-ФЗ" },
      {
        property: "og:description",
        content:
          "Прямая работа с арбитражным управляющим. Процедура, сроки, имущество, стоимость.",
      },
    ],
  }),
  component: BankruptcyPage,
});

function BankruptcyPage() {
  return (
    <SiteLayout>
      <section className="relative -mt-20 overflow-hidden bg-aurora pt-32 pb-20 md:pt-40 md:pb-28">
        <ParticleField density={50} />
        <img
          src={aboutImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1280}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
          style={{ maskImage: "radial-gradient(ellipse 80% 70% at 60% 50%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 60% 50%, black, transparent 80%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
        <div className="container-tight relative">
          <Eyebrow>Услуга 01</Eyebrow>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.25rem,7vw,5.5rem)] text-gradient-cyan text-glow">
            Банкротство по&nbsp;127-ФЗ
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-silver/75">
            Законная процедура списания долгов через арбитражный суд. Подходит, если общая
            сумма задолженности больше <span className="text-cyan">500 000 ₽</span> и платить нечем.
          </p>
        </div>
      </section>

      <Section variant="default">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-white/8 bg-ink-soft/60 p-8" style={{ borderRadius: "2px" }}>
            <div className="smallcaps text-cyan">Подходит</div>
            <h2 className="mt-3 font-display text-2xl text-silver">Кому я помогаю</h2>
            <ul className="mt-6 space-y-4 text-sm text-silver/80">
              {[
                "Долг от 500 000 ₽, нечем платить — кредиты, микрозаймы, поручительство",
                "Звонят коллекторы и приставы, списывают со счетов",
                "ИП с долгами перед ФНС — доначисления, дробление",
                "Уже банкрот, нужна работа с кредитной историей",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/8 bg-ink-soft/60 p-8" style={{ borderRadius: "2px" }}>
            <div className="smallcaps text-silver-dim">Не подходит — скажу честно</div>
            <h2 className="mt-3 font-display text-2xl text-silver">Когда лучше не идти</h2>
            <ul className="mt-6 space-y-4 text-sm text-silver/70">
              {[
                "Долг меньше 300 000 ₽ — выгоднее внесудебное банкротство через МФЦ (бесплатно)",
                "За последние 3 года переписали имущество на родственников — высокий риск отказа",
                "Есть возможность платить, но не хочется — суд это увидит",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-silver-dim" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="darker">
        <SectionLabel n="01" title="Имущество" />
        <H2 className="mt-8 max-w-3xl">Что сохраняется, а что — в зоне риска</H2>

        <div className="mt-12 grid gap-px bg-white/5 border border-white/5 md:grid-cols-2" style={{ borderRadius: "2px" }}>
          <div className="bg-ink-soft p-8">
            <div className="smallcaps text-cyan">Сохраняется</div>
            <ul className="mt-6 space-y-3 text-sm text-silver/80">
              {[
                "Единственное жильё (если не в ипотеке)",
                "Личные вещи, бытовая техника до 10 000 ₽ за предмет",
                "Профессиональный инструмент",
                "Средства на прожиточный минимум на вас и иждивенцев",
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-cyan shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-ink-soft p-8">
            <div className="smallcaps text-silver-dim">В зоне риска</div>
            <ul className="mt-6 space-y-3 text-sm text-silver/80">
              {[
                "Вторая квартира, машина, дача",
                "Сделки за последние 3 года (могут оспорить)",
                "Доходы выше прожиточного минимума на время процедуры",
              ].map((t) => (
                <li key={t} className="flex gap-3"><X className="mt-0.5 h-4 w-4 text-silver-dim shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="default">
        <SectionLabel n="02" title="Стратегия" />
        <H2 className="mt-8 max-w-3xl">Реструктуризация vs Реализация</H2>
        <p className="mt-6 max-w-2xl text-silver-dim">
          Это не одно и то же. От выбора зависит срок, расходы и итог. Разбираем
          на первой встрече по конкретно вашей ситуации.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border border-white/8 bg-ink-soft/60 p-8" style={{ borderRadius: "2px" }}>
            <h3 className="font-display text-xl text-silver">Реструктуризация</h3>
            <p className="mt-3 text-sm text-silver-dim leading-relaxed">
              План погашения долгов на срок до 3 лет с фиксированным графиком.
              Имущество не продаётся. Подходит, если есть стабильный доход.
            </p>
          </div>
          <div className="border border-cyan/30 bg-ink-soft p-8 ring-glow" style={{ borderRadius: "2px" }}>
            <div className="smallcaps text-cyan">~95% дел</div>
            <h3 className="mt-2 font-display text-xl text-silver">Реализация имущества</h3>
            <p className="mt-3 text-sm text-silver-dim leading-relaxed">
              Продажа имущества, не защищённого законом, и списание оставшейся
              суммы. Самая частая стратегия.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="glow">
        <SectionLabel n="03" title="Стоимость" />
        <H2 className="mt-8 max-w-3xl">
          Прозрачная вилка, <span className="text-cyan italic">без сюрпризов.</span>
        </H2>

        <div className="mt-12 grid gap-px bg-white/5 border border-white/5 md:grid-cols-3" style={{ borderRadius: "2px" }}>
          {[
            ["Госпошлина", "300 ₽", "В арбитражный суд"],
            ["Вознаграждение АУ", "25 000 ₽", "За процедуру, фикс по закону"],
            ["Публикации", "15–20 тыс. ₽", "ЕФРСБ + «Коммерсантъ»"],
          ].map(([k, v, d]) => (
            <div key={k} className="bg-ink-soft p-8">
              <div className="smallcaps text-silver-dim">{k}</div>
              <div className="mt-3 font-display text-3xl text-cyan tabular text-glow">{v}</div>
              <div className="mt-2 text-xs text-silver-dim">{d}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-silver-dim">
          Сопровождение обсуждается индивидуально и фиксируется в договоре до старта.
          Никаких «доп. расходов вылезли в процессе».
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href="https://t.me/status_svobody_bot" target="_blank" rel="noopener" className="btn-cyan rounded-sm">
            Узнать стоимость моего сопровождения <ArrowRight className="h-4 w-4" />
          </a>
          <Link to="/contacts" className="btn-ghost rounded-sm">Связаться лично</Link>
        </div>
      </Section>
    </SiteLayout>
  );
}
