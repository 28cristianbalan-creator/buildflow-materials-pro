import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsAndCategories from "@/components/ProductsAndCategories";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsAndCategories />
      <AboutSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
