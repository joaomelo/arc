import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { initRouter } from './router';
import { AppShell } from './layouts';

export function connectVuetify () {
  Vue.use(Vuetify);
  const vuetify = new Vuetify({});
  return vuetify;
}

function connectVue ({ root, globals }) {
  const vue = new Vue({
    ...globals,
    render: h => h(root)
  });
  return vue;
}

export function initVuetify (extraGlobals) {
  const vuetify = connectVuetify();
  const router = initRouter();

  const vue = connectVue({
    root: AppShell,
    globals: {
      router,
      vuetify,
      ...extraGlobals
    }
  });

  vue.$mount('#container');
  return vue;
}
