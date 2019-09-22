import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import authStore from './store-auth.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    authStore
  },
  plugins: [createPersistedState()]
});

export default store;
