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
