import { locales } from '../locales';
import en from './messages-en';
import ptBR from './messages-pt-br';

export function mountMessages (extraMessages = {}) {
  const messages = {
    [locales.en.code]: {
      ...en,
      ...extraMessages[en]
    },
    [locales.ptBR.code]: {
      ...ptBR,
      ...extraMessages[ptBR]
    }
  };

  return messages;
};
