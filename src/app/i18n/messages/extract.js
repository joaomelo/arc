import { locales } from '../locales';

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
