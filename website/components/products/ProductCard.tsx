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
        group
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        transition-all
        duration-300
        hover:border-[var(--primary)]/40
        hover:bg-white/[0.05]
      "
    >
      <span className="text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
        {status}
      </span>

      <h3 className="mt-5 text-2xl font-semibold">{name}</h3>

      <p className="mt-5 leading-7 text-[var(--muted)]">{description}</p>

      <div className="mt-8 flex items-center gap-2 text-sm font-medium transition group-hover:translate-x-1">
        Explore →
      </div>
    </div>
  );
}
