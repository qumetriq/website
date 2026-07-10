import Section from "../layout/Section";

type Category = {
  id: string;
  name: string;
  title: string;
  description: string;
};

type CategorySectionProps = {
  category: Category;
};

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          {category.name.toUpperCase()}
        </p>

        <h2 className="mt-6 text-5xl font-bold">{category.title}</h2>

        <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
          {category.description}
        </p>
      </div>
    </Section>
  );
}
