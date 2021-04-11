import { createEntityStore } from '../../../app/store';

export function createChallengesStore (challengesRepository, authStore) {
  const challengesStore = createEntityStore({
    repository: challengesRepository,
    filters: [],
    authStore
  });
  return challengesStore;
}
