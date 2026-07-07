import Button from "../ui/Button";
export default function Hero() {
  return (
    <section className="py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
        Engineered for Professional Traders
      </p>

      <h1 className="mt-6 text-6xl font-bold leading-tight">
        Precision Software
        <br />
        for Serious Traders
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        We build professional software that transforms complex trading workflows
        into efficient, precise and data-driven systems.
      </p>

      <div className="mt-8 flex gap-4">
        <Button>Explore Products</Button>

        <Button variant="secondary">Learn More</Button>
      </div>
    </section>
  );
}
