import Section from "../layout/Section";
import ProductGrid from "./ProductGrid";

type TradingPlatformsProps = {
  products: {
    id: string;
    status: string;
    name: string;
    description: string;
    category: string;
  }[];
};

export default function TradingPlatforms({ products }: TradingPlatformsProps) {
  return (
    <Section className="pt-12 pb-32">
      <ProductGrid products={products} />
    </Section>
  );
}
