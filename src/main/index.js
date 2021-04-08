import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../app/styles';
import { mountRoot } from '../app/root';
import { initFirebaseSuiteFromEnv } from '../app/firebase';
import { createRepositoryProvider } from '../app/repository';
import { createAuthStore, createIdentityProvider } from '../features/auth';
import { createArcsStore, createArcsRepository } from '../features/arcs';

async function main () {
  const suite = initFirebaseSuiteFromEnv();

  const authEmulatorHost = process.env.FIREAUTH_EMULATOR_HOST;
  const identityProvider = await createIdentityProvider({ ...suite, authEmulatorHost });
  const authStore = createAuthStore(identityProvider);

  const firestoreEmulatorHost = process.env.FIRESTORE_EMULATOR_HOST;
  const repositoryProvider = await createRepositoryProvider({ ...suite, firestoreEmulatorHost });

  const arcsRepository = createArcsRepository(repositoryProvider);
  const arcsStore = createArcsStore(arcsRepository, authStore);

  const dependencies = {
    identityProvider,
    authStore,
    arcsRepository,
    arcsStore
  };

  // dependencies exposed globally to facilitate e2e tests
  window.$dependencies = dependencies;

  mountRoot({
    element: 'container',
    dependencies
  });
}

main();
