import FeatureItem from "../ui/FeatureItem";
import { Shield, Briefcase, Compass, Sparkles } from "lucide-react";

export default function OurPrinciples() {
  return (
    <section className="py-32">
      <div className="mb-16 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          OUR PRINCIPLES
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Software engineered with purpose.
        </h2>

        <p className="mt-8 text-xl leading-9 text-[var(--muted)]">
          Every decision we make is guided by a simple philosophy: build
          software that professionals can rely on every single day.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <FeatureItem
          icon={Shield}
          title="Precision First"
          description="Every tool is designed to deliver accurate results with a clean, distraction-free experience."
        />

        <FeatureItem
          icon={Briefcase}
          title="Built for Professionals"
          description="We don't build software for everyone. We build software for traders who demand reliability."
        />

        <FeatureItem
          icon={Compass}
          title="Long-Term Vision"
          description="Our products are designed to evolve continuously with new features, improvements and support."
        />

        <FeatureItem
          icon={Sparkles}
          title="Simple by Design"
          description="Powerful software doesn't have to be complicated. Simplicity is a feature, not a limitation."
        />
      </div>
    </section>
  );
}
