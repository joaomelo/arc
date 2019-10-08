import Vue from 'vue';

import './styles';
import App from './app.vue';
import router from './router.js';
import store from './store';
import { authPlugin } from './firebase';

Vue.config.productionTip = false;
Vue.use(authPlugin);

const vueApp = new Vue({
  store,
  router,
  render: h => h(App)
});
vueApp.$mount('#app');
