import { createFileRoute } from "@tanstack/react-router";
import { Phone, Send, MessageCircle, MapPin, AtSign, Megaphone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { ParticleField } from "@/components/site/ParticleField";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import featherImg from "@/assets/feather-light.jpg";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — Статус Свободы · Москва" },
      {
        name: "description",
        content:
          "Москва, Цветной бульвар, 13. Telegram, WhatsApp, телефон. Прямой контакт с финансовым консультантом, без колл-центров.",
      },
      { property: "og:title", content: "Контакты — Статус Свободы" },
      {
        property: "og:description",
        content: "Связаться с консультантом по кредитной истории. Telegram, WhatsApp, телефон.",
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
        <img
          src={featherImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1080}
          height={1920}
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-40"
          style={{ maskImage: "linear-gradient(to left, black 20%, transparent 95%)", WebkitMaskImage: "linear-gradient(to left, black 20%, transparent 95%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
        <div className="container-tight relative">
          <Eyebrow>Контакты</Eyebrow>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,8vw,6rem)] text-gradient-cyan text-glow">
            Свяжитесь напрямую
          </h1>
          <p className="mt-8 max-w-xl text-lg text-silver/75">
            Никаких колл-центров. Общение веду лично — Telegram, WhatsApp, телефон.
            Для предварительного разбора удобнее всего написать в Telegram.
          </p>
        </div>
      </section>

      <Section variant="default">
        <div className="grid gap-px bg-white/5 border border-white/5 md:grid-cols-2 lg:grid-cols-3" style={{ borderRadius: "2px" }}>
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Телефон" value="+7 (965) 445-73-78" href="tel:+79654457378" />
          <ContactCard icon={<AtSign className="h-5 w-5" />} label="Telegram (личный)" value="@u_armina" href="https://t.me/u_armina" />
          <ContactCard icon={<Megaphone className="h-5 w-5" />} label="Telegram-канал" value="ЮЛИЯ АРМИНА · t.me/zakon_127" href="https://t.me/zakon_127" />
          <ContactCard icon={<Send className="h-5 w-5" />} label="Бесплатный интенсив" value="@status_svobody_bot" href="https://t.me/status_svobody_bot" />
          <ContactCard icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Написать" href="https://wa.me/79654457378" />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Адрес" value="Москва, Цветной бульвар, 13" />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/8 pt-12">
          <div className="max-w-md">
            <Eyebrow>Заявка</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-silver md:text-3xl">
              Перезвоним сами — в течение часа
            </h2>
            <p className="mt-3 text-sm text-silver-dim">
              Если удобнее, чтобы связались первыми — оставьте контакты.
              Только по указанному номеру, без сторонних колл-центров.
            </p>
          </div>
          <LeadFormDialog
            source="contacts"
            trigger={
              <button type="button" className="btn-cyan rounded-sm">
                Оставить заявку
              </button>
            }
          />
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
