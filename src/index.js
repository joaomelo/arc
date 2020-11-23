import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import { vuetify } from './core/vuetify';
import { App } from './core/app';

// Don't warn about using the dev version of Vue in development.
// Vue.config.productionTip = process.env.NODE_ENV === 'production'

const app = new Vue({
  // router,
  // store,
  vuetify,
  render: h => h(App)
});
app.$mount('#container');
