import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { initFirestore } from '@/interfaces/db';
import { initFireauth } from '@/interfaces/auth';
import { initVuetify } from '@/interfaces/views';
import { isProduction } from '@/app/meta';
import { initVuex } from '@/app/store';
import { initVeeValidate } from '@/app/validation';
import { initVueI18n } from '@/app/i18n';

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
  const authService = initFireauth({ config, emulators });

  const store = initVuex({ authService, dbService });
  window.$store = store; // store exposed for test suite;

  initVeeValidate();
  const i18n = initVueI18n();

  initVuetify({ i18n, store });
}

main();
