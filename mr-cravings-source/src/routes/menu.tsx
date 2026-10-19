import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { OrderBand } from "@/components/OrderBand";
import { categories } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Momos, Soya Chaap, Rolls & Mojitos | Mr Cravings" },
      {
        name: "description",
        content:
          "Browse the full Mr Cravings menu: paneer and whole-wheat momos, malai and achari soya chaap, chaap rolls, Amritsari nutri kulcha, peri peri fries and mojitos.",
      },
      { property: "og:title", content: "The Mr Cravings Menu — 100% Vegetarian" },
      {
        property: "og:description",
        content: "Momos, soya chaap, rolls, kulcha, fries and mojitos — all meat-free.",
      },
    ],
  }),
  component: MenuPage,
});

type Tab = "food" | "beverages";
type Diet = "veg" | "non-veg";

function MenuPage() {
  const [tab, setTab] = useState<Tab>("food");
  const [diet, setDiet] = useState<Diet>("veg");

  const shown = categories.filter((c) => c.group === tab);
  const showEmptyState = tab === "food" && diet === "non-veg";

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:pt-24">
          <Reveal>
            <p className="eyebrow">Made to order · No frozen shortcuts</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.02] sm:text-6xl">
              The menu.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground">
              A fully vegetarian kitchen. Pick a category, or scroll and let the pictures
              decide for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky controls */}
      <div className="sticky top-[62px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 py-3">
          <div
            role="tablist"
            aria-label="Menu sections"
            className="flex gap-1 rounded-full bg-secondary p-1"
          >
            {(["food", "beverages"] as Tab[]).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`flex-1 rounded-full px-4 py-2.5 text-sm font-bold capitalize transition-colors ${
                  tab === t ? "bg-ink text-ink-foreground" : "text-muted-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "food" && (
            <div className="mt-3 flex gap-2">
              {(["veg", "non-veg"] as Diet[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDiet(d)}
                  aria-pressed={diet === d}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                    diet === d
                      ? "border-mint bg-mint text-mint-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {d === "veg" ? "Veg" : "Non-Veg"}
                </button>
              ))}
            </div>
          )}

          {!showEmptyState && (
            <nav aria-label="Jump to category" className="mt-3 flex flex-wrap gap-2">
              {shown.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {c.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      {showEmptyState ? (
        <section className="mx-auto max-w-xl px-5 py-24 text-center sm:py-32">
          <Leaf className="mx-auto h-9 w-9 text-mint" aria-hidden="true" />
          <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
            We keep it 100% vegetarian — every dish on this menu is meat-free.
          </p>
          <button onClick={() => setDiet("veg")} className="btn-base btn-primary mt-8">
            Show the veg menu
          </button>
        </section>
      ) : (
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          {shown.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-56 pb-16 last:pb-0">
              <Reveal className="flex items-baseline gap-4">
                <h2 className="font-display text-2xl sm:text-3xl">{cat.label}</h2>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <span className="text-xs font-bold text-muted-foreground">
                  {cat.items.length} items
                </span>
              </Reveal>

              <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={Math.min(i, 5) * 60}>
                    <a
                      href="#order-now"
                      className="tilt-card group flex h-full gap-4 rounded-lg border border-border bg-card p-3"
                    >
                      <img
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        width={900}
                        height={1100}
                        className="h-24 w-24 shrink-0 rounded-md object-cover"
                      />
                      <div className="min-w-0 py-1">
                        <h3 className="font-display text-lg leading-tight">{item.name}</h3>
                        <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                          {item.note}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <OrderBand
        headline="Picked your poison?"
        copy="Order it in, or walk over to CC Block and eat it hot off the tandoor."
      />
    </>
  );
}
