import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-2xl">
            Mr<span className="text-primary">.</span>Cravings
          </p>
          <p className="mt-3 max-w-xs text-sm text-ink-foreground/70">
            100% vegetarian momos, soya chaap and mojitos from CC Block, Shalimar Bagh,
            New Delhi.
          </p>
          <a
            href="https://www.instagram.com/mr_cravingss"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-base btn-outline mt-6 px-5 py-3 text-sm"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @mr_cravingss
          </a>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2.5 text-ink-foreground/75">
            <li>
              <Link to="/" className="hover:text-ink-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-ink-foreground">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/visit" className="hover:text-ink-foreground">
                Visit Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <p className="eyebrow">Find us</p>
          {/* [CONFIRM WITH CLIENT] exact street address, phone number and hours */}
          <ul className="mt-4 space-y-2.5 text-ink-foreground/75">
            <li>CC Block, DDA Market</li>
            <li>Shalimar Bagh, New Delhi</li>
            <li>Near Jhulelal Mandir</li>
            <li>
              Phone: <span className="text-ink-foreground/50">[CONFIRM WITH CLIENT]</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mr Cravings. All rights reserved.</p>
          <p>Pure vegetarian kitchen · Made fresh to order</p>
        </div>
      </div>
    </footer>
  );
}
