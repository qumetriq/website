import FadeIn from "../animations/FadeIn";
export default function WhyQumetriq() {
  return (
    <FadeIn>
      <section className="py-32">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
            WHY QUMETRIQ
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            We build software that traders actually need.
          </h2>

          <p className="mt-8 text-xl leading-9 text-[var(--muted)]">
            Most trading software is built around features. We build around real
            workflows.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
