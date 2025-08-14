import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { products, getProductsByCategory } from '@/data/products';
import { getProductImage } from '@/lib/product-images';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const { t } = useTranslation();

  const activeCategoryProducts = getProductsByCategory(activeCategory);
  const featuredProducts = activeCategoryProducts.slice(0, 3);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {t('header.nav.products')}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-[800px] bg-background border border-border rounded-lg shadow-2xl z-50 p-6"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="grid grid-cols-3 gap-6">
            {/* Categories Column */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t('megaMenu.categories')}
              </h3>
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 flex items-center justify-between group ${
                    activeCategory === category.key
                      ? 'bg-primary/10 text-primary border-l-2 border-primary'
                      : 'hover:bg-accent text-foreground'
                  }`}
                  onMouseEnter={() => setActiveCategory(category.key)}
                >
                  <span className="font-medium">
                    {t(`${category.translationKey}.title`)}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                    activeCategory === category.key ? 'text-primary' : 'text-muted-foreground group-hover:translate-x-1'
                  }`} />
                </button>
              ))}
            </div>

            {/* Products Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t('megaMenu.featuredProducts')}
              </h3>
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors duration-200 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-muted rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={getProductImage(product.image)}
                      alt={t(product.translationKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">
                      {t(product.translationKey)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t(product.priceKey)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* View All Link */}
              <a
                href={`/produse/${activeCategory}`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium mt-3 group"
              >
                {t('megaMenu.viewAll')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Promotional Column */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-md" />
                </div>
                <h4 className="font-semibold text-foreground">
                  {t('megaMenu.promo.title')}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('megaMenu.promo.description')}
                </p>
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium text-sm">
                  {t('megaMenu.promo.cta')}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-border mt-6 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <a href="/categorii" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('megaMenu.allCategories')}
                </a>
                <a href="/produse" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('megaMenu.allProducts')}
                </a>
              </div>
              <span className="text-xs text-muted-foreground">
                {t('megaMenu.totalProducts', { count: products.length })}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;