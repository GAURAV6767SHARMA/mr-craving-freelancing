/**
 * Single source of truth for ordering + contact links.
 * [CONFIRM WITH CLIENT] Replace WHATSAPP_NUMBER, ZOMATO_URL and SWIGGY_URL
 * with the live values before launch.
 */

/** Digits only, with country code, no "+" or spaces (wa.me format). */
export const WHATSAPP_NUMBER = "919999999999";

export const WHATSAPP_MESSAGE =
  "Hi Mr Cravings! I have a quick question about ordering.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const phoneUrl = `tel:+${WHATSAPP_NUMBER}`;

export const ZOMATO_URL = "https://www.zomato.com/";
export const SWIGGY_URL = "https://www.swiggy.com/";
