import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/hooks/use-toast";

export const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice, getTotalItems } = useCartStore();
  const { toast } = useToast();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart",
      });
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-16">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added any construction materials to your cart yet.
            </p>
            <Link to="/categories">
              <Button size="lg" className="bg-construction-orange hover:bg-construction-orange-dark">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/categories">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-muted-foreground">
                {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            <Button variant="outline" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    
                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            {item.unit}{item.quantity > 1 ? 's' : ''}
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)} per {item.unit}
                          </div>
                          <div className="text-lg font-bold construction-orange">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} × {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tax (estimated)</span>
                    <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="construction-orange">
                    ${(getTotalPrice() * 1.1).toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-construction-orange hover:bg-construction-orange-dark"
                  >
                    Proceed to Checkout
                  </Button>
                  <Link to="/categories" className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
                
                <div className="text-center text-sm text-muted-foreground pt-4">
                  <p>Secure checkout with SSL encryption</p>
                  <p>Free delivery on orders over $500</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};