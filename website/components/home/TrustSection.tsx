import Section from "../layout/Section";
export default function TrustSection() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          WHY TRADERS CHOOSE QUMETRIQ
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Software built around
          <br />
          real trading workflows.
        </h2>

        <p className="mt-8 text-xl leading-9 text-[var(--muted)]">
          We don't build features for marketing.
          <br />
          We build tools that traders actually use.
        </p>
      </div>
    </Section>
  );
}
