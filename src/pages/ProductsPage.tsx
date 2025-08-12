import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, CategorySlug } from '@/data/categories';
import { getProductsByCategory, products } from '@/data/products';
import { getProductImage } from '@/lib/product-images';
import { ArrowLeft, Package, ShoppingCart, Star } from 'lucide-react';

const ProductsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug>(
    (category as CategorySlug) || categories[0].key
  );

  const stockLabel = (stock: number) => {
    if (stock <= 0) return { label: t('productsSection.stock.out'), tone: 'destructive' as const };
    if (stock < 10) return { label: t('productsSection.stock.low'), tone: 'secondary' as const };
    return { label: t('productsSection.stock.in'), tone: 'default' as const };
  };

  const categoryProducts = getProductsByCategory(selectedCategory);

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
                Catalog Produse
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Descoperă gama noastră completă de materiale de construcții premium
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as CategorySlug)} className="w-full">
              {/* Category Tabs */}
              <div className="flex justify-center mb-12">
                <TabsList className="flex flex-wrap gap-2 justify-center bg-card/50 backdrop-blur-sm p-2 rounded-xl">
                  {categories.map((cat) => (
                    <TabsTrigger 
                      key={cat.key} 
                      value={cat.key} 
                      className="capitalize text-lg px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                    >
                      {t(`${cat.translationKey}.title`)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Products Grid */}
              <TabsContent value={selectedCategory} className="mt-0">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Package className="w-8 h-8 text-primary" />
                    {t(`categories.items.${selectedCategory}.title`)}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    {t(`categories.items.${selectedCategory}.description`)}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {categoryProducts.map((product, index) => {
                    const stockInfo = stockLabel(product.stock);
                    return (
                      <article 
                        key={product.id} 
                        className="bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden group animate-slide-up hover-scale" 
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Product Image */}
                        <div className="relative h-64 overflow-hidden">
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
                        
                        <div className="p-6">
                          <div className="mb-4">
                            <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {t(product.translationKey + '.name')}
                            </h3>
                            <p className="text-2xl font-bold text-primary mb-3">
                              {t(product.priceKey)}
                            </p>
                            {product.description && (
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                {t(product.description)}
                              </p>
                            )}
                          </div>
                          
                          {product.stock > 0 && (
                            <p className="text-sm text-muted-foreground mb-4">
                              În stoc: <span className="font-medium text-green-600">{product.stock} bucăți</span>
                            </p>
                          )}
                          
                          <div className="flex gap-2">
                            <Button 
                              variant="professional" 
                              className="flex-1 group-hover:scale-105 transition-transform duration-300"
                              disabled={product.stock === 0}
                            >
                              {product.stock === 0 ? 'Indisponibil' : 'Vezi Detalii'}
                            </Button>
                            <Button 
                              variant="outline" 
                              size="icon"
                              disabled={product.stock === 0}
                              className="hover-scale"
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Empty State */}
                {categoryProducts.length === 0 && (
                  <div className="text-center py-16">
                    <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Nu sunt produse disponibile
                    </h3>
                    <p className="text-muted-foreground">
                      Această categorie nu conține produse momentan.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;