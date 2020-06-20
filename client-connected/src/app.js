import 'client-web/src/core/vue/core-js/stable';
import 'client-web/src/core/vue/regenerator-runtime/runtime';
import Vue from 'client-web/src/core/vue/client/src/vue';
import './core/composition-api';

import './core/styles';
import App from './app.vue';
import { vuetify } from './core/vuetify';
import { router } from './core/routes';
import { i18n } from './core/i18n';

Vue.config.productionTip = false;

const vueApp = new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
});

vueApp.$mount('#app');
