import Vue from 'vue';
import Vuetify from 'vuetify/lib';

export function initVuetify () {
  Vue.use(Vuetify);
  return new Vuetify({});
}
