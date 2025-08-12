import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { ArrowLeft, ArrowRight, Package } from 'lucide-react';

// Import category images
import redBricksImage from "@/assets/red-bricks.jpg";
import bcaBlocksImage from "@/assets/bca-blocks.jpg";
import aggregatesImage from "@/assets/aggregates.jpg";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Map category images
  const categoryImages = {
    'red-bricks': redBricksImage,
    'bca-blocks': bcaBlocksImage,
    'aggregates': aggregatesImage
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="hover-scale"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi la Acasă
              </Button>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Categorii Produse
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explorează categoriile noastre de materiale de construcții premium
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const categoryProducts = getProductsByCategory(category.key);
                const categoryData = {
                  title: t(`${category.translationKey}.title`),
                  description: t(`${category.translationKey}.description`),
                  features: t(`${category.translationKey}.features`, { returnObjects: true }) as string[],
                  price: t(`${category.translationKey}.price`),
                  image: category.imageKey ? categoryImages[category.imageKey as keyof typeof categoryImages] : undefined
                };

                return (
                  <article 
                    key={category.key}
                    className="bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden group animate-slide-up hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Category Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={categoryData.image} 
                        alt={t(`${category.translationKey}.alt`)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {categoryData.price}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {categoryProducts.length} produse
                      </div>
                    </div>
                    
                    {/* Category Info */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                          {categoryData.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {categoryData.description}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary" />
                          Caracteristici
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {categoryData.features?.slice(0, 3).map((feature, idx) => (
                            <span 
                              key={idx}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-medium border border-primary/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          variant="professional" 
                          className="flex-1 group-hover:scale-105 transition-transform duration-300"
                          onClick={() => navigate(`/produse/${category.key}`)}
                        >
                          Vezi Produse
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => navigate(`/produse/${category.key}`)}
                          className="hover-scale"
                        >
                          <Package className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Nu găsești ce cauți?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Contactează-ne pentru consultanță personalizată și recomandări de produse pentru proiectul tău.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="hover-scale">
                    Contactează-ne
                  </Button>
                  <Button variant="outline" size="lg" className="hover-scale">
                    Vezi Toate Produsele
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;