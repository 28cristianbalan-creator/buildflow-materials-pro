import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Package, Star } from 'lucide-react';
import { getProductImage } from '@/lib/product-images';

// Import category images
import redBricksImage from "@/assets/red-bricks.jpg";
import bcaBlocksImage from "@/assets/bca-blocks.jpg";
import aggregatesImage from "@/assets/aggregates.jpg";

const ProductsAndCategories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  // Map category images
  const categoryImages = {
    'red-bricks': redBricksImage,
    'bca-blocks': bcaBlocksImage,
    'aggregates': aggregatesImage
  };

  const categoryTabs = useMemo(() => (
    categories.map(cat => ({
      key: cat.key,
      label: t(`${cat.translationKey}.title`),
      description: t(`${cat.translationKey}.description`),
      features: t(`${cat.translationKey}.features`, { returnObjects: true }) as string[],
      price: t(`${cat.translationKey}.price`),
      image: cat.imageKey ? categoryImages[cat.imageKey as keyof typeof categoryImages] : undefined
    }))
  ), [t]);

  const stockLabel = (stock: number) => {
    if (stock <= 0) return { label: t('productsSection.stock.out'), tone: 'destructive' as const };
    if (stock < 10) return { label: t('productsSection.stock.low'), tone: 'secondary' as const };
    return { label: t('productsSection.stock.in'), tone: 'default' as const };
  };

  const selectedCategoryData = categoryTabs.find(cat => cat.key === selectedCategory);
  const categoryProducts = getProductsByCategory(selectedCategory);

  return (
    <section id="products" className="py-20 bg-gradient-section" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 id="products-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            {t('categories.heading')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('categories.subheading')}
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as any)} className="w-full">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-wrap gap-2 justify-center bg-card/70 backdrop-blur-lg p-3 rounded-2xl shadow-medium border border-border/20">
              {categoryTabs.map((cat) => (
                <TabsTrigger 
                  key={cat.key} 
                  value={cat.key} 
                  className="capitalize text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-soft transition-all duration-300 font-medium hover:bg-accent/50"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Category Overview */}
          {selectedCategoryData && (
            <div className="mb-16 animate-fade-in">
              <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Category Image */}
                  <div className="relative h-80 lg:h-96">
                    <img 
                      src={selectedCategoryData.image} 
                      alt={t(`${categories.find(c => c.key === selectedCategory)?.translationKey}.alt`)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                      {selectedCategoryData.price}
                    </div>
                  </div>
                  
                  {/* Category Info */}
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-card-foreground mb-4 lg:mb-6 leading-tight">
                      {selectedCategoryData.label}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                      {selectedCategoryData.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Caracteristici Principale
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedCategoryData.features?.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="hero" size="lg" className="hover-scale">
                      Vezi Toate Produsele din Categorie
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                Produse Disponibile - {selectedCategoryData?.label}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product, index) => {
                const stockInfo = stockLabel(product.stock);
                return (
                  <article 
                    key={product.id} 
                    className="bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden group animate-slide-up hover-scale" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={getProductImage(product.image)} 
                        alt={t(product.translationKey + '.name')}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.featured && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          RECOMANDAT
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge variant={stockInfo.tone} className="shadow-lg">
                          {stockInfo.label}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <div className="mb-4">
                        <h4 className="text-base sm:text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {t(product.translationKey + '.name')}
                        </h4>
                        <p className="text-lg sm:text-xl font-bold text-primary">{t(product.priceKey)}</p>
                        {product.description && (
                          <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                            {t(product.description)}
                          </p>
                        )}
                      </div>
                      
                      {product.stock > 0 && (
                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                          În stoc: <span className="font-medium">{product.stock} bucăți</span>
                        </p>
                      )}
                      
                      <Button 
                        variant="professional" 
                        className="w-full group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base font-medium"
                        disabled={product.stock === 0}
                      >
                        {product.stock === 0 ? 'Indisponibil' : t('productsSection.viewDetails')}
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* View All Products Button */}
            <div className="text-center mt-12 animate-fade-in">
              <Button 
                variant="hero" 
                size="lg" 
                className="hover-scale"
                onClick={() => navigate('/produse')}
              >
                Vezi Toate Produsele
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsAndCategories;