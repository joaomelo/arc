import Vue from 'vue';
import Vuex from 'vuex';

import authStore from './auth.js';
import assetsStore from './assets.js';
import resultsStore from './results.js';
import challengesStore from './challenges.js';
import teamsStore from './teams.js';
import loadStore from './load.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loadStore,
    authStore,
    assetsStore,
    resultsStore,
    challengesStore,
    teamsStore
  }
});
