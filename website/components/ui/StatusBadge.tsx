type StatusBadgeProps = {
  status: "Available" | "In Development" | "Coming Soon";
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    Available: "bg-green-500/10 text-green-400 border-green-500/20",
    "In Development": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "Coming Soon": "bg-white/5 text-white/60 border-white/10",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
