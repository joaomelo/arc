import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { initUi } from './tech/vue';
// init and inject firebase in vue components
import { initAndInjectFirebaseServices } from '@/tech/firebase';
// vue plugins
import { initVuetify } from '@/tech/vuetify';
import { initStore } from '@/app/store';
import { initRouter } from '@/app/router';
// root element
import { AppShell } from '@/app/shell';

function main () {
  initAndInjectFirebaseServices();
  const vuetify = initVuetify();
  const store = initStore();
  const router = initRouter(store);

  initUi({
    el: '#container',
    root: AppShell,
    globals: { router, store, vuetify }
  });
}

main();
