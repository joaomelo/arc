import { usersMessages } from '@/domain/users';
import { locales } from './locales';

function extractLocale (modules, key) {
  const messages = {};
  for (const module in modules) {
    messages[module] = modules[module][key];
  }
  return messages;
}

export function aggregateMessages (dynamicModules = {}) {
  const allModules = {
    users: usersMessages,
    ...dynamicModules
  };

  const messages = {
    [locales.en.code]: extractLocale(allModules, 'en'),
    [locales.ptBR.code]: extractLocale(allModules, 'ptBR')
  };

  return messages;
};
