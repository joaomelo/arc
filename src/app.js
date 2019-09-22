import Vue from 'vue';

import './styles';

import App from './app.vue';
import router from './router';

const vueApp = new Vue({
  router,
  render: h => h(App)
});
vueApp.$mount('#app');
