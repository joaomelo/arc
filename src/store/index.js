import Vue from 'vue';
import Vuex from 'vuex';

import { assetsStore } from './assets-store.js';
import { resultsStore } from './results-store.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    assetsStore,
    resultsStore
  }
});

export { store };
