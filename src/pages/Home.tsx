import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products, categories } from "@/data/products";
import brandsShowcase from "@/assets/brands-showcase.jpg";
import warehouseHero from "@/assets/warehouse-hero.jpg";

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${warehouseHero})` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Building the Future with 
              <span className="block construction-orange">Premium Materials</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              Your trusted partner for high-quality construction materials. 
              From foundation to finish, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories">
                <Button size="lg" className="bg-construction-orange hover:bg-construction-orange-dark text-white shadow-construction">
                  Browse Catalogue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-steel-blue">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-construction-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Same-day and next-day delivery available for all orders</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-construction-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">All materials meet or exceed industry standards</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-construction-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Expert support team available around the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of construction materials and equipment
            </p>
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category, index) => (
              <Link key={category.id} to={`/categories/${category.id}`}>
                <Card className="hover-lift group border-2 border-transparent hover:border-construction-orange transition-all duration-300">
                  <CardHeader>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <CardTitle className="group-hover:text-construction-orange transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{category.productCount} Products</Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-construction-orange transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Swipe to explore categories
                <ChevronRight className="h-4 w-4" />
              </p>
            </div>
            <Carousel className="w-full max-w-sm mx-auto" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {categories.slice(0, 3).map((category) => (
                  <CarouselItem key={category.id} className="pl-2 md:pl-4">
                    <Link to={`/categories/${category.id}`}>
                      <Card className="hover-lift group border-2 border-transparent hover:border-construction-orange transition-all duration-300">
                        <CardHeader>
                          <img 
                            src={category.image} 
                            alt={category.name}
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                          />
                          <CardTitle className="group-hover:text-construction-orange transition-colors">
                            {category.name}
                          </CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">{category.productCount} Products</Badge>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-construction-orange transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
          <div className="text-center mt-8">
            <Link to="/categories">
              <Button size="lg" variant="outline" className="border-construction-orange text-construction-orange hover:bg-construction-orange hover:text-white">
                View All Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular construction materials
            </p>
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="hover-lift group h-full">
                  <CardHeader className="p-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === product.category)?.name}
                      </Badge>
                      {product.inStock && (
                        <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                          In Stock
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-construction-orange transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm mb-4 line-clamp-2">
                      {product.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold construction-orange">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          / {product.unit}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Swipe to browse products
                <ChevronRight className="h-4 w-4" />
              </p>
            </div>
            <Carousel className="w-full max-w-sm mx-auto" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredProducts.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4">
                    <Link to={`/product/${product.id}`}>
                      <Card className="hover-lift group h-full">
                        <CardHeader className="p-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {categories.find(c => c.id === product.category)?.name}
                            </Badge>
                            {product.inStock && (
                              <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                                In Stock
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg mb-2 group-hover:text-construction-orange transition-colors">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-sm mb-4 line-clamp-2">
                            {product.description}
                          </CardDescription>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold construction-orange">
                                ${product.price.toFixed(2)}
                              </span>
                              <span className="text-sm text-muted-foreground ml-1">
                                / {product.unit}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
          <div className="text-center mt-8">
            <Link to="/categories">
              <Button size="lg" variant="outline" className="border-construction-orange text-construction-orange hover:bg-construction-orange hover:text-white">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We partner with the world's leading construction brands to bring you quality materials
            </p>
          </div>
          
          {/* Static Brand Carousel Layout */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {/* Brand placeholders with consistent styling */}
              <div className="bg-muted/50 rounded-lg p-6 w-full h-20 flex items-center justify-center border border-border/50 hover:border-construction-orange/30 transition-colors">
                <span className="text-sm font-semibold text-muted-foreground">CATERPILLAR</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 w-full h-20 flex items-center justify-center border border-border/50 hover:border-construction-orange/30 transition-colors">
                <span className="text-sm font-semibold text-muted-foreground">KOMATSU</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 w-full h-20 flex items-center justify-center border border-border/50 hover:border-construction-orange/30 transition-colors">
                <span className="text-sm font-semibold text-muted-foreground">BOBCAT</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 w-full h-20 flex items-center justify-center border border-border/50 hover:border-construction-orange/30 transition-colors">
                <span className="text-sm font-semibold text-muted-foreground">DEWALT</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 w-full h-20 flex items-center justify-center border border-border/50 hover:border-construction-orange/30 transition-colors">
                <span className="text-sm font-semibold text-muted-foreground">MILWAUKEE</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 w-full h-20 flex items-center justify-center border border-border/50 hover:border-construction-orange/30 transition-colors">
                <span className="text-sm font-semibold text-muted-foreground">HILTI</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Join thousands of satisfied customers who trust our quality and service
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-gray text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts for personalized quotes and professional advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-construction-orange hover:bg-construction-orange-dark">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-industrial-gray">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};