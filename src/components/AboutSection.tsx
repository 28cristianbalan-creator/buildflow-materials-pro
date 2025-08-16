import { useTranslation } from 'react-i18next';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-section" aria-labelledby="about-heading">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 id="about-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Despre BuildFlow
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Liderul în furnizarea de materiale de construcții de calitate superioară din Moldova
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Peste 15 ani de experiență în construcții
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              BuildFlow este o companie de familie cu o pasiune pentru calitate și fiabilitate. 
              Începând din 2008, am furnizat materiale de construcție premium pentru mii de proiecte 
              rezidențiale și comerciale din întreaga țară.
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Materiale certificate conform standardelor europene",
                "Livrare rapidă în întreaga țară",
                "Consultanță tehnică specializată",
                "Prețuri competitive pentru comenzi în vrac"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base text-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg mb-2 sm:mb-3 mx-auto">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Ani experiență</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg mb-2 sm:mb-3 mx-auto">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">5000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clienți mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg mb-2 sm:mb-3 mx-auto">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">24h</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Livrare rapidă</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in order-first lg:order-last">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center"
                alt="Echipa BuildFlow"
                className="w-full h-56 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-xl sm:rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-construction-slate/20 to-transparent rounded-xl sm:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;