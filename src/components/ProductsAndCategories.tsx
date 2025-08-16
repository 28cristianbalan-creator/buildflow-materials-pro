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
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gradient-section" aria-labelledby="products-heading">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 id="products-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6 leading-tight">
            {t('categories.heading')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            {t('categories.subheading')}
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as any)} className="w-full">
          {/* Category Tabs */}
          <div className="flex justify-center mb-8 sm:mb-12 px-2">
            <TabsList className="flex flex-wrap gap-1 sm:gap-2 justify-center bg-card/80 backdrop-blur-lg p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-medium border border-border/20 w-full sm:w-auto">
              {categoryTabs.map((cat) => (
                <TabsTrigger 
                  key={cat.key} 
                  value={cat.key} 
                  className="capitalize text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-soft transition-all duration-300 font-medium hover:bg-accent/50 flex-1 sm:flex-none"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Category Overview */}
          {selectedCategoryData && (
            <div className="mb-12 sm:mb-16 animate-fade-in">
              <div className="bg-card rounded-xl sm:rounded-2xl shadow-soft overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Category Image */}
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    <img 
                      src={selectedCategoryData.image} 
                      alt={t(`${categories.find(c => c.key === selectedCategory)?.translationKey}.alt`)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-lg font-bold shadow-lg">
                      {selectedCategoryData.price}
                    </div>
                  </div>
                  
                  {/* Category Info */}
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-card-foreground mb-3 sm:mb-4 lg:mb-6 leading-tight">
                      {selectedCategoryData.label}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                      {selectedCategoryData.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6 sm:mb-8">
                      <h4 className="font-semibold text-card-foreground mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        Caracteristici Principale
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedCategoryData.features?.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="hero" size="default" className="w-full sm:w-auto hover-scale text-sm sm:text-base">
                      Vezi Toate Produsele din Categorie
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                Produse Disponibile - {selectedCategoryData?.label}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {categoryProducts.map((product, index) => {
                const stockInfo = stockLabel(product.stock);
                return (
                  <article 
                    key={product.id} 
                    className="bg-card rounded-lg sm:rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group animate-slide-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Product Image */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img 
                        src={getProductImage(product.image)} 
                        alt={t(product.translationKey + '.name')}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.featured && (
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          <span className="hidden sm:inline">RECOMANDAT</span>
                          <span className="sm:hidden">TOP</span>
                        </div>
                      )}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                        <Badge variant={stockInfo.tone} className="shadow-lg text-xs">
                          {stockInfo.label}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 sm:p-4">
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-sm sm:text-base font-semibold text-card-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {t(product.translationKey + '.name')}
                        </h4>
                        <p className="text-base sm:text-lg font-bold text-primary">{t(product.priceKey)}</p>
                        {product.description && (
                          <p className="text-xs text-muted-foreground mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
                            {t(product.description)}
                          </p>
                        )}
                      </div>
                      
                      {product.stock > 0 && (
                        <p className="text-xs text-muted-foreground mb-3 sm:mb-4">
                          În stoc: <span className="font-medium">{product.stock} bucăți</span>
                        </p>
                      )}
                      
                      <Button 
                        variant="professional" 
                        size="sm"
                        className="w-full text-xs sm:text-sm font-medium"
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
            <div className="text-center mt-8 sm:mt-12 animate-fade-in px-2">
              <Button 
                variant="hero" 
                size="default" 
                className="w-full sm:w-auto hover-scale text-sm sm:text-base"
                onClick={() => navigate('/produse')}
              >
                Vezi Toate Produsele
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsAndCategories;