import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { messages } from '../data';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export { i18n };
