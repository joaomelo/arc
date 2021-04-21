import { locales } from '../locales';

import { authMessages } from '@/domain/auth';
import { extractMessagesFromModules } from './extract';

export function mountMessages (dynamicModules = {}) {
  const modules = {
    auth: authMessages,
    ...dynamicModules
  };

  const rootMessages = extractMessagesFromModules(modules);
  return rootMessages;
}

function extractLocale (modules, key) {
  const messages = {};
  for (const module in modules) {
    messages[module] = modules[module][key];
  }
  return messages;
}

export function extractMessagesFromModules (modules) {
  const rootMessages = {};
  for (const locale in locales) {
    const code = locales[locale].code;
    rootMessages[code] = extractLocale(modules, code);
  };

  return rootMessages;
};
