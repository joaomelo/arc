import { defaultLocale, messages } from '@/business/i18n';
import { connectVueI18n } from './connect';

export function initVueI18n () {
  return connectVueI18n(defaultLocale, messages);
}
