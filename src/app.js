import Vue from 'vue';

import './core/styles';
import App from './app.vue';
import { router } from './router.js';
import { store } from './core/store';
import { i18n } from './core/i18n';

const vueApp = new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
});

vueApp.$mount('#app');
