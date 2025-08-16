import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={t("hero.alt")}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              {t("hero.title.line1")}
              <span className="block text-primary drop-shadow-lg mt-1 sm:mt-2">
                {t("hero.title.line2")}
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/95 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-2">
              {t("hero.description")}
            </p>
          </div>

          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
              <a href="#products" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold hover-scale"
                >
                  {t("hero.buttons.viewProducts")}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="professional"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-white/15 text-white border-white/30 hover:bg-white/25 backdrop-blur-sm font-semibold hover-scale drop-shadow-lg"
                >
                  {t("hero.buttons.getQuote")}
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-primary-foreground/90 drop-shadow-md transition-opacity duration-500 px-2 ${
                mounted ? "opacity-100 animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-1 sm:gap-2 bg-white/15 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">
                  {t("hero.trust.quality")}
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/15 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">
                  {t("hero.trust.delivery")}
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/15 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">
                  {t("hero.trust.supplier")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
