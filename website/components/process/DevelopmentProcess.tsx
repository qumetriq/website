import Section from "../layout/Section";
import ProcessCard from "./ProcessCard";

export default function DevelopmentProcess() {
  return (
    <Section>
      <div className="mb-16 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          DEVELOPMENT PROCESS
        </p>

        <h2 className="mt-6 text-5xl font-bold">How we build software.</h2>

        <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
          Every product follows the same engineering process to ensure quality,
          scalability and long-term reliability.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProcessCard
          step="Step 01"
          title="Research"
          description="We study real workflows and identify the problems worth solving."
        />

        <ProcessCard
          step="Step 02"
          title="Architecture"
          description="Every solution starts with a scalable software architecture."
        />

        <ProcessCard
          step="Step 03"
          title="Development"
          description="We build modular and maintainable software focused on long-term quality."
        />

        <ProcessCard
          step="Step 04"
          title="Validation"
          description="Every feature is tested under real-world conditions before release."
        />

        <ProcessCard
          step="Step 05"
          title="Continuous Improvement"
          description="Our products evolve continuously through updates and user feedback."
        />
      </div>
    </Section>
  );
}
