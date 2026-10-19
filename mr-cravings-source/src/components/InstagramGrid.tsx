import { Instagram } from "lucide-react";
import malai from "@/assets/malai-chaap.jpg";
import kulcha from "@/assets/nutri-kulcha.jpg";
import momos from "@/assets/paneer-momos.jpg";
import roll from "@/assets/afghani-roll.jpg";
import fries from "@/assets/peri-fries.jpg";
import mojitos from "@/assets/mojitos.jpg";

const IG = "https://www.instagram.com/mr_cravingss";

/** Placeholder posts — replace with live Instagram embeds when the client connects the account. */
export const posts = [
  { src: malai, alt: "Malai chaap skewer close-up, cream marinade with light char" },
  { src: momos, alt: "Steamed paneer momos in a basket with red chutney, steam rising" },
  { src: kulcha, alt: "Amritsari nutri kulcha with spiced chickpea gravy and melting butter" },
  { src: roll, alt: "Afghani chaap roll cut open, creamy chaap and onions in a paper wrap" },
  { src: fries, alt: "Peri peri fries in a paper cone dusted with red spice" },
  { src: mojitos, alt: "Three mojitos with mint and lime: virgin, watermelon and blueberry" },
];

export function InstagramFollowButton({ variant = "ink" }: { variant?: "ink" | "primary" }) {
  return (
    <a
      href={IG}
      target="_blank"
      rel="noreferrer noopener"
      className={`btn-base ${variant === "ink" ? "btn-ink" : "btn-primary"}`}
    >
      <Instagram className="h-4 w-4" aria-hidden="true" />
      Follow @mr_cravingss
    </a>
  );
}

export { IG as instagramUrl };
