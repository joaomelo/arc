import Vue from 'vue';
import './core/composition-api';

import './core/styles';
import App from './app.vue';
import { router } from './core/routes';
import { i18n } from './core/i18n';

const vueApp = new Vue({
  i18n,
  router,
  render: h => h(App)
});

vueApp.$mount('#app');
