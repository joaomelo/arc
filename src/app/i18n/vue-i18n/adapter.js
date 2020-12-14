export function adaptVueI18n (vueI18n) {
  const i18n = {
    get currentLocale () { return vueI18n.locale; },
    get availableLocales () { return vueI18n.availableLocales; },
    get service () { return vueI18n; },

    updateLocale: newLocale => (vueI18n.locale = newLocale)
  };

  return i18n;
}
