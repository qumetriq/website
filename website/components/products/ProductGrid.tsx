import ProductCard from "./ProductCard";

type Product = {
  id: string;
  status: string;
  name: string;
  description: string;
  category: string;
};

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          status={product.status}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
}
