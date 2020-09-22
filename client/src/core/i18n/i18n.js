import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { isProduction } from '__com/meta';
import en from './messages-en';
import br from './messages-pt-br';

const resources = {
  en: { translation: en },
  pt_BR: { translation: br }
};

i18n
  .use(initReactI18next)
  .init({
    debug: !isProduction(),
    resources,
    lng: 'en',
    interpolation: { escapeValue: false }
  });

export { i18n };
