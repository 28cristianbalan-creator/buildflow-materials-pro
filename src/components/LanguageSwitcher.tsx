import { useTranslation } from 'react-i18next';

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

  return (
    <select
      aria-label="Language"
      value={getCurrentLang()}
      onChange={(e) => changeLanguage(e.target.value as 'ro' | 'ru' | 'en')}
      className="bg-transparent border border-border rounded-md px-2 py-1 text-sm text-foreground hover-scale"
    >
      <option value="ro">RO</option>
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitcher;
