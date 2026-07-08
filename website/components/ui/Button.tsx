type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? `
        bg-[var(--primary)]
        text-white
        hover:bg-[var(--primary-hover)]
        shadow-lg shadow-orange-500/10
      `
      : `
        border border-white/10
        bg-white/5
        text-white
        hover:bg-white
        hover:text-black
      `;

  return (
    <button
      className={`
        rounded-xl
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-0.5
        ${styles}
      `}
    >
      {children}
    </button>
  );
}
