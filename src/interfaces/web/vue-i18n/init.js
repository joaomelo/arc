import Vue from 'vue';
import VueI18n from 'vue-i18n';

export function initVueI18n (defaultLocale, messages) {
  Vue.use(VueI18n);
  const i18n = new VueI18n({
    locale: defaultLocale,
    messages
  });
  return i18n;
}
