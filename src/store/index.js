import Vue from 'vue';
import Vuex from 'vuex';

import loadStore from './load.js';
import authStore from './auth.js';
import profilesStore from './profiles.js';
import assetsStore from './assets.js';
import resultsStore from './results.js';
import challengesStore from './challenges.js';
import teamsStore from './teams.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loadStore,
    authStore,
    profilesStore,
    assetsStore,
    resultsStore,
    challengesStore,
    teamsStore
  }
});
