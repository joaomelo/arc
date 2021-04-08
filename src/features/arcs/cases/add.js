import { createUuid } from '../../../app/ids';

export function addCase (arcData, dependencies) {
  const { arcsRepository, authStore } = dependencies;

  const arc = {
    id: createUuid(),
    creator: authStore.getters.userId,
    ...arcData
  };

  return arcsRepository.add(arc);
}
