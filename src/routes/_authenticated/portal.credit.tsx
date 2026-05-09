import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { verifyCreditReport } from "@/lib/portal.functions";
import { toast } from "sonner";
import { Upload, Check, AlertTriangle, Loader2, FileText, CreditCard, Download, ArrowLeft } from "lucide-react";

type Bureau = "nbki" | "okb" | "sb";
const BUREAUS: { key: Bureau; label: string; sub: string }[] = [
  { key: "nbki", label: "НБКИ", sub: "Национальное Бюро Кредитных Историй" },
  { key: "okb", label: "ОКБ", sub: "Объединённое Кредитное Бюро" },
  { key: "sb", label: "Скоринг Бюро", sub: "СБ" },
];

type Report = {
  id: string; bureau: Bureau; file_name: string; file_path: string;
  verified: boolean; verification_status: "pending" | "ok" | "mismatch" | "unreadable";
  verification_notes: string | null;
};

type Case = {
  id: string; status: string; consent_uploaded_path: string | null;
  paid: boolean; analysis_text: string | null; analysis_ready: boolean;
};

export const Route = createFileRoute("/_authenticated/portal/credit")({
  head: () => ({ meta: [{ title: "Восстановление кредитной истории" }] }),
  component: CreditModule,
});

function CreditModule() {
  const { user } = useAuth();
  const [kase, setKase] = useState<Case | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const verifyFn = useServerFn(verifyCreditReport);

  async function load() {
    if (!user) return;
    let { data: existing } = await supabase.from("credit_cases").select("*").eq("user_id", user.id).maybeSingle();
    if (!existing) {
      const ins = await supabase.from("credit_cases").insert({ user_id: user.id }).select().single();
      existing = ins.data;
    }
    setKase(existing as Case);
    if (existing) {
      const { data: r } = await supabase.from("credit_reports").select("*").eq("case_id", existing.id).order("created_at");
      setReports((r as Report[]) ?? []);
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, [user]);

  async function uploadReport(bureau: Bureau, file: File) {
    if (!user || !kase) return;
    const path = `${user.id}/credit/${kase.id}/${bureau}-${Date.now()}-${file.name}`;
    const up = await supabase.storage.from("portal-docs").upload(path, file, { upsert: false });
    if (up.error) return toast.error(up.error.message);

    // delete previous of same bureau
    const old = reports.filter(r => r.bureau === bureau);
    if (old.length) {
      await supabase.storage.from("portal-docs").remove(old.map(o => o.file_path));
      await supabase.from("credit_reports").delete().eq("case_id", kase.id).eq("bureau", bureau);
    }

    const ins = await supabase.from("credit_reports").insert({
      case_id: kase.id, user_id: user.id, bureau,
      file_path: path, file_name: file.name,
    }).select().single();
    if (ins.error || !ins.data) return toast.error(ins.error?.message ?? "Ошибка");

    const newReport = ins.data as Report;
    setReports(prev => [...prev.filter(r => r.bureau !== bureau), newReport]);
    toast.message("Документ загружен — выполняем AI-проверку…");

    try {
      const res = await verifyFn({ data: { reportId: newReport.id } });
      const { data: refreshed } = await supabase.from("credit_reports").select("*").eq("id", newReport.id).single();
      if (refreshed) setReports(prev => prev.map(r => r.id === newReport.id ? refreshed as Report : r));
      if (res.status === "ok") toast.success(`${bureau.toUpperCase()}: документ принят`);
      else toast.error(`${bureau.toUpperCase()}: ${res.notes}`);
    } catch (e: any) {
      toast.error("Ошибка проверки: " + (e?.message ?? ""));
    }
  }

  async function uploadConsent(file: File) {
    if (!user || !kase) return;
    const path = `${user.id}/credit/${kase.id}/consent-${Date.now()}-${file.name}`;
    const up = await supabase.storage.from("portal-docs").upload(path, file, { upsert: true });
    if (up.error) return toast.error(up.error.message);
    const { data } = await supabase.from("credit_cases").update({
      consent_uploaded_path: path, status: "payment_pending",
    }).eq("id", kase.id).select().single();
    if (data) setKase(data as Case);
    toast.success("Согласие загружено");
  }

  async function payNow() {
    if (!kase) return;
    const { data } = await supabase.from("credit_cases").update({
      paid: true, paid_at: new Date().toISOString(), status: "analysis",
    }).eq("id", kase.id).select().single();
    if (data) setKase(data as Case);
    toast.success("Оплата 5 000 ₽ принята (демо). Юрист приступил к анализу.");
  }

  if (loading) return <div className="text-muted-foreground">Загрузка…</div>;

  const allVerified = BUREAUS.every(b => reports.find(r => r.bureau === b.key && r.verified));

  return (
    <div className="space-y-8">
      <Link to="/portal" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> Назад
      </Link>
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Модуль 1</p>
        <h1 className="display mt-2 text-3xl md:text-4xl text-foreground">Восстановление кредитной истории</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Загрузите три отчёта. Система автоматически проверит, что это действительно нужное бюро и что документ читается.</p>
      </header>

      <Steps allVerified={allVerified} kase={kase!} />

      <section className="grid gap-4 md:grid-cols-3">
        {BUREAUS.map(b => {
          const rep = reports.find(r => r.bureau === b.key);
          return <ReportCard key={b.key} bureau={b} report={rep} onUpload={(f) => uploadReport(b.key, f)} />;
        })}
      </section>

      <ConsentSection kase={kase!} onUpload={uploadConsent} />
      <PaymentSection kase={kase!} canPay={allVerified && !!kase!.consent_uploaded_path} onPay={payNow} />
      <AnalysisSection kase={kase!} />
    </div>
  );
}

function Steps({ allVerified, kase }: { allVerified: boolean; kase: Case }) {
  const steps = [
    { label: "Отчёты загружены", done: allVerified },
    { label: "Согласие подписано", done: !!kase.consent_uploaded_path },
    { label: "Оплата", done: kase.paid },
    { label: "Анализ готов", done: kase.analysis_ready },
  ];
  return (
    <ol className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {steps.map((s, i) => (
        <li key={i} className={`rounded-xl border p-4 ${s.done ? "border-cyan/50 bg-cyan/5" : "border-border bg-card/40"}`}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className={`h-5 w-5 rounded-full grid place-items-center text-[10px] ${s.done ? "bg-cyan text-white" : "border border-border"}`}>{i + 1}</span>
            <span>{s.label}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ReportCard({ bureau, report, onUpload }: { bureau: { key: Bureau; label: string; sub: string }; report?: Report; onUpload: (f: File) => Promise<unknown> }) {
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const verifying = report && report.verification_status === "pending";

  async function pick(file: File) {
    setUploading(true);
    await onUpload(file);
    setUploading(false);
  }

  const statusUI = (() => {
    if (uploading || verifying) return { icon: <Loader2 className="h-4 w-4 animate-spin" />, text: "Проверяем документ…", cls: "text-cyan" };
    if (!report) return { icon: <FileText className="h-4 w-4" />, text: "Не загружено", cls: "text-muted-foreground" };
    if (report.verification_status === "ok") return { icon: <Check className="h-4 w-4" />, text: "Принят", cls: "text-cyan" };
    return { icon: <AlertTriangle className="h-4 w-4" />, text: report.verification_notes ?? "Не подходит", cls: "text-amber-400" };
  })();

  return (
    <div className={`relative overflow-hidden rounded-2xl border p-5 ${report?.verified ? "border-cyan/40 bg-cyan/5" : "border-border bg-card/60"}`}>
      {(uploading || verifying) && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
          <div className="h-full w-1/3 bg-cyan animate-[scan_1.4s_ease-in-out_infinite]" />
        </div>
      )}
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-cyan">{bureau.label}</div>
          <div className="text-xs text-muted-foreground">{bureau.sub}</div>
        </div>
        {report?.verified && <span className="rounded-full bg-cyan/20 p-1.5 text-cyan"><Check className="h-3.5 w-3.5" /></span>}
      </div>
      <div className={`mt-5 flex items-center gap-2 text-sm ${statusUI.cls}`}>
        {statusUI.icon}<span className="truncate">{statusUI.text}</span>
      </div>
      {report && <p className="mt-2 truncate text-xs text-muted-foreground">{report.file_name}</p>}
      <input ref={ref} type="file" accept="application/pdf,image/*" className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) pick(f); e.currentTarget.value = ""; }} />
      <button onClick={() => ref.current?.click()} disabled={uploading || verifying}
        className="mt-5 w-full rounded-sm border border-border bg-background py-2.5 text-sm hover:border-cyan/40 hover:text-cyan transition disabled:opacity-50 inline-flex items-center justify-center gap-2">
        <Upload className="h-3.5 w-3.5" />{report ? "Заменить" : "Загрузить PDF"}
      </button>
    </div>
  );
}

function ConsentSection({ kase, onUpload }: { kase: Case; onUpload: (f: File) => Promise<unknown> }) {
  const ref = useRef<HTMLInputElement>(null);

  function downloadTemplate() {
    const blob = new Blob([
      "СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ\n\n" +
      "Я, ________________________________________ (ФИО),\n" +
      "паспорт серия ___ № _______, выдан _________________________________,\n\n" +
      "даю своё согласие ООО «Status Svobody» (ИНН ______________)\n" +
      "на обработку моих персональных данных, включая запрос кредитной истории,\n" +
      "в целях восстановления кредитной истории.\n\n" +
      "Дата: ____________   Подпись: ____________"
    ], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "Согласие_Status_Svobody.txt"; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="rounded-2xl border border-border bg-card/60 p-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">Шаг 2</p>
          <h2 className="display mt-2 text-xl text-foreground">Согласие на обработку</h2>
          <p className="mt-1 text-sm text-muted-foreground">Скачайте бланк, распечатайте, подпишите и загрузите фото или скан.</p>
        </div>
        <button onClick={downloadTemplate} className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-4 py-2 text-sm hover:border-cyan/40 hover:text-cyan transition">
          <Download className="h-4 w-4" /> Скачать бланк
        </button>
      </div>
      <input ref={ref} type="file" accept="application/pdf,image/*" className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(f); e.currentTarget.value = ""; }} />
      <div className="mt-5 flex items-center gap-3 flex-wrap">
        <button onClick={() => ref.current?.click()} className="btn-cyan rounded-sm inline-flex items-center gap-2">
          <Upload className="h-4 w-4" />{kase.consent_uploaded_path ? "Заменить файл" : "Загрузить подписанное"}
        </button>
        {kase.consent_uploaded_path && <span className="inline-flex items-center gap-2 text-sm text-cyan"><Check className="h-4 w-4" /> Согласие получено</span>}
      </div>
    </section>
  );
}

function PaymentSection({ kase, canPay, onPay }: { kase: Case; canPay: boolean; onPay: () => void }) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-6">
      <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">Шаг 3</p>
      <h2 className="display mt-2 text-xl text-foreground">Оплата экспертного анализа</h2>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="display text-3xl text-foreground">5 000 ₽</span>
        <span className="text-sm text-muted-foreground">единоразово</span>
      </div>
      {kase.paid ? (
        <div className="mt-5 inline-flex items-center gap-2 text-sm text-cyan"><Check className="h-4 w-4" /> Оплата проведена</div>
      ) : (
        <button onClick={onPay} disabled={!canPay} className="btn-cyan mt-5 rounded-sm inline-flex items-center gap-2 disabled:opacity-50">
          <CreditCard className="h-4 w-4" /> Оплатить
        </button>
      )}
      {!canPay && !kase.paid && <p className="mt-3 text-xs text-muted-foreground">Доступно после загрузки всех отчётов и подписанного согласия.</p>}
    </section>
  );
}

function AnalysisSection({ kase }: { kase: Case }) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-6">
      <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">Шаг 4</p>
      <h2 className="display mt-2 text-xl text-foreground">Заключение эксперта</h2>
      {kase.analysis_ready && kase.analysis_text ? (
        <article className="mt-4 whitespace-pre-wrap text-sm text-foreground">{kase.analysis_text}</article>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          {kase.paid ? "Юрист готовит заключение. Обычно 1–2 рабочих дня. Уведомим по e-mail." : "Появится после оплаты."}
        </p>
      )}
    </section>
  );
}