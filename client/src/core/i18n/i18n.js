import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { isProduction } from '__com/meta';
import en from './messages-en';
import br from './messages-pt-br';
import { currentLocale, onLocaleChange } from './queries';

const resources = {
  en: { translation: en },
  pt_BR: { translation: br }
};

i18n
  .use(initReactI18next)
  .init({
    debug: !isProduction(),
    resources,
    lng: currentLocale,
    interpolation: { escapeValue: false }
  });

onLocaleChange(locale => i18n.changeLanguage(locale));

export { i18n };
