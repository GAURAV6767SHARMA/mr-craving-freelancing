import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import founder from "@/assets/founder.jpg";
import malai from "@/assets/malai-chaap.jpg";
import mojitos from "@/assets/mojitos.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Started Young, Built in Shalimar Bagh | Mr Cravings" },
      {
        name: "description",
        content:
          "Mr Cravings began as one young founder's street-food stall in Shalimar Bagh. Today it's a pure-vegetarian kitchen built on freshness, hygiene and honest pricing.",
      },
      { property: "og:title", content: "The Mr Cravings Story" },
      {
        property: "og:description",
        content:
          "One 18-year-old, one stall, and a neighbourhood that kept coming back for more.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-6 sm:pt-24">
        <Reveal>
          <p className="eyebrow">About us</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] sm:text-6xl">
            One stall, one teenager, and a neighbourhood that kept coming back.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:py-16">
        <Reveal>
          <img
            src={founder}
            alt="Young founder of Mr Cravings standing at the kitchen counter beside a glowing tandoor"
            loading="lazy"
            width={900}
            height={1200}
            className="w-full rounded-lg object-cover shadow-lift"
          />
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={80}>
            <h2 className="font-display text-2xl sm:text-3xl">How it started</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Mr Cravings started at 18 — an age most people spend deciding what to do
              next. Our founder spent it standing behind a tawa in Shalimar Bagh, learning
              the difference between food that sells and food people come back for. There
              was no investor deck, no consultant. Just a small setup in CC Block, a
              stubborn sense of what tasted right, and long evenings feeding students,
              families and friends from the neighbourhood.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The regulars built the rest. They asked for a whole-wheat momo, so we made
              one. They lingered after eating, so we added a mojito bar. What began as a
              craving-fix on the way home turned into a hangout spot with its own crowd.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <blockquote className="border-l-2 border-primary pl-6">
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                “We didn't set out to build a brand. We set out to make food our own street
                would vouch for.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="font-display text-2xl sm:text-3xl">What we stand on</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pure vegetarian, by choice — not as a compromise. Hygiene and freshness are
              non-negotiables: prep happens daily, and nothing goes on the flame before
              you order it. And prices stay honest, because good street food should be
              something you can afford on a Tuesday, not just a Saturday.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">In the kitchen</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Why the food tastes like ours.
            </h2>
            <ul className="mt-8 space-y-6">
              <li>
                <h3 className="font-display text-xl">House-style chaap marinades</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Malai, achari, afghani, garlic — each mixed in-house and rested before it
                  ever meets a skewer.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">Hand-folded momos</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Folded through the day in small batches, including a whole-wheat wrapper
                  for the regulars who asked.
                </p>
              </li>
              <li>
                <h3 className="font-display text-xl">A proper mojito bar</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Fresh mint, real fruit, crushed to order — the reason a five-minute stop
                  becomes an hour.
                </p>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <img
              src={malai}
              alt="Malai chaap skewer close-up, cream marinade with light char"
              loading="lazy"
              width={900}
              height={1100}
              className="tilt-card aspect-[4/5] w-full rounded-lg object-cover"
            />
            <img
              src={mojitos}
              alt="Three mojitos with mint and lime: virgin, watermelon and blueberry"
              loading="lazy"
              width={1200}
              height={900}
              className="tilt-card mt-8 aspect-[4/5] w-full rounded-lg object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">See what's cooking</h2>
          <p className="mt-4 text-muted-foreground">
            Momos, chaap, rolls, kulcha and mojitos — the whole list is one tap away.
          </p>
          <Link to="/menu" className="btn-base btn-primary mt-8">
            View Menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
