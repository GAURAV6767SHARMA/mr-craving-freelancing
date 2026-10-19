import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

/** Prominent tap-to-chat WhatsApp bar — mobile only, slides up after a beat. */
export function WhatsAppFab() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-4 transition-all duration-500 ease-out md:hidden ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with Mr Cravings on WhatsApp"
        className="btn-base btn-whatsapp whatsapp-glow w-full py-4 text-base shadow-lg"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-current opacity-40" />
          <MessageCircle className="relative h-5 w-5" aria-hidden="true" />
        </span>
        Chat on WhatsApp
      </a>
    </div>
  );
}
