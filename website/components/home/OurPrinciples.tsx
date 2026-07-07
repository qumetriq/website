export default function OurPrinciples() {
  return (
    <section className="py-32">
      <div className="mb-16 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          OUR PRINCIPLES
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Software engineered with purpose.
        </h2>

        <p className="mt-8 text-xl leading-9 text-[var(--muted)]">
          Every decision we make is guided by a simple philosophy: build
          software that professionals can rely on every single day.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Precision First</h3>

          <p className="mt-4 leading-8 text-[var(--muted)]">
            Every tool is designed to deliver accurate results with a clean,
            distraction-free experience.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Built for Professionals</h3>

          <p className="mt-4 leading-8 text-[var(--muted)]">
            We don't build software for everyone. We build software for traders
            who demand reliability.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Long-Term Vision</h3>

          <p className="mt-4 leading-8 text-[var(--muted)]">
            Our products are designed to evolve continuously with new features,
            improvements and support.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Simple by Design</h3>

          <p className="mt-4 leading-8 text-[var(--muted)]">
            Powerful software doesn't have to be complicated. Simplicity is a
            feature, not a limitation.
          </p>
        </div>
      </div>
    </section>
  );
}
