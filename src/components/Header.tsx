import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-soft'
          : 'bg-background/30 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className={`story-link font-medium transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-primary-foreground drop-shadow-md'
            } hover:text-primary`}>{t('header.nav.home')}</a>
            <div className={`transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-primary-foreground drop-shadow-md'
            }`}>
              <MegaMenu />
            </div>
            <a href="#about" className={`story-link font-medium transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-primary-foreground drop-shadow-md'
            } hover:text-primary`}>{t('header.nav.about')}</a>
            <a href="#contact" className={`story-link font-medium transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-primary-foreground drop-shadow-md'
            } hover:text-primary`}>{t('header.nav.contact')}</a>
          </nav>

          {/* Contact Info, Language & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
              scrolled ? 'text-muted-foreground' : 'text-primary-foreground/90 drop-shadow-md'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="font-medium">{t('header.phone')}</span>
            </div>
            <LanguageSwitcher />
            <Button variant="hero" size="sm" className="font-semibold">
              {t('header.cta.getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled 
                ? 'text-foreground hover:bg-accent' 
                : 'text-primary-foreground hover:bg-primary-foreground/20 drop-shadow-lg'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-6 border-t transition-all duration-300 animate-fade-in ${
            scrolled ? 'border-border bg-background/95' : 'border-primary-foreground/20 bg-background/95'
          }`}>
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 px-1 hover:bg-accent/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.home')}
              </a>
              <a 
                href="#products" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 px-1 hover:bg-accent/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.products')}
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 px-1 hover:bg-accent/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.about')}
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 px-1 hover:bg-accent/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.nav.contact')}
              </a>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/20">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{t('header.phone')}</span>
                </div>
                <LanguageSwitcher />
              </div>
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full font-semibold">
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