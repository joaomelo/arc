import Vue from 'vue';
import VueI18n from 'vue-i18n';

import './styles';
import App from './app.vue';
import router from './router.js';
import store from './store';
import { it, mapStoreFunction } from '@/helpers/taxonomy.js';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const vueApp = new Vue({
  store,
  router,
  created () {
    // load all collections
    it.forEach(type => this.$store.dispatch(mapStoreFunction(type, 'binAction')));
  },
  render: h => h(App)
});

vueApp.$mount('#app');
