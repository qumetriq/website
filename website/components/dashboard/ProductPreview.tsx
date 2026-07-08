import FadeIn from "../animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
export default function ProductPreview() {
  return (
    <FadeIn delay={0.3}>
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[var(--primary)]">QUMETRIQ PLATFORM</p>

          <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
            <ArrowUpRight size={14} />
            +12.8%
          </div>
        </div>

        <h3 className="mt-3 text-2xl font-semibold">Connected Workspace</h3>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span>Connected Products</span>
            <span>3</span>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
              System Status
            </p>

            <div className="mt-5 flex items-end gap-2 h-24">
              <div className="h-8 w-3 rounded-full bg-[var(--primary)]/40"></div>
              <div className="h-12 w-3 rounded-full bg-[var(--primary)]/60"></div>
              <div className="h-6 w-3 rounded-full bg-[var(--primary)]/30"></div>
              <div className="h-16 w-3 rounded-full bg-[var(--primary)]"></div>
              <div className="h-10 w-3 rounded-full bg-[var(--primary)]/50"></div>
              <div className="h-20 w-3 rounded-full bg-[var(--primary)]"></div>
              <div className="h-14 w-3 rounded-full bg-[var(--primary)]/70"></div>
              <div className="h-24 w-3 rounded-full bg-[var(--primary)]"></div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
              Products
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex justify-between">
                <span>EURUSD</span>
                <span className="text-green-400">+1.2R</span>
              </div>

              <div className="flex justify-between">
                <span>GBPUSD</span>
                <span className="text-red-400">-1.0R</span>
              </div>

              <div className="flex justify-between">
                <span>XAUUSD</span>
                <span className="text-green-400">+2.3R</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <span>System Health</span>
            <span className="text-green-400">99.98%</span>
          </div>

          <div className="flex justify-between">
            <span>Active Licenses</span>
            <span>124</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
