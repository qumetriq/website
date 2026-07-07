type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:opacity-80"
      : "border border-white text-white hover:bg-white hover:text-black";

  return (
    <button
      className={`
      rounded-lg
      px-6
      py-3
      font-medium
      transition
      duration-200
      bg-[var(--primary)]
      text-white
      hover:bg-[var(--primary-hover)]
      ${styles}
    `}
    >
      {children}
    </button>
  );
}
