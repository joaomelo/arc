import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { subscribe } from '@joaomelo/bus';
import { I18N_EVENTS } from '../common';
import { messages } from '../data';

function igniteI18n () {
  Vue.use(VueI18n);

  const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
  });

  const updateLang = ({ lang }) => {
    i18n.locale = lang;
  };
  subscribe(I18N_EVENTS.LANGUAGE_PREFERENCE_CHANGED, updateLang);

  return i18n;
}

export { igniteI18n };
