import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import { vuetify } from './shared/vuetify';
import { isProduction } from './shared/meta';
import { App } from './shared/app';
import { router } from './shared/router';
import { store } from './shared/store';

// don't warn about dev version in development mode.
Vue.config.productionTip = isProduction();

const app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
});
app.$mount('#container');
