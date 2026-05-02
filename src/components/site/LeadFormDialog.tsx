import { useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { submitLead } from "@/server/leads.functions";

type Props = {
  source?: string;
  trigger: ReactNode;
  /** Optional override for the dialog headline */
  headline?: string;
};

type Errors = Partial<Record<"name" | "phone" | "debtAmount", string>>;

export function LeadFormDialog({ source = "index", trigger, headline }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [debt, setDebt] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submitLeadFn = useServerFn(submitLead);

  function reset() {
    setName("");
    setPhone("");
    setDebt("");
    setErrors({});
    setDone(false);
  }

  function validate(): { ok: true; debtAmount: number } | { ok: false } {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Введите имя";
    if (phone.trim().length < 7) next.phone = "Введите телефон";
    else if (!/^[+\d\s\-()]+$/.test(phone.trim()))
      next.phone = "Только цифры и +-() ";

    const cleaned = debt.replace(/[^\d]/g, "");
    const amount = Number(cleaned);
    if (!cleaned || !Number.isFinite(amount) || amount < 10000)
      next.debtAmount = "Минимум 10 000 ₽";

    setErrors(next);
    if (Object.keys(next).length > 0) return { ok: false };
    return { ok: true, debtAmount: amount };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (!v.ok) return;

    setLoading(true);
    try {
      const res = await submitLeadFn({
        data: {
          name: name.trim(),
          phone: phone.trim(),
          debtAmount: v.debtAmount,
          source,
        },
      });
      if (res.ok) {
        setDone(true);
        toast.success("Заявка принята. Свяжемся в течение часа.");
      } else {
        toast.error(res.error ?? "Не удалось отправить");
      }
    } catch (err) {
      console.error(err);
      toast.error("Сетевая ошибка. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  function formatDebt(value: string) {
    const digits = value.replace(/[^\d]/g, "").slice(0, 12);
    if (!digits) return "";
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="border border-white/10 bg-ink-deep p-0 sm:max-w-[480px]">
        <div className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 80% 0%, color-mix(in oklab, var(--cyan) 14%, transparent), transparent 70%)",
            }}
          />

          {done ? (
            <div className="px-8 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan/40 bg-cyan/5">
                <Check className="h-6 w-6 text-cyan" />
              </div>
              <DialogHeader className="mt-6">
                <DialogTitle className="display text-2xl text-silver">
                  Заявка принята
                </DialogTitle>
                <DialogDescription className="text-silver-dim">
                  Свяжемся с вами в течение часа в рабочее время.
                  Никаких звонков с неизвестных номеров — только по указанному телефону.
                </DialogDescription>
              </DialogHeader>
              <button
                onClick={() => setOpen(false)}
                className="btn-ghost mt-8 inline-flex rounded-sm"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-8 py-8">
              <DialogHeader className="text-left">
                <div className="font-display text-xs tabular tracking-[0.3em] text-cyan">
                  ЗАЯВКА
                </div>
                <DialogTitle className="display mt-3 text-2xl text-silver md:text-3xl">
                  {headline ?? "Свяжемся в течение часа"}
                </DialogTitle>
                <DialogDescription className="mt-2 text-silver-dim">
                  Без звонков с неизвестных номеров. Без скрытых платежей.
                  Первая консультация — бесплатно.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8 space-y-5">
                <Field
                  label="Имя"
                  error={errors.name}
                  input={
                    <input
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="lead-input"
                      placeholder="Как к вам обращаться"
                    />
                  }
                />
                <Field
                  label="Телефон"
                  error={errors.phone}
                  input={
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="lead-input tabular"
                      placeholder="+7 ___ ___ __ __"
                    />
                  }
                />
                <Field
                  label="Сумма долга, ₽"
                  error={errors.debtAmount}
                  input={
                    <input
                      type="text"
                      inputMode="numeric"
                      value={debt}
                      onChange={(e) => setDebt(formatDebt(e.target.value))}
                      className="lead-input tabular"
                      placeholder="например, 1 500 000"
                    />
                  }
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-cyan group mt-8 w-full justify-center rounded-sm disabled:opacity-60"
              >
                <span>{loading ? "Отправляем…" : "Оставить заявку"}</span>
                {!loading && (
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </button>

              <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                Данные защищены · не передаём третьим лицам
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
        {label}
      </span>
      <div className="mt-2">{input}</div>
      {error ? (
        <span className="mt-1 block text-xs text-red-400">{error}</span>
      ) : null}
    </label>
  );
}