import { useEffect, useState, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MegaMenu from "@/components/MegaMenu";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Optimized menu toggle with useCallback
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Close menu on route change
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Common navigation link classes
  const navLinkClasses = `story-link font-medium transition-colors duration-300 ${
    scrolled ? 'text-foreground' : 'text-primary-foreground drop-shadow-md'
  } hover:text-primary`;

  const mobileNavLinkClasses = "text-foreground hover:text-primary transition-colors duration-300 font-medium py-3 px-3 hover:bg-accent/50 rounded-lg active:scale-[0.98]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-soft'
          : 'bg-background/30 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8" role="navigation" aria-label="Main navigation">
            <a href="#home" className={navLinkClasses}>{t('header.nav.home')}</a>
            <div className={`transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-primary-foreground drop-shadow-md'
            }`}>
              <MegaMenu scrolled={scrolled} />
            </div>
            <a href="#about" className={navLinkClasses}>{t('header.nav.about')}</a>
            <a href="#contact" className={navLinkClasses}>{t('header.nav.contact')}</a>
          </nav>

          {/* Contact Info, Language & CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a 
              href="tel:+1-555-123-4567"
              className={`flex items-center gap-2 text-sm transition-all duration-300 hover:text-primary ${
                scrolled ? 'text-muted-foreground' : 'text-primary-foreground/90 drop-shadow-md'
              }`}
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium hidden xl:inline">{t('header.phone')}</span>
            </a>
            <LanguageSwitcher />
            <Button variant="hero" size="sm" className="font-semibold hover-scale">
              {t('header.cta.getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-200 active:scale-95 ${
              scrolled 
                ? 'text-foreground hover:bg-accent' 
                : 'text-primary-foreground hover:bg-primary-foreground/20 drop-shadow-lg'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className={`md:hidden py-6 border-t transition-all duration-300 animate-fade-in ${
              scrolled ? 'border-border bg-background/98' : 'border-primary-foreground/20 bg-background/98'
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col space-y-2">
              <a 
                href="#home" 
                className={mobileNavLinkClasses}
                onClick={closeMenu}
              >
                {t('header.nav.home')}
              </a>
              <a 
                href="#products" 
                className={mobileNavLinkClasses}
                onClick={closeMenu}
              >
                {t('header.nav.products')}
              </a>
              <a 
                href="#about" 
                className={mobileNavLinkClasses}
                onClick={closeMenu}
              >
                {t('header.nav.about')}
              </a>
              <a 
                href="#contact" 
                className={mobileNavLinkClasses}
                onClick={closeMenu}
              >
                {t('header.nav.contact')}
              </a>
              
              {/* Mobile Contact & Actions */}
              <div className="flex flex-col gap-4 pt-6 border-t border-border/20 mt-4">
                <a 
                  href="tel:+1-555-123-4567"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-accent/50 rounded-lg"
                  aria-label="Call us"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{t('header.phone')}</span>
                </a>
                
                <div className="flex items-center justify-between px-3">
                  <span className="text-sm font-medium text-foreground">Language</span>
                  <LanguageSwitcher />
                </div>
                
                <Button variant="hero" size="default" className="w-full font-semibold hover-scale mt-2">
                  {t('header.cta.getQuote')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;