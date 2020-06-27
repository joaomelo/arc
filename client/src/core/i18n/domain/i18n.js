import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '../messages/en';
import br from '../messages/pt-br';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    pt_BR: br
  }
});

export { i18n };
