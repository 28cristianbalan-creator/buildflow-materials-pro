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
    <section className="py-12 sm:py-16 lg:py-20 bg-construction-slate text-white" aria-labelledby="trust-heading">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 id="trust-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {t('trust.heading')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-2">
            {t('trust.text')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.statKey}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/20 rounded-full mb-3 sm:mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">
                {t(`trust.stats.${stat.statKey}.value`)}
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">
                {t(`trust.stats.${stat.statKey}.label`)}
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {t(`trust.stats.${stat.statKey}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center animate-fade-in px-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t('trust.cta.title')}</h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              {t('trust.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="hero" 
                size="default" 
                className="w-full sm:w-auto hover-scale text-sm sm:text-base"
              >
                {t('trust.cta.freeQuote')}
              </Button>
              <Button 
                variant="outline" 
                size="default" 
                className="w-full sm:w-auto border-white/30 hover:bg-white/10 text-white hover:text-white transition-all duration-300 text-sm sm:text-base"
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