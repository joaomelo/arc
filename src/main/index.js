import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import { initFirestore } from '@/interfaces/db';
// import { initAdaptedFireauth } from '@/interfaces/auth';
// import { initVuetifyApp } from '@/interfaces/views';
// import { initVeeValidate } from '@/app/validation';
// import { isProduction } from '@/app/meta';
// import { initVuex } from '@/app/store';
// import { initAdaptedVueI18n } from '@/app/i18n';
import { mountVue } from '../app/vue-app';
import { PageTest } from '../features/auth';

function main () {
  // let emulators = null;
  // if (!isProduction()) {
  //   emulators = {
  //     authPort: 9099,
  //     firestorePort: 8080
  //   };
  // }
  // const config = {
  //   apiKey: process.env.API_KEY,
  //   authDomain: process.env.AUTH_DOMAIN,
  //   databaseUrl: process.env.DATABASE_URL,
  //   projectId: process.env.PROJECT_ID,
  //   storageBucket: process.env.STORAGE_BUCKET,
  //   messagingSender_id: process.env.MESSAGING_SENDER_ID,
  //   appId: process.env.APP_ID,
  //   measurementId: process.env.MEASUREMENT_ID
  // };
  // const dbService = initFirestore({ config, emulators });
  // const authService = initAdaptedFireauth({ config, emulators });

  // const store = initVuex({ authService, dbService });

  // i18n
  // const i18n = initAdaptedVueI18n();

  // validation
  // const { validationComponents } = initVeeValidate(i18n);

  // view
  // const mount = initVuetifyApp({
  //   globals: {
  //     i18n: i18n.service,
  //     store
  //   },
  //   components: validationComponents
  // });
  mountVue({
    element: '#container',
    root: PageTest
  });
}

main();
