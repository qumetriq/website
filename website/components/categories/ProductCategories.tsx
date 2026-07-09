import Section from "../layout/Section";
import CategoryCard from "./CategoryCard";

export default function ProductCategories() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          SOFTWARE ECOSYSTEM
        </p>

        <h2 className="mt-6 text-5xl font-bold">
          Built around real trading workflows.
        </h2>

        <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
          Qumetriq develops specialized software designed to solve different
          challenges across the professional trading workflow.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          title="Trading Platforms"
          description="Professional applications designed to enhance trading workflows with precision and reliability."
        />

        <CategoryCard
          title="Automation"
          description="Software that automates repetitive processes, allowing professionals to focus on decisions."
        />

        <CategoryCard
          title="Analytics"
          description="Powerful tools that transform trading data into meaningful insights."
        />

        <CategoryCard
          title="Risk Management"
          description="Solutions built to help traders control exposure and protect capital."
        />

        <CategoryCard
          title="Research"
          description="Applications created to validate ideas, test concepts and improve strategies."
        />

        <CategoryCard
          title="Developer Tools"
          description="Utilities and frameworks for developers building trading technology."
        />
      </div>
    </Section>
  );
}
