import ProductCard from "../ui/ProductCard";
export default function FeaturedProducts() {
  return (
    <section className="py-32">
      <div className="mb-16 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          FEATURED PRODUCTS
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          An ecosystem built for professional traders.
        </h2>

        <p className="mt-8 text-xl leading-9 text-[var(--muted)]">
          Every product is designed to solve a specific part of the trading
          workflow.
        </p>
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <ProductCard
            category="Trading Journal"
            title="JournalEA"
            description="A professional journaling system that automatically records, analyzes and helps improve your trading performance."
            status="In Development"
          />

          <ProductCard
            category="Risk Management"
            title="Position Size"
            description="Calculate precise position sizes in seconds while maintaining consistent risk management across every trade."
            status="Coming Soon"
          />
        </div>
      </div>
    </section>
  );
}
