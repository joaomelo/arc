import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export function registerComponents () {
  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);
}
