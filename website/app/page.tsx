import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import ProductPreview from "../components/dashboard/ProductPreview";
import WhyQumetriq from "../components/home/WhyQumetriq";
import TrustSection from "../components/home/TrustSection";
import FeaturedProducts from "../components/products/FeaturedProducts";
import OurPrinciples from "../components/home/OurPrinciples";
import DevelopmentProcess from "../components/process/DevelopmentProcess";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <DevelopmentProcess />
        <WhyQumetriq />
        <TrustSection />
        <OurPrinciples />
        <FeaturedProducts />
      </Container>
    </>
  );
}
