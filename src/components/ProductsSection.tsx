import { useMemo } from 'react';
import { products } from '@/data/products';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductsSection = () => {
  const { t } = useTranslation();

  const categories = useMemo(() => (
    [
      { key: 'clayBricks', label: t('categories.items.clayBricks.title') },
      { key: 'bcaBlocks', label: t('categories.items.bcaBlocks.title') },
      { key: 'aggregates', label: t('categories.items.aggregates.title') }
    ] as const
  ), [t]);

  const stockLabel = (stock: number) => {
    if (stock <= 0) return { label: t('productsSection.stock.out'), tone: 'destructive' as const };
    if (stock < 10) return { label: t('productsSection.stock.low'), tone: 'secondary' as const };
    return { label: t('productsSection.stock.in'), tone: 'primary' as const };
  };

  return (
    <section className="py-20 bg-gradient-section" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h2 id="products-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('productsSection.heading')}</h2>
        </div>

        <Tabs defaultValue={categories[0].key} className="w-full animate-fade-in">
          <TabsList className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <TabsTrigger key={c.key} value={c.key} className="capitalize">{c.label}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c, idx) => (
            <TabsContent key={c.key} value={c.key} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === c.key).map((p, i) => {
                  const s = stockLabel(p.stock);
                  return (
                    <article key={p.id} className="bg-card rounded-lg shadow-soft hover:shadow-medium transition-all overflow-hidden animate-slide-up" style={{ animationDelay: `${(idx + i) * 0.05}s` }}>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-card-foreground">{p.name}</h3>
                          <Badge variant={s.tone}>{s.label}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{p.price}</p>
                        <Button variant="professional" className="w-full hover-scale">{t('productsSection.viewDetails')}</Button>
                      </div>
                    </article>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
