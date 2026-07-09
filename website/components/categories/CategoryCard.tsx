type CategoryCardProps = {
  title: string;
  description: string;
};

export default function CategoryCard({
  title,
  description,
}: CategoryCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary)]/40
      "
    >
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-[var(--muted)]">{description}</p>
    </div>
  );
}
