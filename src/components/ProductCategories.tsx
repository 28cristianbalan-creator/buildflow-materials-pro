import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import redBricksImage from "@/assets/red-bricks.jpg";
import bcaBlocksImage from "@/assets/bca-blocks.jpg";
import aggregatesImage from "@/assets/aggregates.jpg";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Clay Bricks",
      description: "Premium quality red clay bricks for all construction needs. Durable, weather-resistant, and available in various sizes.",
      image: redBricksImage,
      features: ["High Strength", "Weather Resistant", "Standard Sizes"],
      price: "From $0.45/brick"
    },
    {
      id: 2,
      title: "BCA Blocks",
      description: "Lightweight autoclaved aerated concrete blocks. Energy efficient, easy to work with, excellent insulation properties.",
      image: bcaBlocksImage,
      features: ["Lightweight", "Thermal Insulation", "Easy Installation"],
      price: "From $12.50/m²"
    },
    {
      id: 3,
      title: "Aggregates",
      description: "High-grade construction aggregates including sand, gravel, and crushed stone. Perfect for concrete and foundation work.",
      image: aggregatesImage,
      features: ["Various Grades", "Clean & Tested", "Bulk Available"],
      price: "From $35/ton"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium construction materials sourced from trusted manufacturers, 
            delivered with excellence and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="group bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {category.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="professional" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button variant="hero" size="lg">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;