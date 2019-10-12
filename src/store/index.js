import Vue from 'vue';
import Vuex from 'vuex';

import authStore from './auth.js';
import assetsStore from './assets.js';
import resultsStore from './results.js';
import challengesStore from './challenges.js';
import teamsStore from './teams.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authStore,
    assetsStore,
    resultsStore,
    challengesStore,
    teamsStore
  }
});
