import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

import './core/styles';
import App from './app.vue';
import { router } from './core/routes';
import { store } from './core/store';
import { i18n } from './core/i18n';

Vue.use(VueCompositionApi);

const vueApp = new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
});

vueApp.$mount('#app');
