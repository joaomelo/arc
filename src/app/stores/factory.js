import { createAuthStore } from '../../features/auth';

export function createStores () {
  const authStore = createAuthStore();

  return {
    authStore
  };
}
