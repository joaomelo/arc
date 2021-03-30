import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import { initFirestore } from '@/interfaces/db';
// import { initAdaptedFireauth } from '@/interfaces/auth';
// import { initVuetifyApp } from '@/interfaces/views';
// import { initVeeValidate } from '@/app/validation';
// import { isProduction } from '@/app/meta';
// import { initAdaptedVueI18n } from '@/app/i18n';
import { createStores } from '../app/stores';
import { initFirebaseAppFromEnv } from '../app/firebase';
import { createIdentityProvider } from '../features/auth';
import { mountView, Root } from '../app/view';
import '../app/styles';

async function main () {
  const stores = createStores();

  const app = initFirebaseAppFromEnv();
  const emulatorHost = process.env.FIRESTORE_EMULATOR_HOST;
  const identityProvider = await createIdentityProvider({ app, emulatorHost });

  // const dbService = initFirestore({ config, emulators });
  // i18n
  // const i18n = initAdaptedVueI18n();
  // validation
  // const { validationComponents } = initVeeValidate(i18n);

  const dependencies = {
    stores,
    identityProvider
  };

  mountView({
    element: 'container',
    Root,
    dependencies
  });
}

main();
