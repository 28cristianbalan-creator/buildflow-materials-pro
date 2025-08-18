import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Plus, Minus, ShoppingCart, ArrowLeft, Star, Truck, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, categories } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/hooks/use-toast";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const product = products.find(p => p.id === productId);
  const category = product ? categories.find(c => c.id === product.category) : null;
  const relatedProducts = products.filter(p => 
    p.category === product?.category && p.id !== product?.id
  ).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/categories">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      unit: product.unit,
      quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.unit}${quantity > 1 ? 's' : ''} of ${product.name} added to cart`,
    });
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-foreground">Categories</Link>
          <span>/</span>
          <Link to={`/categories/${product.category}`} className="hover:text-foreground">
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/categories">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-industrial"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{category?.name}</Badge>
                {product.inStock ? (
                  <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.8) 124 reviews</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold construction-orange">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg text-muted-foreground ml-2">
                  per {product.unit}
                </span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Quantity</label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-semibold min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground ml-2">
                        {product.unit}{quantity > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  <div className="text-lg font-semibold">
                    Total: <span className="construction-orange">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-construction-orange hover:bg-construction-orange-dark"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Truck className="h-5 w-5 construction-orange" />
                <div>
                  <p className="font-medium text-sm">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">Same day available</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Shield className="h-5 w-5 construction-orange" />
                <div>
                  <p className="font-medium text-sm">Quality Assured</p>
                  <p className="text-xs text-muted-foreground">Industry standards</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Info className="h-5 w-5 construction-orange" />
                <div>
                  <p className="font-medium text-sm">Expert Support</p>
                  <p className="text-xs text-muted-foreground">24/7 assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
                <CardDescription>Detailed technical information about this product</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>Why this product stands out</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-construction-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>What our customers say about this product</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium">John D.</span>
                      <span className="text-sm text-muted-foreground">2 weeks ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      "Excellent quality cement. Used it for my foundation work and it exceeded expectations. 
                      Fast delivery and great customer service."
                    </p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="font-medium">Sarah M.</span>
                      <span className="text-sm text-muted-foreground">1 month ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      "Good product overall. Packaging could be better but the material quality is top-notch."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="hover-lift group">
                    <CardHeader className="p-0">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg mb-2 group-hover:text-construction-orange transition-colors">
                        {relatedProduct.name}
                      </CardTitle>
                      <CardDescription className="text-sm mb-4">
                        {relatedProduct.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold construction-orange">
                            ${relatedProduct.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-muted-foreground ml-1">
                            / {relatedProduct.unit}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};