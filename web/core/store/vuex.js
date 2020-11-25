import Vue from 'vue';
import Vuex from 'vuex';
import { store as usersStore } from '@/features/users';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    usersStore
  }
});
