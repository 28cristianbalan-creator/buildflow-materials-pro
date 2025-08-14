import { useMemo, useState } from 'react';
import { getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { getProductImage } from '@/lib/product-images';
import { ChevronDown } from 'lucide-react';

const ProductsSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  const categoryTabs = useMemo(() => (
    categories.map(cat => ({
      key: cat.key,
      label: t(`${cat.translationKey}.title`)
    }))
  ), [t]);

  const stockLabel = (stock: number) => {
    if (stock <= 0) return { label: t('productsSection.stock.out'), tone: 'destructive' as const };
    if (stock < 10) return { label: t('productsSection.stock.low'), tone: 'secondary' as const };
    return { label: t('productsSection.stock.in'), tone: 'default' as const };
  };

  const selectedProducts = getProductsByCategory(selectedCategory);

  return (
    <section className="py-8 lg:py-12 bg-background" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        {/* Popular Section Header with Dropdown like screenshot */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 id="products-heading" className="text-lg lg:text-xl font-bold text-foreground">
              {t('productsSection.popular')}
            </h2>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Navigation Tabs like screenshot */}
        <div className="flex items-center gap-6 mb-8 border-b border-border/20">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`pb-3 px-1 text-sm lg:text-base font-medium transition-colors relative ${
                selectedCategory === tab.key
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {selectedCategory === tab.key && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid like screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {selectedProducts.map((product, index) => {
            const stockInfo = stockLabel(product.stock);
            return (
              <div
                key={product.id}
                className="group bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border/30"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={getProductImage(product.image)}
                    alt={t(product.translationKey + '.name')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* "Nou" (New) Badge like screenshot */}
                  {product.featured && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {t('productsSection.new')}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-3 lg:p-4">
                  {/* Category Label like screenshot */}
                  <div className="mb-2">
                    <span className="text-xs text-primary font-medium">
                      {categoryTabs.find(c => c.key === selectedCategory)?.label}
                    </span>
                  </div>
                  
                  {/* Product Name */}
                  <h3 className="text-sm lg:text-base font-semibold text-card-foreground mb-2 line-clamp-2 leading-tight">
                    {t(product.translationKey + '.name')}
                  </h3>
                  
                  {/* Star Rating - placeholder like screenshot */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <p className="text-sm lg:text-base font-bold text-primary">
                    {t(product.priceKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
