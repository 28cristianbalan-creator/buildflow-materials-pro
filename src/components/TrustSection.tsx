import { Shield, Truck, Award, Users } from "lucide-react";

const TrustSection = () => {
  const stats = [
    {
      icon: Shield,
      value: "15+",
      label: "Years Experience",
      description: "Trusted construction material supplier"
    },
    {
      icon: Truck,
      value: "5000+",
      label: "Projects Delivered",
      description: "Successful project completions"
    },
    {
      icon: Award,
      value: "99%",
      label: "Quality Rating",
      description: "Customer satisfaction guaranteed"
    },
    {
      icon: Users,
      value: "1200+",
      label: "Happy Clients",
      description: "Building lasting relationships"
    }
  ];

  return (
    <section className="py-20 bg-construction-slate text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose BuildFlow?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We've been serving the construction industry with excellence, 
            delivering quality materials and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <p className="text-white/70 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/80 mb-6">
              Get expert advice and premium materials for your construction needs. 
              Our team is ready to help you build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105">
                Get Free Quote
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300">
                Call Now: +1 (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;