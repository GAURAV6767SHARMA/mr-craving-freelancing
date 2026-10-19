import { MessageCircle } from "lucide-react";
import { ZOMATO_URL, SWIGGY_URL, whatsappUrl } from "@/lib/contact";

/** Zomato / Swiggy / WhatsApp ordering buttons with staggered entrance. */
export function OrderActions({
  align = "start",
  variant = "light",
}: {
  align?: "start" | "center";
  variant?: "light" | "dark";
}) {
  const zomato = variant === "dark" ? "btn-primary" : "btn-zomato";
  const swiggy = variant === "dark" ? "btn-ink" : "btn-swiggy";

  return (
    <div
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}
    >
      <a
        href={ZOMATO_URL}
        target="_blank"
        rel="noreferrer noopener"
        className={`btn-base ${zomato} pop-in`}
        style={{ animationDelay: "0ms" }}
      >
        Order on Zomato
      </a>
      <a
        href={SWIGGY_URL}
        target="_blank"
        rel="noreferrer noopener"
        className={`btn-base ${swiggy} pop-in`}
        style={{ animationDelay: "90ms" }}
      >
        Order on Swiggy
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="btn-base btn-whatsapp pop-in"
        style={{ animationDelay: "180ms" }}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp Us
      </a>
    </div>
  );
}
