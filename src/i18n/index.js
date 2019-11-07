import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './messages-en.js';
import br from './messages-br.js';

Vue.use(VueI18n);

const locales = {
  en: 'en',
  br: 'pt_BR'
};

const i18n = new VueI18n({
  locale: locales.br,
  fallbackLocale: locales.en,
  messages: {
    [locales.en]: en,
    [locales.br]: br
  }
});

export { locales, i18n };
