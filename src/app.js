import Vue from 'vue';

import './styles';
import App from './app.vue';
import router from './router.js';
import store from './store';
import { i18n } from './i18n';
import { it, mapStoreFunction } from '@/helpers/taxonomy.js';

Vue.config.productionTip = false;

const vueApp = new Vue({
  i18n,
  store,
  router,
  created () {
    // load all collections
    it.forEach(type => this.$store.dispatch(mapStoreFunction(type, 'binAction')));
  },
  render: h => h(App)
});

vueApp.$mount('#app');
