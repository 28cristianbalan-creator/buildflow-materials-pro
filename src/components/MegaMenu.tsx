import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { categories, type CategorySlug } from '@/data/categories';
import { products, getProductsByCategory } from '@/data/products';
import { getProductImage } from '@/lib/product-images';

interface MegaMenuProps {
  scrolled?: boolean;
}

const MegaMenu = ({ scrolled = false }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const { t } = useTranslation();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const menuRef = useRef<HTMLDivElement>(null);

  const activeCategoryProducts = getProductsByCategory(activeCategory);
  const featuredProducts = activeCategoryProducts.slice(0, 3);

  // Optimized handlers with useCallback
  const openMenu = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  const handleCategoryChange = useCallback((categoryKey: CategorySlug) => {
    setActiveCategory(categoryKey);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger */}
      <button
        className={`flex items-center gap-2 px-3 py-2 font-medium transition-all duration-200 rounded-md hover-scale ${
          scrolled ? 'text-foreground hover:text-primary hover:bg-accent/50' : 'text-primary-foreground hover:text-primary hover:bg-primary-foreground/10'
        } ${isOpen ? 'text-primary bg-accent/30' : ''}`}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Products menu"
      >
        {t('header.nav.products')}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] bg-background/98 backdrop-blur-lg border border-border rounded-xl shadow-2xl z-50 p-6 animate-scale-in"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          role="menu"
          aria-label="Product categories"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Categories Column */}
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t('megaMenu.categories')}
              </h3>
              {categories.map((category, index) => (
                <button
                  key={category.key}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group hover-scale ${
                    activeCategory === category.key
                      ? 'bg-primary/10 text-primary border-l-4 border-primary shadow-sm'
                      : 'hover:bg-accent text-foreground hover:border-l-4 hover:border-primary/30'
                  }`}
                  onMouseEnter={() => handleCategoryChange(category.key)}
                  role="menuitem"
                  tabIndex={0}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium text-sm">
                    {t(`${category.translationKey}.title`)}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                    activeCategory === category.key ? 'text-primary translate-x-1' : 'text-muted-foreground group-hover:translate-x-1'
                  }`} />
                </button>
              ))}
            </div>

            {/* Products Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t('megaMenu.featuredProducts')}
              </h3>
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-200 cursor-pointer group hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-muted rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      src={getProductImage(product.image)}
                      alt={t(product.translationKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors">
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
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-semibold mt-4 group hover-scale p-2 rounded-md hover:bg-primary/5"
              >
                {t('megaMenu.viewAll')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Promotional Column */}
            <div className="bg-gradient-to-br from-primary/5 via-primary/8 to-primary/10 rounded-xl p-5 border border-primary/20 shadow-sm">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <div className="w-8 h-8 bg-primary rounded-lg shadow-sm" />
                </div>
                <h4 className="font-semibold text-foreground text-base">
                  {t('megaMenu.promo.title')}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('megaMenu.promo.description')}
                </p>
                <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-sm hover-scale shadow-sm">
                  {t('megaMenu.promo.cta')}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-border/50 mt-6 pt-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap gap-4 lg:gap-6">
                <a href="/categorii" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium hover-scale">
                  {t('megaMenu.allCategories')}
                </a>
                <a href="/produse" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium hover-scale">
                  {t('megaMenu.allProducts')}
                </a>
              </div>
              <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
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