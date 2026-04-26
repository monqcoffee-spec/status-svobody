import { Send, MessageCircle } from "lucide-react";

export function FloatingContacts() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/79654457378"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="https://t.me/status_svobody_bot"
        target="_blank"
        rel="noopener"
        aria-label="Telegram"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition-transform hover:scale-105"
      >
        <Send className="h-5 w-5" />
      </a>
    </div>
  );
}