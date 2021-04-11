export function createChallengesRepository (repositoryProvider) {
  const challengesRepository = repositoryProvider.repository('challenges');
  return challengesRepository;
}
