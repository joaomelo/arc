import { root } from '../root';
import { locales } from './locales';

function extractLocale (modules, key) {
  const messages = {};
  for (const module in modules) {
    messages[module] = modules[module][key];
  }
  return messages;
}

export function aggregateMessages (modules = {}) {
  const allModules = {
    ...root,
    ...modules
  };

  const messages = {
    [locales.en.code]: extractLocale(allModules, 'en'),
    [locales.ptBR.code]: extractLocale(allModules, 'ptBR')
  };

  return messages;
};
