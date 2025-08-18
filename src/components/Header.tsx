import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import craneLogo from "@/assets/crane-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navigationItems = [
    { name: t('home'), href: "/" },
    { name: t('categories'), href: "/categories" },
    { name: t('about'), href: "/about" },
    { name: t('contact'), href: "/contact" },
  ];

  return (
    <header className="bg-gray-100 dark:bg-gray-800 border-b border-border shadow-industrial sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - Left side */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo and Brand - Center on mobile, left on desktop */}
          <Link to="/" className="flex items-center space-x-3 hover-lift lg:mr-auto">
            <img src={craneLogo} alt="BuildFlow Crane Logo" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold construction-orange">{t('buildflow')}</span>
              <span className="text-xs text-muted-foreground hidden sm:block">{t('construction_materials')}</span>
            </div>
          </Link>

          {/* Desktop Navigation and Catalogue - Grouped */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            <nav className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                 <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <Link to="/categories">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-construction ml-6">
                {t('browse_catalogue')}
              </Button>
            </Link>
          </div>

          {/* Cart and Language - Right side */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            
            <Link to="/cart" className="relative hover-lift">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Catalogue Button */}
        <div className="md:hidden py-3 border-t border-border/50">
          <Link to="/categories">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-construction">
              {t('browse_catalogue')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Search Bar - Under Header */}
      <div className="bg-gray-100 dark:bg-gray-800 py-4 border-t border-border/50">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="flex items-center max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 w-full h-12 text-lg bg-background border-2 border-border focus:border-construction-orange focus:ring-construction-orange/20 transition-colors"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 px-4 text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};