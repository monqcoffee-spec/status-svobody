import { useState, type ReactNode } from "react";
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

type Props = {
  source?: string;
  trigger: ReactNode;
  headline?: string;
};

type Errors = Partial<
  Record<"name" | "phone" | "email" | "contact" | "message" | "consent", string>
>;

export function LeadFormDialog({ source = "index", trigger, headline }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function reset() {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setConsent(false);
    setErrors({});
    setDone(false);
  }

  function validate(): boolean {
    const next: Errors = {};
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
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

    if (trimmedMessage.length > 1000) next.message = "Не более 1000 символов";
    if (!consent) next.consent = "Необходимо согласие на обработку данных";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setDone(true);

      toast.success("Заявка отправлена. Свяжемся в течение часа.");
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

      <DialogContent className="liquid-glass p-0 sm:max-w-[480px]">
        <div className="relative overflow-hidden">
          {done ? (
            <div className="px-6 sm:px-8 py-10 sm:py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan/40 bg-cyan/5">
                <Check className="h-6 w-6 text-cyan" />
              </div>

              <DialogHeader className="mt-6">
                <DialogTitle className="display text-xs text-silver">
                  Заявка принята
                </DialogTitle>

                <DialogDescription className="text-silver-dim">
                  Свяжемся с вами в течение часа.
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
            <form
              onSubmit={handleSubmit}
              noValidate
              className="px-6 sm:px-8 py-7 sm:py-8"
            >
              <DialogHeader className="text-left">
                <div className="font-display text-xs tabular tracking-[0.3em] text-cyan">
                  КОНСУЛЬТАЦИЯ
                </div>

                <DialogTitle className="display mt-3 text-xs text-silver md:text-[0.9375rem]">
                  {headline ?? "Заявка на консультацию"}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-8 space-y-5">
                <Field
                  label="Имя"
                  error={errors.name}
                  input={
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="lead-input"
                    />
                  }
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-cyan group mt-8 w-full justify-center rounded-sm disabled:opacity-60"
              >
                <span>
                  {loading ? "Отправляем…" : "Оставить заявку"}
                </span>

                {!loading && (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </button>
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
        <span className="mt-1 block text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </label>
  );
}
