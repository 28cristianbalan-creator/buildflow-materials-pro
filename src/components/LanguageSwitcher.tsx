import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'ro' | 'ru') => {
    void i18n.changeLanguage(lng);
    // Update <html lang> for accessibility/SEO
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lng;
    }
  };

  return (
    <select
      aria-label="Language"
      value={i18n.language.startsWith('ru') ? 'ru' : 'ro'}
      onChange={(e) => changeLanguage(e.target.value as 'ro' | 'ru')}
      className="bg-transparent border border-border rounded-md px-2 py-1 text-sm text-foreground hover-scale"
    >
      <option value="ro">RO</option>
      <option value="ru">RU</option>
    </select>
  );
};

export default LanguageSwitcher;
