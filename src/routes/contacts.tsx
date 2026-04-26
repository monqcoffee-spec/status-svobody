import { createFileRoute } from "@tanstack/react-router";
import { Phone, Send, MessageCircle, MapPin, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — Юлия Армина, арбитражный управляющий в Москве" },
      {
        name: "description",
        content:
          "Москва, Цветной бульвар, 13. Телефон, Telegram, WhatsApp. Реквизиты ИП и ссылки на государственные реестры.",
      },
      { property: "og:title", content: "Контакты — Юлия Армина" },
      {
        property: "og:description",
        content: "Связаться напрямую: телефон, Telegram, WhatsApp. Москва, Цветной бульвар, 13.",
      },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <SiteLayout>
      <section className="bg-navy text-cream">
        <div className="container-tight py-20 md:py-28">
          <Eyebrow>Контакты</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Свяжитесь напрямую — отвечаю лично
          </h1>
          <p className="mt-6 max-w-xl text-cream/75">
            Никаких колл-центров. Я веду общение сама — через Telegram, WhatsApp или по
            телефону. Если хотите сначала разобраться — запустите бесплатный интенсив
            в&nbsp;боте.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-tight grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4 my-20">
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Телефон"
            value="+7 (965) 445-73-78"
            href="tel:+79654457378"
          />
          <ContactCard
            icon={<Send className="h-5 w-5" />}
            label="Telegram-бот"
            value="@status_svobody_bot"
            href="https://t.me/status_svobody_bot"
          />
          <ContactCard
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value="Написать"
            href="https://wa.me/79654457378"
          />
          <ContactCard
            icon={<MapPin className="h-5 w-5" />}
            label="Адрес"
            value="Москва, Цветной бульвар, 13"
          />
        </div>

        <div className="container-tight grid gap-12 pb-24 md:grid-cols-2">
          <div>
            <Eyebrow>Реквизиты</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl text-navy">ИП Армина Юлия Юрьевна</h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {[
                ["ИНН", "312300900561"],
                ["ОГРНИП", "324774600450864"],
                ["Реестр АУ", "№ 20068 от 17.11.2020"],
                ["СРО", "Союз АУ «Созидание»"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-4">
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="tabular text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Eyebrow>Подтверждение в реестрах</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl text-navy">Открытые источники</h2>
            <div className="mt-8 space-y-4">
              {[
                ["Профиль на Федресурсе (ЕФРСБ)", "https://fedresurs.ru/"],
                ["Карточка СРО «Созидание»", "https://sozidanie-sro.ru/"],
                ["Канал «Закон 127»", "https://t.me/zakon_127"],
              ].map(([t, h]) => (
                <a
                  key={t}
                  href={h}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between gap-4 border-b border-border py-4 text-navy hover:text-gold transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-gold" />
                    {t}
                  </span>
                  <span className="text-gold">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex h-full flex-col gap-4 bg-card p-6 transition-colors hover:bg-cream-warm">
      <div className="text-gold">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-2 font-serif text-lg text-navy">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
      {content}
    </a>
  ) : (
    content
  );
}