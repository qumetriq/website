import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[var(--primary)]" />
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]"></div>

            <h1 className="text-lg font-semibold tracking-tight">Qumetriq</h1>
          </div>
        </div>

        <nav className="flex items-center gap-8 text-sm text-[var(--muted)]">
          <a className="transition hover:text-white" href="#">
            Products
          </a>

          <a className="transition hover:text-white" href="#">
            Solutions
          </a>

          <a className="transition hover:text-white" href="#">
            About
          </a>

          <a className="transition hover:text-white" href="#">
            Contact
          </a>
        </nav>

        <Button>Get Started</Button>
      </div>
    </header>
  );
}
