export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-12 px-8 py-16 lg:flex-row">
        <div className="max-w-sm">
          <h3 className="text-2xl font-semibold">Qumetriq</h3>

          <p className="mt-5 leading-7 text-[var(--muted)]">
            Professional software engineered to improve trading workflows
            through technology, precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          <div>
            <h4 className="font-semibold">Company</h4>

            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <p>About</p>
              <p>Products</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>

            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <p>Documentation</p>
              <p>Insights</p>
              <p>Newsletter</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>

            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
