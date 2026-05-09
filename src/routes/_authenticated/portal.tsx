import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Scale, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/_authenticated/portal")({
  head: () => ({ meta: [{ title: "Кабинет — Status Svobody" }] }),
  component: PortalDashboard,
});

function PortalDashboard() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Сервисы</p>
        <h1 className="display mt-2 text-3xl md:text-4xl text-foreground">Выберите услугу</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Личный кабинет клиента. Загрузка документов, контроль статусов и связь с юридической командой.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-6">
        <ServiceCard
          to="/portal/credit"
          tag="Модуль 1"
          title="Восстановление кредитной истории"
          desc="Загрузите отчёты НБКИ, ОКБ и Скоринг Бюро. AI-проверка, согласие, оплата и итоговый разбор."
          icon={<FileText className="h-6 w-6" />}
          className="md:col-span-4"
        />
        <ServiceCard
          to="/portal/bankruptcy"
          tag="Модуль 2"
          title="Банкротство"
          desc="Адаптивный чек-лист документов на основе вашей анкеты."
          icon={<Scale className="h-6 w-6" />}
          className="md:col-span-2"
        />
        <InfoCard className="md:col-span-3" title="Безопасность данных" icon={<ShieldCheck className="h-5 w-5" />}>
          Документы хранятся в зашифрованном приватном хранилище. Доступ только у вас и юриста по делу.
        </InfoCard>
        <InfoCard className="md:col-span-3" title="Поддержка" icon={<ArrowUpRight className="h-5 w-5" />}>
          Юрист отвечает в течение часа в рабочее время. Никаких колл-центров.
        </InfoCard>
      </div>
    </div>
  );
}

function ServiceCard({ to, tag, title, desc, icon, className = "" }: {
  to: "/portal/credit" | "/portal/bankruptcy"; tag: string; title: string; desc: string; icon: React.ReactNode; className?: string;
}) {
  return (
    <Link to={to} className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-cyan/50 hover:shadow-xl ${className}`}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/5 blur-3xl transition group-hover:bg-cyan/10" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.3em] text-cyan">{tag}</span>
          <span className="rounded-full border border-border p-2 text-cyan transition group-hover:border-cyan/50">{icon}</span>
        </div>
        <h3 className="display mt-6 text-xl md:text-2xl text-foreground">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan">
          Открыть <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

function InfoCard({ title, icon, children, className = "" }: { title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card/60 p-6 ${className}`}>
      <div className="flex items-center gap-2 text-cyan">{icon}<span className="text-[11px] uppercase tracking-[0.3em]">{title}</span></div>
      <p className="mt-3 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}