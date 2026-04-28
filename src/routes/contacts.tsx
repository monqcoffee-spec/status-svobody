import { createFileRoute } from "@tanstack/react-router";
import { Phone, Send, MessageCircle, MapPin, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — STATUS SVOBODY · Москва, Цветной бульвар" },
      {
        name: "description",
        content:
          "Москва, Цветной бульвар, 13. Telegram, WhatsApp, телефон. Реквизиты ИП и ссылки на государственные реестры.",
      },
      { property: "og:title", content: "Контакты — STATUS SVOBODY" },
      {
        property: "og:description",
        content: "Связаться напрямую с арбитражным управляющим. Telegram, WhatsApp, телефон.",
      },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <SiteLayout>
      <section className="relative -mt-20 overflow-hidden bg-aurora pt-32 pb-20 md:pt-40 md:pb-28">
        <ParticleField density={50} />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
        <div className="container-tight relative">
          <Eyebrow>Контакты</Eyebrow>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,8vw,6rem)] text-gradient-cyan text-glow">
            Свяжитесь напрямую
          </h1>
          <p className="mt-8 max-w-xl text-lg text-silver/75">
            Никаких колл-центров. Общение веду лично — Telegram, WhatsApp, телефон.
            Если хотите сначала разобраться — запустите бесплатный интенсив в боте.
          </p>
        </div>
      </section>

      <Section variant="default">
        <div className="grid gap-px bg-white/5 border border-white/5 md:grid-cols-2 lg:grid-cols-4" style={{ borderRadius: "2px" }}>
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Телефон" value="+7 (965) 445-73-78" href="tel:+79654457378" />
          <ContactCard icon={<Send className="h-5 w-5" />} label="Telegram-бот" value="@status_svobody_bot" href="https://t.me/status_svobody_bot" />
          <ContactCard icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Написать" href="https://wa.me/79654457378" />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Адрес" value="Москва, Цветной бульвар, 13" />
        </div>
      </Section>

      <Section variant="darker">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Реквизиты</Eyebrow>
            <h2 className="mt-6 font-display text-3xl text-silver">ИП Армина Юлия Юрьевна</h2>
            <dl className="mt-8 divide-y divide-white/8 border-y border-white/8">
              {[
                ["ИНН", "312300900561"],
                ["ОГРНИП", "324774600450864"],
                ["Реестр АУ", "№ 20068 от 17.11.2020"],
                ["СРО", "Союз АУ «Созидание»"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-4">
                  <dt className="smallcaps text-silver-dim">{k}</dt>
                  <dd className="tabular text-silver">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Eyebrow>Подтверждение в реестрах</Eyebrow>
            <h2 className="mt-6 font-display text-3xl text-silver">Открытые источники</h2>
            <div className="mt-8 space-y-2">
              {[
                ["Профиль на Федресурсе (ЕФРСБ)", "https://fedresurs.ru/"],
                ["Карточка СРО «Созидание»", "https://sozidanie-sro.ru/"],
                ["Канал «Закон 127»", "https://t.me/zakon_127"],
              ].map(([t, h]) => (
                <a key={t} href={h} target="_blank" rel="noopener" className="group flex items-center justify-between gap-4 border-b border-white/8 py-4 text-silver hover:text-cyan transition-colors">
                  <span className="flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-cyan" />
                    {t}
                  </span>
                  <span className="text-cyan transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="group flex h-full flex-col gap-5 bg-ink-soft p-7 transition-all hover:bg-ink">
      <div className="inline-flex h-10 w-10 items-center justify-center border border-cyan/30 text-cyan transition-all group-hover:border-cyan group-hover:shadow-[0_0_18px_color-mix(in_oklab,var(--cyan)_40%,transparent)]" style={{ borderRadius: "2px" }}>
        {icon}
      </div>
      <div>
        <div className="smallcaps text-[9px] text-silver-dim">{label}</div>
        <div className="mt-2 font-display text-base text-silver">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{content}</a>
  ) : content;
}
