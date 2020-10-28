import { store } from '__cli/core/redux';

const selectLocale = state => state.preferences.locale;
export let currentLocale = selectLocale(store.getState());
export const onLocaleChange = handleLocaleChange => {
  store.subscribe(() => {
    const newLocale = selectLocale(store.getState());
    if (newLocale === currentLocale) return;

    currentLocale = newLocale;
    handleLocaleChange(currentLocale);
  });
};
