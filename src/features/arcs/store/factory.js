import { createEntityStore } from '../../../app/store';

export function createArcsStore (arcsRepository, authStore) {
  const arcsStore = createEntityStore({
    repository: arcsRepository,
    filters: [],
    authStore
  });
  return arcsStore;
}
