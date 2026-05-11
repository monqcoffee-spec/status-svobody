import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Scale, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_authenticated/portal/")({
  head: () => ({ meta: [{ title: "Кабинет — Status Svobody" }] }),
  component: PortalDashboard,
});

type Progress = {
  credit: { percent: number; label: string; started: boolean };
  bankruptcy: { percent: number; label: string; started: boolean };
};

function PortalDashboard() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    if (!user) return;
    (async () => {
      // Credit module
      const { data: cc } = await supabase
        .from("credit_cases").select("*").eq("user_id", user.id).maybeSingle();
      let creditPercent = 0;
      let creditLabel = "Не начато";
      let creditStarted = false;
      if (cc) {
        creditStarted = true;
        const { data: reps } = await supabase
          .from("credit_reports").select("verified").eq("case_id", cc.id);
        const verified = (reps ?? []).filter((r) => r.verified).length;
        const reportsDone = verified >= 3;
        const steps = [reportsDone, !!cc.consent_uploaded_path, cc.paid, cc.analysis_ready];
        creditPercent = Math.round((steps.filter(Boolean).length / steps.length) * 100);
        creditLabel = !reportsDone ? `Отчёты: ${verified}/3 проверено`
          : !cc.consent_uploaded_path ? "Шаг 2: согласие"
          : !cc.paid ? "Шаг 3: оплата"
          : !cc.analysis_ready ? "Шаг 4: ждём заключение" : "Завершено";
      }

      // Bankruptcy module
      const { data: bc } = await supabase
        .from("bankruptcy_cases").select("*").eq("user_id", user.id).maybeSingle();
      let bkPercent = 0;
      let bkLabel = "Не начато";
      let bkStarted = false;
      if (bc) {
        bkStarted = true;
        if (!bc.questionnaire_done) {
          bkLabel = "Заполните анкету";
        } else {
          const { data: docs } = await supabase
            .from("bankruptcy_documents").select("file_path").eq("case_id", bc.id);
          const total = (docs ?? []).length;
          const uploaded = (docs ?? []).filter((d) => d.file_path).length;
          bkPercent = total ? Math.round((uploaded / total) * 100) : 10;
          bkLabel = total ? `Документы: ${uploaded}/${total}` : "Чек-лист сформирован";
          if (total && uploaded === total) bkLabel = "Все документы загружены";
        }
        if (!bc.questionnaire_done) bkPercent = 5;
      }

      setProgress({
        credit: { percent: creditPercent, label: creditLabel, started: creditStarted },
        bankruptcy: { percent: bkPercent, label: bkLabel, started: bkStarted },
      });
    })();
  }, [user]);

  return (
    <div className="space-y-8">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Сервисы</p>
        <h1 className="display mt-2 text-lg md:text-xl text-foreground">Выберите услугу</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Личный кабинет клиента. Прогресс автоматически сохраняется — вы можете вернуться в любой момент и продолжить с того же шага.
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
          progress={progress?.credit}
        />
        <ServiceCard
          to="/portal/bankruptcy"
          tag="Модуль 2"
          title="Банкротство"
          desc="Адаптивный чек-лист документов на основе вашей анкеты."
          icon={<Scale className="h-6 w-6" />}
          className="md:col-span-2"
          progress={progress?.bankruptcy}
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

function ServiceCard({ to, tag, title, desc, icon, className = "", progress }: {
  to: "/portal/credit" | "/portal/bankruptcy"; tag: string; title: string; desc: string; icon: React.ReactNode; className?: string;
  progress?: { percent: number; label: string; started: boolean };
}) {
  return (
    <Link to={to} className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-cyan/50 hover:shadow-xl ${className}`}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/5 blur-3xl transition group-hover:bg-cyan/10" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.3em] text-cyan">{tag}</span>
          <span className="rounded-full border border-border p-2 text-cyan transition group-hover:border-cyan/50">{icon}</span>
        </div>
        <h3 className="display mt-6 text-xl md:text-base text-foreground">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
        {progress && (
          <div className="mt-5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>{progress.label}</span>
              <span className="tabular text-cyan">{progress.percent}%</span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
              <div className="h-full bg-cyan transition-all" style={{ width: `${progress.percent}%` }} />
            </div>
          </div>
        )}
        <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan">
          {progress?.started ? "Продолжить" : "Открыть"}
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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