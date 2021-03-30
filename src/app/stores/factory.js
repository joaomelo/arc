import { createAuthStore } from '../../features/auth';
import { createArcsStore } from '../../features/arcs';

export function createStores () {
  const authStore = createAuthStore();
  const arcsStore = createArcsStore();

  return {
    authStore,
    arcsStore
  };
}
