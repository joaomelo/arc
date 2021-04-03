export function createArcsRepository (repositoryProvider) {
  const arcsRepository = repositoryProvider.repository('arcs');
  return arcsRepository;
}
