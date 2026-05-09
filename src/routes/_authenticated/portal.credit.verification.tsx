import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { ArrowLeft, Check, AlertTriangle, Clock, Download, FileDown, History } from "lucide-react";
import jsPDF from "jspdf";
import { toast } from "sonner";
import { robotoBase64 as robotoRegular } from "@/assets/fonts/roboto-regular";
import { robotoBase64 as robotoBold } from "@/assets/fonts/roboto-bold";

const BUREAU_LABEL: Record<string, string> = {
  nbki: "НБКИ",
  okb: "ОКБ",
  sb: "Скоринг Бюро",
};

type Report = {
  id: string; bureau: string; file_name: string; file_path: string;
  verified: boolean; verification_status: "pending" | "ok" | "mismatch" | "unreadable";
  verification_notes: string | null; created_at: string;
};

type HistoryItem = {
  id: string; report_id: string; bureau: string;
  status: string; notes: string | null; model: string | null; created_at: string;
};

export const Route = createFileRoute("/_authenticated/portal/credit/verification")({
  head: () => ({ meta: [{ title: "AI-проверка отчётов — Status Svobody" }] }),
  component: VerificationPage,
});

function statusUI(s: string) {
  if (s === "ok") return { icon: <Check className="h-4 w-4" />, cls: "text-cyan", label: "Принят" };
  if (s === "pending") return { icon: <Clock className="h-4 w-4" />, cls: "text-muted-foreground", label: "В обработке" };
  if (s === "mismatch") return { icon: <AlertTriangle className="h-4 w-4" />, cls: "text-amber-400", label: "Не то бюро" };
  return { icon: <AlertTriangle className="h-4 w-4" />, cls: "text-amber-400", label: "Нечитаемо" };
}

function fmt(d: string) {
  return new Date(d).toLocaleString("ru-RU", { dateStyle: "medium", timeStyle: "short" });
}

function VerificationPage() {
  const { user } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data: cases } = await supabase.from("credit_cases").select("id").eq("user_id", user.id).maybeSingle();
      if (!cases) { setLoading(false); return; }
      const [{ data: r }, { data: h }] = await Promise.all([
        supabase.from("credit_reports").select("*").eq("case_id", cases.id).order("created_at"),
        supabase.from("credit_report_verifications").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);
      setReports((r as Report[]) ?? []);
      setHistory((h as HistoryItem[]) ?? []);
      setLoading(false);
    })();
  }, [user]);

  function downloadPdf() {
    if (!reports.length) return toast.error("Нет данных для заключения");
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    // Embed Roboto (Cyrillic-capable) so the PDF renders Russian correctly.
    doc.addFileToVFS("Roboto-Regular.ttf", robotoRegular);
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
    doc.addFileToVFS("Roboto-Bold.ttf", robotoBold);
    doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");
    doc.setFont("Roboto", "normal");

    let y = 60;
    const left = 48;
    const lineH = 16;
    doc.setFont("Roboto", "bold");
    doc.setFontSize(16);
    doc.text("Status Svobody — Заключение AI-верификации", left, y); y += 28;
    doc.setFont("Roboto", "normal");
    doc.setFontSize(10);
    doc.text(`Пользователь: ${user?.email ?? "—"}`, left, y); y += lineH;
    doc.text(`Сформировано: ${new Date().toLocaleString("ru-RU")}`, left, y); y += lineH * 2;

    doc.setFont("Roboto", "bold");
    doc.setFontSize(12);
    doc.text("Текущий статус отчётов", left, y); y += lineH + 4;
    doc.setFont("Roboto", "normal");
    doc.setFontSize(10);
    for (const r of reports) {
      const s = statusUI(r.verification_status).label;
      doc.text(`• ${BUREAU_LABEL[r.bureau] ?? r.bureau} — ${s}  ·  файл: ${r.file_name}`, left, y);
      y += lineH;
      if (r.verification_notes) {
        const wrapped = doc.splitTextToSize(`Комментарий: ${r.verification_notes}`, 500);
        doc.text(wrapped, left + 10, y);
        y += lineH * wrapped.length;
      }
      y += 4;
      if (y > 760) { doc.addPage(); y = 60; }
    }

    y += 10;
    doc.setFont("Roboto", "bold");
    doc.setFontSize(12);
    doc.text("История проверок", left, y); y += lineH + 4;
    doc.setFont("Roboto", "normal");
    doc.setFontSize(10);
    for (const h of history) {
      const line = `${fmt(h.created_at)} · ${BUREAU_LABEL[h.bureau] ?? h.bureau} · ${statusUI(h.status).label}`;
      doc.text(line, left, y); y += lineH;
      if (h.notes) {
        const wrapped = doc.splitTextToSize(h.notes, 500);
        doc.text(wrapped, left + 10, y);
        y += lineH * wrapped.length;
      }
      y += 2;
      if (y > 780) { doc.addPage(); y = 60; }
    }

    doc.save(`status-svobody-verification-${Date.now()}.pdf`);
  }

  function downloadTxt() {
    const lines: string[] = [];
    lines.push("Status Svobody — Заключение AI-верификации");
    lines.push(`Пользователь: ${user?.email ?? "-"}`);
    lines.push(`Сформировано: ${new Date().toLocaleString("ru-RU")}`);
    lines.push("");
    lines.push("=== Текущий статус отчётов ===");
    for (const r of reports) {
      lines.push(`• ${BUREAU_LABEL[r.bureau] ?? r.bureau} — ${statusUI(r.verification_status).label}`);
      lines.push(`  файл: ${r.file_name}`);
      if (r.verification_notes) lines.push(`  комментарий: ${r.verification_notes}`);
      lines.push("");
    }
    lines.push("=== История проверок ===");
    for (const h of history) {
      lines.push(`${fmt(h.created_at)} · ${BUREAU_LABEL[h.bureau] ?? h.bureau} · ${h.status}`);
      if (h.notes) lines.push(`  ${h.notes}`);
    }
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `status-svobody-verification-${Date.now()}.txt`; a.click();
    URL.revokeObjectURL(url);
  }

  async function downloadOriginal(r: Report) {
    const { data, error } = await supabase.storage.from("portal-docs").createSignedUrl(r.file_path, 60);
    if (error || !data) return toast.error("Не удалось получить файл");
    window.open(data.signedUrl, "_blank");
  }

  if (loading) return <div className="text-muted-foreground">Загрузка…</div>;

  return (
    <div className="space-y-8">
      <Link to="/portal/credit" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> К модулю
      </Link>
      <header className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">AI-проверка</p>
          <h1 className="display mt-2 text-3xl md:text-4xl text-foreground">Результаты верификации</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Развёрнутый отчёт по каждой загрузке и полная история проверок документов кредитного бюро.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={downloadPdf} className="btn-cyan rounded-sm inline-flex items-center gap-2">
            <FileDown className="h-4 w-4" /> Скачать PDF
          </button>
          <button onClick={downloadTxt} className="rounded-sm border border-border bg-background px-4 py-2 text-sm hover:border-cyan/40 hover:text-cyan transition inline-flex items-center gap-2">
            <Download className="h-4 w-4" /> Скачать TXT
          </button>
        </div>
      </header>

      {reports.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card/40 p-8 text-center text-muted-foreground">
          Отчёты ещё не загружены. <Link to="/portal/credit" className="text-cyan hover:underline">Перейти к загрузке</Link>.
        </div>
      ) : (
        <section className="grid gap-4 md:grid-cols-3">
          {reports.map((r) => {
            const s = statusUI(r.verification_status);
            const reportHistory = history.filter((h) => h.report_id === r.id);
            return (
              <article key={r.id} className={`rounded-2xl border p-5 ${r.verified ? "border-cyan/40 bg-cyan/5" : "border-border bg-card/60"}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-cyan">{BUREAU_LABEL[r.bureau] ?? r.bureau}</div>
                    <div className="mt-1 truncate text-xs text-muted-foreground" title={r.file_name}>{r.file_name}</div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs ${s.cls}`}>{s.icon}{s.label}</span>
                </div>
                {r.verification_notes && (
                  <p className="mt-4 text-sm text-foreground/90">{r.verification_notes}</p>
                )}
                <button onClick={() => downloadOriginal(r)} className="mt-5 inline-flex items-center gap-2 text-xs text-cyan hover:underline">
                  <Download className="h-3 w-3" /> Скачать оригинал
                </button>
                {reportHistory.length > 1 && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
                      История ({reportHistory.length})
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {reportHistory.map((h) => (
                        <li key={h.id} className="rounded-sm border border-border/60 bg-background/40 p-2 text-xs">
                          <div className="flex items-center justify-between gap-2 text-muted-foreground">
                            <span>{fmt(h.created_at)}</span>
                            <span className={statusUI(h.status).cls}>{statusUI(h.status).label}</span>
                          </div>
                          {h.notes && <p className="mt-1 text-foreground/80">{h.notes}</p>}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            );
          })}
        </section>
      )}

      {history.length > 0 && (
        <section className="rounded-2xl border border-border bg-card/40 p-6">
          <div className="flex items-center gap-2 text-cyan">
            <History className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-[0.3em]">Полный журнал проверок</span>
          </div>
          <ul className="mt-5 divide-y divide-border/60">
            {history.map((h) => {
              const s = statusUI(h.status);
              return (
                <li key={h.id} className="py-3 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-sm text-foreground">
                      <span className="text-cyan">{BUREAU_LABEL[h.bureau] ?? h.bureau}</span>
                      <span className="text-muted-foreground"> · {fmt(h.created_at)}</span>
                    </div>
                    {h.notes && <p className="mt-1 text-xs text-muted-foreground">{h.notes}</p>}
                    {h.model && <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">{h.model}</p>}
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs whitespace-nowrap ${s.cls}`}>{s.icon}{s.label}</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}