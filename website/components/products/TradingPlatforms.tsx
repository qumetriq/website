import Section from "../layout/Section";
import ProductCard from "./ProductCard";

export default function TradingPlatforms() {
  return (
    <Section className="pt-12 pb-32">
      <div className="grid gap-8 md:grid-cols-2">
        <ProductCard
          status="IN DEVELOPMENT"
          name="JournalEA"
          description="Professional trading journal that automatically records, analyzes and improves trading performance."
        />

        <ProductCard
          status="COMING SOON"
          name="Execution Suite"
          description="Professional utilities designed to improve execution, order management and workflow."
        />
      </div>
    </Section>
  );
}
