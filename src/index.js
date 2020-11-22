import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import { App } from '__cli/core/app';

// Don't warn about using the dev version of Vue in development.
// Vue.config.productionTip = process.env.NODE_ENV === 'production'

const app = new Vue({
  // router,
  // store,
  render: h => h(App)
});
app.$mount('#container');
