import { BehaviorSubject } from 'rxjs';

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
