import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { initFirestore } from '@/interfaces/db';
import { initAdaptedFireauth } from '@/interfaces/auth';
import { initVuetifyApp } from '@/interfaces/views';
import { initVeeValidate } from '@/app/validation';
import { isProduction } from '@/app/meta';
import { initVuex } from '@/app/store';
import { initAdaptedVueI18n } from '@/app/i18n';

function main () {
  let emulators = null;
  if (!isProduction()) {
    emulators = {
      authPort: 9099,
      firestorePort: 8080
    };
  }
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseUrl: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSender_id: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
  const dbService = initFirestore({ config, emulators });
  const authService = initAdaptedFireauth({ config, emulators });

  const store = initVuex({ authService, dbService });
  window.$store = store; // store exposed for test suite;

  // validation
  const { validationComponents, validationMessages } = initVeeValidate();

  // i18n
  const dynamicModules = {
    validation: validationMessages
  };
  const i18n = initAdaptedVueI18n(dynamicModules);
  window.$i18n = i18n; // i18n service exposed for test suite;

  // view
  const mount = initVuetifyApp({
    globals: {
      i18n: i18n.service,
      store
    },
    components: validationComponents
  });
  mount();
}

main();
