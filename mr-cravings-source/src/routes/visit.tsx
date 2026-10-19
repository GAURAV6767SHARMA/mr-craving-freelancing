import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { OrderActions } from "@/components/OrderActions";
import { phoneUrl, whatsappUrl } from "@/lib/contact";
import { InstagramFollowButton, posts, instagramUrl } from "@/components/InstagramGrid";


export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — CC Block, Shalimar Bagh, New Delhi | Mr Cravings" },
      {
        name: "description",
        content:
          "Find Mr Cravings at CC Block DDA Market, Shalimar Bagh, New Delhi, near Jhulelal Mandir. Get directions, call ahead, or order on Zomato and Swiggy.",
      },
      { property: "og:title", content: "Visit Mr Cravings in Shalimar Bagh" },
      {
        property: "og:description",
        content: "CC Block DDA Market, Shalimar Bagh, New Delhi — near Jhulelal Mandir.",
      },
    ],
  }),
  component: VisitPage,
});

/* [CONFIRM WITH CLIENT] Final day-by-day operating hours. */
const hours = [
  { day: "Monday", time: "[CONFIRM WITH CLIENT]" },
  { day: "Tuesday", time: "[CONFIRM WITH CLIENT]" },
  { day: "Wednesday", time: "[CONFIRM WITH CLIENT]" },
  { day: "Thursday", time: "[CONFIRM WITH CLIENT]" },
  { day: "Friday", time: "[CONFIRM WITH CLIENT]" },
  { day: "Saturday", time: "[CONFIRM WITH CLIENT]" },
  { day: "Sunday", time: "[CONFIRM WITH CLIENT]" },
];

function VisitPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:pt-24">
        <Reveal>
          <p className="eyebrow">Visit us</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.02] sm:text-6xl">
            Find us in CC Block.
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground">
            North Delhi's momo stop, tucked into the Shalimar Bagh market. Order in, or
            come eat it hot.
          </p>
          <div className="mt-8">
            <OrderActions />
          </div>

        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-10 lg:grid-cols-3">
        {/* Location */}
        <Reveal className="lg:col-span-2">
          <div className="h-full overflow-hidden rounded-lg border border-border bg-card">
            {/* [CONFIRM WITH CLIENT] Replace with the Google Maps embed for the exact pin */}
            <div
              role="img"
              aria-label="Map placeholder showing the Mr Cravings location in Shalimar Bagh, New Delhi"
              className="flex aspect-[16/9] w-full items-center justify-center bg-secondary"
            >
              <div className="text-center">
                <MapPin className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold">Google Maps pin</p>
                <p className="text-xs text-muted-foreground">[CONFIRM WITH CLIENT]</p>
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl">Mr Cravings</h2>
              <address className="mt-2 text-sm leading-relaxed text-muted-foreground not-italic">
                CC Block, DDA Market, Shalimar Bagh
                <br />
                New Delhi 110088 · Near Jhulelal Mandir
                <br />
                <span className="text-xs">[CONFIRM WITH CLIENT — exact shop number]</span>
              </address>
              <a
                href="https://maps.google.com/?q=CC+Block+DDA+Market+Shalimar+Bagh+New+Delhi"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-base btn-primary mt-6"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {/* Hours */}
          <Reveal delay={90}>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="font-display text-xl">Hours</h2>
              </div>
              <table className="mt-4 w-full text-sm">
                <caption className="sr-only">Weekly opening hours</caption>
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className="border-b border-border last:border-0">
                      <th scope="row" className="py-2 text-left font-semibold">
                        {h.day}
                      </th>
                      <td className="py-2 text-right text-xs text-muted-foreground">
                        {h.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={150}>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="font-display text-xl">Call or WhatsApp</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Phone: <span className="font-semibold">[CONFIRM WITH CLIENT]</span>
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-base btn-whatsapp w-full"
                >
                  Chat on WhatsApp
                </a>
                <a href={phoneUrl} className="btn-base btn-mint w-full">
                  Tap to Call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Instagram — masonry treatment */}
      <section className="border-t border-border bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Straight from the counter</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              What's been coming out of the kitchen.
            </h2>
          </Reveal>

          <div className="mt-10 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>a]:mb-3">
            {posts.map((p, i) => (
              <a
                key={i}
                href={instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="block break-inside-avoid overflow-hidden rounded-md"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${
                    i % 3 === 0 ? "aspect-square" : "aspect-[4/5]"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="mt-8">
            <InstagramFollowButton variant="primary" />
          </div>
        </div>
      </section>

      <section id="order-now" className="mx-auto max-w-2xl px-5 py-20 text-center sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl leading-snug sm:text-4xl">
            Stop by, say hi, and let us handle the cravings.
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3">
            <OrderActions align="center" />
            <a
              href="https://maps.google.com/?q=CC+Block+DDA+Market+Shalimar+Bagh+New+Delhi"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-outline"
            >
              Get Directions
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
