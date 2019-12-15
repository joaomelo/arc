import Vue from 'vue';

import './styles';
import App from './app.vue';
import router from './router.js';
import store from './data/store';
import { i18n } from './i18n';

const vueApp = new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
});

vueApp.$mount('#app');
