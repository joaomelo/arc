import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { defaultLocale, aggregateMessages } from '../locales';

export function initVueI18n (extraMessages) {
  const messages = aggregateMessages(extraMessages);

  Vue.use(VueI18n);
  const vueI18n = new VueI18n({
    locale: defaultLocale,
    messages
  });

  return vueI18n;
}
