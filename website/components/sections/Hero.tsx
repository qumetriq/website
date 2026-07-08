import Button from "../ui/Button";
import ProductPreview from "../dashboard/ProductPreview";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Lado izquierdo */}
        <div>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--primary)]">
              Trading Software Ecosystem
            </span>
          </div>

          <h1 className="mt-6 text-6xl font-bold leading-tight">
            Precision Software
            <br />
            for Serious Traders
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            We build professional software for traders, firms and financial
            teams who demand precision, reliability and efficiency in every
            workflow.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>Explore Products</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>

        {/* Lado derecho */}
        <div>
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
