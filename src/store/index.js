import Vue from 'vue';
import Vuex from 'vuex';

import { assetStore } from './asset-store.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    assetStore
  }
});

export { store };
