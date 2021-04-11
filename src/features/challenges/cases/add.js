import { createUuid } from '../../../app/ids';

export function addCase (challengeData, dependencies) {
  const { challengesRepository } = dependencies;

  const challenge = {
    id: createUuid(),
    ...challengeData
  };

  return challengesRepository.add(challenge);
}
