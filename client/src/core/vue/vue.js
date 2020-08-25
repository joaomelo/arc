import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { appEnviroment } from '__cli/core/meta';
import { router } from '__cli/core/router';
import { apolloProvider } from '__cli/core/apollo';
import { i18n } from '__cli/core/i18n';
import VueRoot from './vue-root';

function initVue () {
  Vue.use(Vuetify);
  const vuetify = new Vuetify();

  Vue.config.productionTip = false;
  Vue.config.silent = appEnviroment() === 'prod';

  const vueRoot = new Vue({
    router,
    apolloProvider,
    i18n,
    vuetify,
    render: h => h(VueRoot)
  });

  vueRoot.$mount('#app');
}

export { initVue };
