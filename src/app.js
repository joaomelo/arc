import Vue from 'vue';

import './styles';
import App from './app.vue';
import router from './router.js';
import store from './store';
import { i18n } from './i18n';

Vue.config.productionTip = false;

const vueApp = new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
});

vueApp.$mount('#app');
