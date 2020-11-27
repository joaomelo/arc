import Vue from 'vue';
import Vuex from 'vuex';
import { store as usersStore } from '@/business/users';

export function initStore () {
  Vue.use(Vuex);
  const store = new Vuex.Store({
    modules: {
      usersStore
    }
  });
  return store;
}
