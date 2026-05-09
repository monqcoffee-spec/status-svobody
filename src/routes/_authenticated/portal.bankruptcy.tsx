import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { ArrowLeft, Check, Upload, CircleDashed } from "lucide-react";

type BCase = {
  id: string; marital_status: "single" | "married" | "divorced" | null;
  children_count: number; has_real_estate: boolean; has_vehicle: boolean;
  has_business: boolean; has_deposits: boolean; debt_amount: number | null;
  questionnaire_done: boolean;
};

type Doc = {
  id: string; doc_key: string; doc_label: string; required: boolean;
  file_path: string | null; file_name: string | null; uploaded_at: string | null;
};

export const Route = createFileRoute("/_authenticated/portal/bankruptcy")({
  head: () => ({ meta: [{ title: "Банкротство — Status Svobody" }] }),
  component: BankruptcyModule,
});

function buildChecklist(c: BCase): { key: string; label: string }[] {
  const list = [
    { key: "passport", label: "Паспорт (все страницы)" },
    { key: "snils", label: "СНИЛС" },
    { key: "inn", label: "ИНН" },
    { key: "credits", label: "Список всех кредитов и займов" },
    { key: "income", label: "Справка о доходах за 3 года (2-НДФЛ)" },
    { key: "employment", label: "Копия трудовой книжки" },
  ];
  if (c.marital_status === "married") list.push({ key: "marriage", label: "Свидетельство о браке" });
  if (c.marital_status === "divorced") list.push({ key: "divorce", label: "Свидетельство о расторжении брака" });
  if (c.children_count > 0) list.push({ key: "children", label: "Свидетельства о рождении детей" });
  if (c.has_real_estate) list.push({ key: "realestate", label: "Документы на недвижимость" });
  if (c.has_vehicle) list.push({ key: "vehicle", label: "ПТС / СТС на транспорт" });
  if (c.has_business) list.push({ key: "ip", label: "Выписка из ЕГРИП / документы по бизнесу" });
  if (c.has_deposits) list.push({ key: "deposits", label: "Выписки по банковским счетам и вкладам" });
  return list;
}

function BankruptcyModule() {
  const { user } = useAuth();
  const [kase, setKase] = useState<BCase | null>(null);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    if (!user) return;
    let { data: existing } = await supabase.from("bankruptcy_cases").select("*").eq("user_id", user.id).maybeSingle();
    if (!existing) {
      const ins = await supabase.from("bankruptcy_cases").insert({ user_id: user.id }).select().single();
      existing = ins.data;
    }
    setKase(existing as BCase);
    if (existing) {
      const { data: d } = await supabase.from("bankruptcy_documents").select("*").eq("case_id", existing.id).order("created_at");
      setDocs((d as Doc[]) ?? []);
    }
    setLoading(false);
  }
  useEffect(() => { load(); }, [user]);

  async function saveQuestionnaire(updates: Partial<BCase>) {
    if (!kase) return;
    const { data, error } = await supabase.from("bankruptcy_cases").update({ ...updates, questionnaire_done: true })
      .eq("id", kase.id).select().single();
    if (error || !data) return toast.error(error?.message ?? "Ошибка");
    const updated = data as BCase;
    setKase(updated);

    // sync checklist
    const list = buildChecklist(updated);
    const existingKeys = new Set(docs.map(d => d.doc_key));
    const newOnes = list.filter(l => !existingKeys.has(l.key));
    if (newOnes.length) {
      await supabase.from("bankruptcy_documents").insert(newOnes.map(l => ({
        case_id: kase.id, user_id: user!.id, doc_key: l.key, doc_label: l.label,
      })));
    }
    // remove no-longer-needed (only if not uploaded)
    const wantedKeys = new Set(list.map(l => l.key));
    const stale = docs.filter(d => !wantedKeys.has(d.doc_key) && !d.file_path);
    if (stale.length) await supabase.from("bankruptcy_documents").delete().in("id", stale.map(s => s.id));

    const { data: refreshed } = await supabase.from("bankruptcy_documents").select("*").eq("case_id", kase.id).order("created_at");
    setDocs((refreshed as Doc[]) ?? []);
    toast.success("Чек-лист сформирован");
  }

  async function uploadDoc(doc: Doc, file: File) {
    if (!user || !kase) return;
    const path = `${user.id}/bankruptcy/${kase.id}/${doc.doc_key}-${Date.now()}-${file.name}`;
    const up = await supabase.storage.from("portal-docs").upload(path, file, { upsert: false });
    if (up.error) return toast.error(up.error.message);
    // clean up previous file for this checklist item, if any
    if (doc.file_path && doc.file_path !== path) {
      await supabase.storage.from("portal-docs").remove([doc.file_path]);
    }
    const { data } = await supabase.from("bankruptcy_documents").update({
      file_path: path, file_name: file.name, uploaded_at: new Date().toISOString(),
    }).eq("id", doc.id).select().single();
    if (data) setDocs(prev => prev.map(d => d.id === doc.id ? data as Doc : d));
    toast.success(doc.file_path ? "Файл заменён" : "Файл загружен");
  }

  if (loading) return <div className="text-muted-foreground">Загрузка…</div>;

  return (
    <div className="space-y-8">
      <Link to="/portal" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> Назад
      </Link>
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Модуль 2</p>
        <h1 className="display mt-2 text-3xl md:text-4xl text-foreground">Банкротство</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Заполните анкету — система соберёт персональный список документов.</p>
      </header>

      <Questionnaire kase={kase!} onSave={saveQuestionnaire} />
      {kase!.questionnaire_done && <Checklist docs={docs} onUpload={uploadDoc} />}
    </div>
  );
}

function Questionnaire({ kase, onSave }: { kase: BCase; onSave: (u: Partial<BCase>) => Promise<unknown> }) {
  const [marital, setMarital] = useState<"single" | "married" | "divorced">(kase.marital_status ?? "single");
  const [children, setChildren] = useState(kase.children_count);
  const [realEstate, setRealEstate] = useState(kase.has_real_estate);
  const [vehicle, setVehicle] = useState(kase.has_vehicle);
  const [business, setBusiness] = useState(kase.has_business);
  const [deposits, setDeposits] = useState(kase.has_deposits);
  const [debt, setDebt] = useState(kase.debt_amount?.toString() ?? "");
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await onSave({
      marital_status: marital, children_count: Math.max(0, parseInt(children as any) || 0),
      has_real_estate: realEstate, has_vehicle: vehicle, has_business: business, has_deposits: deposits,
      debt_amount: debt ? Number(debt) : null,
    });
    setSaving(false);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card/60 p-6 space-y-6">
      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">Анкета</p>
        <h2 className="display mt-2 text-xl text-foreground">Расскажите о себе</h2>
      </div>

      <div>
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Семейное положение</span>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {([["single", "Не в браке"], ["married", "В браке"], ["divorced", "В разводе"]] as const).map(([k, l]) => (
            <button key={k} type="button" onClick={() => setMarital(k)}
              className={`rounded-sm border px-3 py-2 text-sm transition ${marital === k ? "border-cyan bg-cyan/10 text-cyan" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {l}
            </button>
          ))}
        </div>
      </div>

      <Field label="Дети (количество)">
        <input type="number" min={0} value={children} onChange={(e) => setChildren(Number(e.target.value))} className="lead-input tabular w-32" />
      </Field>

      <Field label="Сумма задолженности, ₽ (опционально)">
        <input type="number" min={0} value={debt} onChange={(e) => setDebt(e.target.value)} className="lead-input tabular w-48" />
      </Field>

      <div className="space-y-2">
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Активы</span>
        <Toggle checked={realEstate} onChange={setRealEstate} label="Недвижимость" />
        <Toggle checked={vehicle} onChange={setVehicle} label="Транспорт" />
        <Toggle checked={business} onChange={setBusiness} label="ИП / бизнес" />
        <Toggle checked={deposits} onChange={setDeposits} label="Банковские вклады/счета" />
      </div>

      <button type="submit" disabled={saving} className="btn-cyan rounded-sm disabled:opacity-60">
        {saving ? "Сохраняем…" : kase.questionnaire_done ? "Обновить чек-лист" : "Сформировать чек-лист"}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center justify-between rounded-sm border border-border bg-background px-4 py-3 cursor-pointer hover:border-cyan/40 transition">
      <span className="text-sm text-foreground">{label}</span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-4 w-4 accent-cyan" />
    </label>
  );
}

function Checklist({ docs, onUpload }: { docs: Doc[]; onUpload: (d: Doc, f: File) => Promise<unknown> }) {
  const remaining = docs.filter(d => !d.file_path).length;
  const total = docs.length;
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-6">
      <div className="flex items-baseline justify-between flex-wrap gap-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">Чек-лист</p>
          <h2 className="display mt-2 text-xl text-foreground">Документы для дела</h2>
        </div>
        <span className="text-sm text-muted-foreground tabular">{total - remaining} / {total} загружено</span>
      </div>
      <ol className="mt-5 space-y-2">
        {docs.map(d => <ChecklistRow key={d.id} doc={d} onUpload={onUpload} />)}
      </ol>
    </section>
  );
}

function ChecklistRow({ doc, onUpload }: { doc: Doc; onUpload: (d: Doc, f: File) => Promise<unknown> }) {
  const ref = useRef<HTMLInputElement>(null);
  const done = !!doc.file_path;
  return (
    <li className={`flex items-center justify-between gap-3 rounded-sm border px-4 py-3 transition ${done ? "border-cyan/40 bg-cyan/5 opacity-70" : "border-border bg-background"}`}>
      <div className="flex items-center gap-3 min-w-0">
        {done ? <Check className="h-4 w-4 shrink-0 text-cyan" /> : <CircleDashed className="h-4 w-4 shrink-0 text-muted-foreground" />}
        <div className="min-w-0">
          <div className={`text-sm truncate ${done ? "line-through text-muted-foreground" : "text-foreground"}`}>{doc.doc_label}</div>
          {doc.file_name && <div className="text-xs text-muted-foreground truncate">{doc.file_name}</div>}
        </div>
      </div>
      <input ref={ref} type="file" accept="application/pdf,image/*" className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onUpload(doc, f); e.currentTarget.value = ""; }} />
      <button onClick={() => ref.current?.click()}
        className="shrink-0 inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-xs hover:border-cyan/40 hover:text-cyan transition">
        <Upload className="h-3 w-3" />{done ? "Заменить" : "Загрузить"}
      </button>
    </li>
  );
}