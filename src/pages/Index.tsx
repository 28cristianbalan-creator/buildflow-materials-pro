import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductCategories />
      <ProductsSection />
      <AboutSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
