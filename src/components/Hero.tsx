import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt={t('hero.alt')} 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-2xl">
              {t('hero.title.line1')}
              <span className="block text-primary drop-shadow-lg">{t('hero.title.line2')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {t('hero.description')}
            </p>
          </div>

          <div className="animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 font-semibold hover-scale">
                {t('hero.buttons.viewProducts')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm font-semibold hover-scale drop-shadow-lg"
              >
                {t('hero.buttons.getQuote')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-primary-foreground/90 drop-shadow-md">
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm sm:text-base font-medium">{t('hero.trust.quality')}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm sm:text-base font-medium">{t('hero.trust.delivery')}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm sm:text-base font-medium">{t('hero.trust.supplier')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center drop-shadow-lg">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;