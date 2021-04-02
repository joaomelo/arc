import { createEntityStore } from '../../../app/store';

export function createArcsStore (arcsRepository) {
  const arcsStore = createEntityStore({
    repository: arcsRepository
  });
  return arcsStore;
}
