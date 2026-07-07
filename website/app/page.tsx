import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import ProductPreview from "../components/dashboard/ProductPreview";
import WhyQumetriq from "../components/home/WhyQumetriq";
import FeaturedProducts from "../components/products/FeaturedProducts";
import OurPrinciples from "../components/home/OurPrinciples";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <ProductPreview />
        <WhyQumetriq />
        <FeaturedProducts />
        <OurPrinciples />
      </Container>
    </>
  );
}
