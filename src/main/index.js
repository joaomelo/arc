import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../app/styles';
import { initFirebaseSuiteFromEnv } from '../app/firebase';
import { mountView, Root } from '../app/view';
import { createAuthStore, createIdentityProvider } from '../features/auth';
import { createArcsStore, createArcsRepository } from '../features/arcs';

async function main () {
  const suite = initFirebaseSuiteFromEnv();
  const emulatorHost = process.env.FIREAUTH_EMULATOR_HOST;

  const identityProvider = await createIdentityProvider({ suite, emulatorHost });
  const authStore = createAuthStore(identityProvider);

  const arcsRepository = createArcsRepository();
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
