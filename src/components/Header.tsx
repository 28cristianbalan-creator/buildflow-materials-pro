import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/LanguageSwitcher";
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
          ? 'bg-background/70 backdrop-blur-lg border-b border-border shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
            </div>
            <span className="text-xl font-bold text-foreground">BuildFlow</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="story-link text-foreground">{t('header.nav.home')}</a>
            <a href="#products" className="story-link text-foreground">{t('header.nav.products')}</a>
            <a href="#about" className="story-link text-foreground">{t('header.nav.about')}</a>
            <a href="#contact" className="story-link text-foreground">{t('header.nav.contact')}</a>
          </nav>

          {/* Contact Info, Language & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>{t('header.phone')}</span>
            </div>
            <LanguageSwitcher />
            <Button variant="hero" size="sm">
              {t('header.cta.getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">{t('header.nav.home')}</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors duration-300">{t('header.nav.products')}</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">{t('header.nav.about')}</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">{t('header.nav.contact')}</a>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{t('header.phone')}</span>
                </div>
                <LanguageSwitcher />
              </div>
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full">
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