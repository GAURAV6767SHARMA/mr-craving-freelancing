import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Sparkles, IndianRupee, Star, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { OrderBand } from "@/components/OrderBand";
import { InstagramFollowButton, posts, instagramUrl } from "@/components/InstagramGrid";
import hero from "@/assets/hero.jpg";
import malai from "@/assets/malai-chaap.jpg";
import kulcha from "@/assets/nutri-kulcha.jpg";
import momos from "@/assets/paneer-momos.jpg";
import roll from "@/assets/afghani-roll.jpg";
import fries from "@/assets/peri-fries.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr Cravings — Momos, Soya Chaap & Mojitos in Shalimar Bagh" },
      {
        name: "description",
        content:
          "100% vegetarian street food in Shalimar Bagh, Delhi. Hand-folded momos, soya chaap, Amritsari nutri kulcha and fresh mojitos, made to order.",
      },
      { property: "og:title", content: "Mr Cravings — Delhi's Cravings, Solved Fresh Daily" },
      {
        property: "og:description",
        content:
          "Handmade momos, sizzling soya chaap and mojitos that hit different — all 100% vegetarian.",
      },
    ],
  }),
  component: Home,
});

const signatures = [
  { name: "Malai Chaap", img: malai, alt: "Malai chaap skewer close-up, cream marinade with light char" },
  { name: "Nutri Kulcha", img: kulcha, alt: "Amritsari nutri kulcha with spiced chickpea gravy and melting butter" },
  { name: "Paneer Momos", img: momos, alt: "Steamed paneer momos in a basket with red chutney, steam rising" },
  { name: "Afghani Chaap Roll", img: roll, alt: "Afghani chaap roll cut open, creamy chaap and onions in a paper wrap" },
  { name: "Peri Peri Fries", img: fries, alt: "Peri peri fries in a paper cone dusted with red spice" },
];

const values = [
  {
    icon: Leaf,
    title: "100% Pure Vegetarian",
    copy: "Every dish, every day. No exceptions in our kitchen.",
  },
  {
    icon: Sparkles,
    title: "Hygiene First",
    copy: "Fresh prep, clean stations, everything made to order.",
  },
  {
    icon: IndianRupee,
    title: "Budget Friendly",
    copy: "Big flavour at honest prices — snacks to full plates.",
  },
];

const praise = [
  "A neighbourhood favourite for whole-wheat momos and creamy malai chaap.",
  "Loved for bold spicing, generous portions and honest pricing.",
  "The mojito range turns a quick snack stop into a proper hangout.",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="Close-up of steaming tandoori paneer momos and charred soya chaap skewers"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-ink/70 sm:bg-gradient-to-r sm:from-ink sm:via-ink/80 sm:to-ink/20"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36 lg:py-44">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary-foreground/80">Shalimar Bagh · New Delhi</p>
            <h1 className="mt-5 font-display text-[2.75rem] leading-[0.98] sm:text-6xl lg:text-7xl">
              Delhi's cravings, solved fresh daily.
            </h1>
            <p className="mt-6 max-w-xl text-base text-ink-foreground/80 sm:text-lg">
              Handmade momos, sizzling soya chaap, and mojitos that hit different — all
              100% vegetarian, all made to order.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {/* Placeholder: replace with the live Zomato / Swiggy storefront link */}
              <a href="#order-now" className="btn-base btn-primary">
                Order Now
              </a>
              <Link to="/menu" className="btn-base btn-outline">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The regulars order these</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Signature dishes</h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary"
          >
            Full menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {signatures.map((dish, i) => (
            <Reveal
              as="li"
              key={dish.name}
              delay={i * 70}
              className={i === 4 ? "col-span-2 lg:col-span-1" : ""}
            >
              <Link to="/menu" className="tilt-card group block">
                <div className="overflow-hidden rounded-lg bg-muted">
                  <img
                    src={dish.img}
                    alt={dish.alt}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <p className="mt-3 font-display text-lg leading-tight">{dish.name}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* WHY */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Why Mr Cravings</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl sm:text-4xl">
              Street food standards, kitchen-grade care.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 90}>
                <v.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => (
              <Star key={n} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="mt-4 text-sm font-bold tracking-wide text-muted-foreground uppercase">
            Loved across Google, Zomato &amp; Swiggy
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {praise.map((line, i) => (
            <Reveal as="li" key={line} delay={i * 90}>
              <blockquote className="h-full rounded-lg border border-border bg-card p-6">
                <p className="font-display text-lg leading-snug">“{line}”</p>
                <footer className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Paraphrased from public reviews
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* INSTAGRAM */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">@mr_cravingss</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Follow the cravings</h2>
            </div>
            <InstagramFollowButton />
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {posts.map((p, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block overflow-hidden rounded-md bg-muted"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <OrderBand />
    </>
  );
}
