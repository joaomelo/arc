import { createAuthStore } from '../../features/auth';

export function createSessionStateStore () {
  const authStore = createAuthStore();

  return {
    authStore
  };
}
