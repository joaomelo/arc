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
