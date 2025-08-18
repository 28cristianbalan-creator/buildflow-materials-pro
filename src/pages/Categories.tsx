import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, products } from "@/data/products";

export const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Product Categories</h1>
          <p className="text-xl text-muted-foreground">
            Browse our comprehensive selection of construction materials and equipment
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-semibold mb-3">Search Products</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search materials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories ({products.length})
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name} ({category.productCount})
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* View Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products
                </span>
                {selectedCategory && (
                  <Badge variant="secondary">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className={`hover-lift group h-full ${viewMode === "list" ? "flex" : ""}`}>
                    <CardHeader className={viewMode === "list" ? "p-0 w-48 flex-shrink-0" : "p-0"}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className={`object-cover ${
                          viewMode === "list" 
                            ? "w-full h-full rounded-l-lg" 
                            : "w-full h-48 rounded-t-lg"
                        }`}
                      />
                    </CardHeader>
                    <CardContent className="p-4 flex-1">
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
                      <CardDescription className="text-sm mb-4">
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or browse all categories
                </p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};