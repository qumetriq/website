type ProductCardProps = {
  category: string;
  title: string;
  description: string;
  status?: string;
};

export default function ProductCard({
  category,
  title,
  description,
  status,
}: ProductCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-white/[0.05]">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[var(--primary)]"></div>

        <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
          {category}
        </p>
      </div>

      <h3 className="mt-4 text-3xl font-semibold transition-colors group-hover:text-[var(--primary)]"></h3>

      <p className="mt-6 leading-8 text-[var(--muted)]">{description}</p>

      <div className="mt-10">
        <span className="text-sm text-[var(--primary)]">{status}</span>
      </div>
    </div>
  );
}
