import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import { vuetify } from './core/vuetify';
import { isProduction } from './core/meta';
import { App } from './core/app';
import { router } from './core/router';

// don't warn about dev version in development mode.
Vue.config.productionTip = isProduction();

const app = new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App)
});
app.$mount('#container');
