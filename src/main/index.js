import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../app/styles';
import { mountView, Root } from '../app/view';
import { initFirebaseSuiteFromEnv } from '../app/firebase';
import { createRepositoryProvider } from '../app/repository';
import { createAuthStore, createIdentityProvider } from '../features/auth';
import { createArcsStore, createArcsRepository } from '../features/arcs';

async function main () {
  const suite = initFirebaseSuiteFromEnv();

  const firestoreEmulatorHost = process.env.FIRESTORE_EMULATOR_HOST;
  const repositoryProvider = await createRepositoryProvider({ ...suite, firestoreEmulatorHost });

  const authEmulatorHost = process.env.FIREAUTH_EMULATOR_HOST;
  const identityProvider = await createIdentityProvider({ ...suite, authEmulatorHost });
  const authStore = createAuthStore(identityProvider);

  const arcsRepository = createArcsRepository(repositoryProvider);
  const arcsStore = createArcsStore(arcsRepository);

  const dependencies = {
    identityProvider,
    authStore,
    arcsRepository,
    arcsStore
  };

  mountView({
    element: 'container',
    Root,
    dependencies
  });
}

main();
