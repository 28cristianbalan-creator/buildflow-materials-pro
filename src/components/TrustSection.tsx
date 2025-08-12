import { Shield, Truck, Award, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const TrustSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Shield,
      statKey: 'years'
    },
    {
      icon: Truck,
      statKey: 'projects'
    },
    {
      icon: Award,
      statKey: 'quality'
    },
    {
      icon: Users,
      statKey: 'clients'
    }
  ];

  return (
    <section className="py-20 bg-construction-slate text-white" aria-labelledby="trust-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="trust-heading" className="text-4xl md:text-5xl font-bold mb-6">
            {t('trust.heading')}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t('trust.text')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.statKey}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {t(`trust.stats.${stat.statKey}.value`)}
              </div>
              <div className="text-xl font-semibold mb-2">
                {t(`trust.stats.${stat.statKey}.label`)}
              </div>
              <p className="text-white/70 text-sm">
                {t(`trust.stats.${stat.statKey}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('trust.cta.title')}</h3>
            <p className="text-white/80 mb-6">
              {t('trust.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="hover-scale"
              >
                {t('trust.cta.freeQuote')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 hover:bg-white/10 text-white hover:text-white transition-all duration-300"
              >
                {t('trust.cta.callNow')}: {t('header.phone')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;