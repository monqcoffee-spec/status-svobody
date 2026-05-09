import { Send, MessageCircle } from "lucide-react";

export function FloatingContacts() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/79654457378"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full transition-all"
        style={{
          border: "1px solid color-mix(in oklab, var(--gold-heading) 55%, transparent)",
          background: "color-mix(in oklab, white 75%, var(--silver) 25%)",
          color: "var(--gold-heading-deep)",
          boxShadow: "0 6px 18px -8px color-mix(in oklab, var(--gold-heading) 45%, transparent)",
        }}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="https://t.me/status_svobody_bot"
        target="_blank"
        rel="noopener"
        aria-label="Telegram"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full transition-all"
        style={{
          border: "1px solid color-mix(in oklab, var(--gold-heading) 70%, transparent)",
          background: "color-mix(in oklab, white 75%, var(--silver) 25%)",
          color: "var(--gold-heading-deep)",
          boxShadow: "0 8px 22px -8px color-mix(in oklab, var(--gold-heading) 55%, transparent)",
        }}
      >
        <Send className="h-5 w-5" />
      </a>
    </div>
  );
}
