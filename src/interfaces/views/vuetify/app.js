import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { initRouter } from './router';
import { AppShell } from './layouts';

function initVuetify () {
  Vue.use(Vuetify);
  const vuetify = new Vuetify({});
  return vuetify;
}

function initVue ({ el, root, globals, components }) {
  for (const name in components) {
    Vue.component(name, components[name]);
  }

  const vue = new Vue({
    ...globals,
    render: h => h(root)
  });

  const mount = () => vue.$mount(el);
  return mount;
}

export function initVuetifyApp ({ globals, components }) {
  const vuetify = initVuetify();
  const router = initRouter();

  const mount = initVue({
    el: '#container',
    root: AppShell,
    globals: {
      router,
      vuetify,
      ...globals
    },
    components
  });

  return mount;
}
