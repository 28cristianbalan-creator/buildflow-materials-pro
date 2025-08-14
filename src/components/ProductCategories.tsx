import { useTranslation } from 'react-i18next';
import { categories } from '@/data/categories';
import { ChevronRight } from 'lucide-react';
import redBricksImage from "@/assets/red-bricks.jpg";
import bcaBlocksImage from "@/assets/bca-blocks.jpg";
import aggregatesImage from "@/assets/aggregates.jpg";

const ProductCategories = () => {
  const { t } = useTranslation();

  const categoryImages = {
    'red-bricks': redBricksImage,
    'bca-blocks': bcaBlocksImage,
    'aggregates': aggregatesImage
  };

  return (
    <section className="py-6 lg:py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Categories Grid - Horizontal Layout like screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {categories.map((category, index) => (
            <div
              key={category.key}
              className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-border/30 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Arrow Icon - positioned like in screenshot */}
              <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground p-1 rounded-sm opacity-90 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-3 h-3" />
              </div>

              {/* Category Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={categoryImages[category.imageKey as keyof typeof categoryImages]}
                  alt={t(`${category.translationKey}.alt`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Category Label - positioned at bottom with dark overlay like screenshot */}
              <div className="absolute bottom-0 left-0 right-0 p-2 lg:p-3">
                <h3 className="text-xs lg:text-sm font-semibold text-white leading-tight line-clamp-2">
                  {t(`${category.translationKey}.title`)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;