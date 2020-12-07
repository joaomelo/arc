import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { defaultLocale } from '../locales';
import { mountMessages } from '../messages';

function connectVueI18n (defaultLocale, messages) {
  Vue.use(VueI18n);
  const vueI18n = new VueI18n({
    locale: defaultLocale,
    messages
  });
  return vueI18n;
}

export function initVueI18n () {
  const messages = mountMessages();
  const vueI18n = connectVueI18n(defaultLocale, messages);
  return vueI18n;
}
