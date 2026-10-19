import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function SiteHeader() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        condensed
          ? "border-border bg-background/90 py-2 backdrop-blur-md"
          : "border-transparent bg-background py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="font-display text-xl leading-none tracking-tight sm:text-2xl">
          Mr<span className="text-primary">.</span>Cravings
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#order-now" className="btn-base btn-primary hidden px-5 py-3 sm:inline-flex">
            Order Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 border-t border-border px-5 pt-3 pb-2 md:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-1 py-2.5 text-base font-semibold text-muted-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#order-now"
            onClick={() => setOpen(false)}
            className="btn-base btn-primary mt-2 w-full"
          >
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
}
