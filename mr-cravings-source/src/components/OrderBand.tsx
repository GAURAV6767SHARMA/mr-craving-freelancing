import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { OrderActions } from "./OrderActions";

export function OrderBand({
  headline = "Craving it already?",
  copy = "Fresh off the tandoor, straight to your door. Or walk in and grab a table.",
}: {
  headline?: string;
  copy?: string;
}) {
  return (
    <section id="order-now" className="bg-primary text-primary-foreground">
      <Reveal className="mx-auto max-w-4xl px-5 py-20 text-center sm:py-24">
        <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/85">{copy}</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <OrderActions align="center" variant="dark" />
          <Link to="/menu" className="btn-base btn-outline">
            View Menu
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

