import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { isProduction } from '@/app/meta';
import { defaultLocale, messages } from '@/business/i18n';
import { initVueI18n } from '@/web/vue-i18n';
import { initVuex } from '@/app/store';
import { initValidation } from '@/interfaces/validation';
import { initFirestore } from '@/interfaces/db';
import { initFireauth } from '@/interfaces/auth';
import { initVue } from '@/interfaces/views';

function main () {
  // firebase
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
  const { authService, dbService } = initFirebase({ config, emulators });

  // state management
  const store = initStore({ authService, dbService });

  // web ui
  initValidation();
  const i18n = initVueI18n(defaultLocale, messages);
  const vuetify = initVuetify();
  const router = initRouter();
  initUi({
    el: '#container',
    root: AppShell,
    globals: { i18n, router, store, vuetify }
  });

  // store exposed for test suite
  window.$store = store;
}

main();
