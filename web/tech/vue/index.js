import Vue from 'vue';
import { isProduction } from '@/shared/meta';
import { router } from '@/app/router';
import { store } from '@/app/store';
import { AppShell } from '@/app/shell';
import { vuetify } from '@/tech/vuetify';

// don't warn about dev version in development mode.
Vue.config.productionTip = isProduction();

export const vueApp = new Vue({
  router,
  store,
  vuetify,
  render: h => h(AppShell)
});
