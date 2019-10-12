import Vue from 'vue';

import './styles';
import App from './app.vue';
import router from './router.js';
import store from './store';

Vue.config.productionTip = false;

const vueApp = new Vue({
  store,
  router,
  render: h => h(App)
});

vueApp.$mount('#app');
