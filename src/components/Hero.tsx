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
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-2xl">
              {t('hero.title.line1')}
              <span className="block text-primary drop-shadow-lg mt-2">{t('hero.title.line2')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {t('hero.description')}
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="#products">
                <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold hover-scale">
                  {t('hero.buttons.viewProducts')}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm font-semibold hover-scale drop-shadow-lg"
                >
                  {t('hero.buttons.getQuote')}
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-primary-foreground/90 drop-shadow-md animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm lg:text-base font-medium">{t('hero.trust.quality')}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm lg:text-base font-medium">{t('hero.trust.delivery')}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm lg:text-base font-medium">{t('hero.trust.supplier')}</span>
              </div>
            </div>
          </div>
        </div>
      </div> </section>
  );
};

export default Hero;