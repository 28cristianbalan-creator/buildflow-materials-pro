import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ro from './locales/ro/common.json';
import ru from './locales/ru/common.json';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      ro: { translation: ro },
      ru: { translation: ru },
    },
    lng: 'ro',
    fallbackLng: 'ro',
    interpolation: { escapeValue: false },
  });

export default i18n;
