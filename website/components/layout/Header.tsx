export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">

      <h1>Qumetriq</h1>

      <nav className="flex gap-6">

        <a href="#">Products</a>

        <a href="#">Solutions</a>

        <a href="#">About</a>

        <a href="#">Contact</a>

      </nav>

      <button>Get Started</button>

    </header>
  );
}