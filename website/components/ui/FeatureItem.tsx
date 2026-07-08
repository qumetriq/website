import { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureItem({
  icon: Icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-[var(--primary)] hover:bg-white/[0.04]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
        <Icon
          size={24}
          className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-8 text-[var(--muted)]">{description}</p>
    </div>
  );
}
