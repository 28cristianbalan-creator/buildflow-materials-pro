import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// Define language options with flags for display
const languages = [
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
] as const;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'ro' | 'ru' | 'en') => {
    void i18n.changeLanguage(lng);
    // Update <html lang> for accessibility/SEO
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lng;
    }
  };

  const getCurrentLang = () => {
    if (i18n.language.startsWith('ru')) return 'ru';
    if (i18n.language.startsWith('en')) return 'en';
    return 'ro';
  };

  const currentLang = getCurrentLang();
  const currentLangInfo = languages.find(lang => lang.code === currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-sm">
          <Globe className="h-4 w-4 mr-1" />
          {currentLangInfo?.flag || '🌐'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center ${currentLang === lang.code ? 'bg-accent' : ''}`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;