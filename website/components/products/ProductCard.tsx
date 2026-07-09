type ProductCardProps = {
  status: string;
  name: string;
  description: string;
};

export default function ProductCard({
  status,
  name,
  description,
}: ProductCardProps) {
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
      <span className="text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
        {status}
      </span>

      <h3 className="mt-4 text-2xl font-semibold">{name}</h3>

      <p className="mt-4 leading-7 text-[var(--muted)]">{description}</p>
    </div>
  );
}
