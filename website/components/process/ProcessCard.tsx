type ProcessCardProps = {
  step: string;
  title: string;
  description: string;
};

export default function ProcessCard({
  step,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[var(--primary)]/30 hover:-translate-y-1">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
        {step}
      </p>

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}
