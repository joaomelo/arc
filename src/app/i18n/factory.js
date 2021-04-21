import { BehaviorSubject } from 'rxjs';

import { initVueI18n } from './service';
import { adaptVueI18n } from './adapter';
import { defaultLocale } from '../locales';
import { mountMessages } from '../messages';

export function initAdaptedVueI18n (dynamicModules) {
  const messages = mountMessages(dynamicModules);
  const vueI18n = initVueI18n({ defaultLocale, messages });

  const i18n = adaptVueI18n(vueI18n);
  return i18n;
}

export function initVueI18n ({ defaultLocale, messages }) {
  Vue.use(VueI18n);
  const vueI18n = new VueI18n({
    locale: defaultLocale,
    messages: messages
  });

  return vueI18n;
}


export function adaptVueI18n (vueI18n) {
  const onLocaleUpdateSubject = new BehaviorSubject(vueI18n.locale);

  const i18n = {
    get currentLocale () { return vueI18n.locale; },
    get availableLocales () { return vueI18n.availableLocales; },
    get service () { return vueI18n; },

    updateLocale: newLocale => {
      vueI18n.locale = newLocale;
      onLocaleUpdateSubject.next(newLocale);
    },
    onLocaleUpdate: callback => onLocaleUpdateSubject.subscribe(callback)
  };

  return i18n;
}
