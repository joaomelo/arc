import Vue from 'vue';
import Vuex from 'vuex';

import assetsStore from './assets.js';
import resultsStore from './results.js';
import challengesStore from './challenges.js';
import teamsStore from './teams.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    assetsStore,
    resultsStore,
    challengesStore,
    teamsStore
  }
});
