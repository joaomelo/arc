import 'core-js/stable';
import 'regenerator-runtime/runtime';

// firebase initialization
import { isProduction } from '@/shared/meta';
import { initFirebase } from '@/tech/firebase';
// vue ecosystem
import { initStore } from '@/store';
import { initUi } from './tech/vue';
import { initVuetify } from '@/tech/vuetify';
import { initRouter } from '@/app/router';
// root element
import { AppShell } from '@/app/shell';

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

  // store
  const store = initStore({ authService, dbService });

  // vue
  const vuetify = initVuetify();
  const router = initRouter(store);
  initUi({
    el: '#container',
    root: AppShell,
    globals: { router, store, vuetify }
  });
}

main();
