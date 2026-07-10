import { products } from "../../data/products";
import CategorySection from "../../components/categories/CategorySection";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import { categories } from "../../data/categories";
import ProductGrid from "../../components/products/ProductGrid";

export default function ProductsPage() {
  const tradingPlatformsCategory = categories.find(
    (category) => category.id === "trading-platforms",
  );

  return (
    <>
      <Container>
        <Header />

        <main className="py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
            Products
          </p>

          <h1 className="mt-6 max-w-3xl text-6xl font-bold leading-tight">
            Professional software for every stage of the trading workflow.
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-[var(--muted)]">
            Qumetriq develops a complete ecosystem of tools engineered for
            professional traders.
          </p>

          {/* <ProductCategories /> */}

          {tradingPlatformsCategory && (
            <CategorySection category={tradingPlatformsCategory} />
          )}

          <ProductGrid
            products={products.filter(
              (product) => product.category === "trading-platforms",
            )}
          />
        </main>
      </Container>
    </>
  );
}
