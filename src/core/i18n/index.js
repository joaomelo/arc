import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './messages-en.js.js';
import br from './messages-br.js.js';

Vue.use(VueI18n);

const locales = [
  {
    id: 'en',
    title: 'english'
  },
  {
    id: 'pt_BR',
    title: 'português'
  }
];

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    pt_BR: br
  }
});

export { locales, i18n };
