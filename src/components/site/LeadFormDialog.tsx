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

type Errors = Partial<
  Record<"name" | "phone" | "email" | "contact" | "preferredTime" | "message", string>
>;

export function LeadFormDialog({ source = "index", trigger, headline }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submitLeadFn = useServerFn(submitLead);

  function reset() {
    setName("");
    setPhone("");
    setEmail("");
    setPreferredTime("");
    setMessage("");
    setErrors({});
    setDone(false);
  }

  function validate(): boolean {
    const next: Errors = {};
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    const trimmedTime = preferredTime.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) next.name = "Введите имя";
    else if (trimmedName.length > 80) next.name = "Слишком длинное имя";

    const hasPhone = trimmedPhone.length > 0;
    const hasEmail = trimmedEmail.length > 0;

    if (!hasPhone && !hasEmail) {
      next.contact = "Укажите телефон или e-mail";
    }
    if (hasPhone) {
      if (trimmedPhone.length < 7) next.phone = "Слишком короткий телефон";
      else if (trimmedPhone.length > 32) next.phone = "Слишком длинный телефон";
      else if (!/^[+\d\s\-()]+$/.test(trimmedPhone))
        next.phone = "Только цифры и +-() ";
    }
    if (hasEmail) {
      if (trimmedEmail.length > 255) next.email = "Слишком длинный e-mail";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail))
        next.email = "Некорректный e-mail";
    }
    if (trimmedTime.length > 120) next.preferredTime = "Слишком длинный текст";
    if (trimmedMessage.length > 1000) next.message = "Не более 1000 символов";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await submitLeadFn({
        data: {
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          preferredTime: preferredTime.trim(),
          message: message.trim(),
          source,
        },
      });
      if (res.ok) {
        setDone(true);
        toast.success("Заявка отправлена. Свяжемся в течение часа.");
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
                  Свяжемся с вами в течение часа в рабочее время —
                  по указанному телефону или e-mail. Без колл-центров.
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
            <form onSubmit={handleSubmit} noValidate className="px-8 py-8">
              <DialogHeader className="text-left">
                <div className="font-display text-xs tabular tracking-[0.3em] text-cyan">
                  КОНСУЛЬТАЦИЯ
                </div>
                <DialogTitle className="display mt-3 text-2xl text-silver md:text-3xl">
                  {headline ?? "Заявка на консультацию"}
                </DialogTitle>
                <DialogDescription className="mt-2 text-silver-dim">
                  Свяжемся в течение часа в удобное время —
                  без звонков с неизвестных номеров и скрытых платежей.
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
                      maxLength={80}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="lead-input"
                      placeholder="Как к вам обращаться"
                    />
                  }
                />
                <Field
                  label="Телефон"
                  error={errors.phone ?? errors.contact}
                  input={
                    <input
                      type="tel"
                      autoComplete="tel"
                      maxLength={32}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="lead-input tabular"
                      placeholder="+7 ___ ___ __ __"
                    />
                  }
                />
                <Field
                  label="E-mail (опционально)"
                  error={errors.email}
                  input={
                    <input
                      type="email"
                      autoComplete="email"
                      maxLength={255}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="lead-input"
                      placeholder="name@example.com"
                    />
                  }
                />
                <Field
                  label="Удобное время"
                  error={errors.preferredTime}
                  input={
                    <input
                      type="text"
                      maxLength={120}
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="lead-input"
                      placeholder="Например, будни до 12:00 (МСК)"
                    />
                  }
                />
                <Field
                  label="Кратко о вопросе (опционально)"
                  error={errors.message}
                  input={
                    <textarea
                      rows={3}
                      maxLength={1000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="lead-input resize-none"
                      placeholder="Опишите ситуацию в нескольких словах"
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