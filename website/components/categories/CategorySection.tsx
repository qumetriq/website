import Section from "../layout/Section";

type CategorySectionProps = {
  category: string;
  title: string;
  description: string;
};

export default function CategorySection({
  category,
  title,
  description,
}: CategorySectionProps) {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          {category}
        </p>

        <h2 className="mt-6 text-5xl font-bold">{title}</h2>

        <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
          {description}
        </p>
      </div>
    </Section>
  );
}
