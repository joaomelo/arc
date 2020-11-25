import { add, set, del } from 'client/src/services/firestore';
import { setCollection } from './helpers.js.js';

const state = {
  results: []
};

const getters = {
  getResults: state => state.results,
  getResult: state => id => state.results.find(result => result.id === id)
};

const mutations = {
  commitResults (state, results) {
    state.results = results;
  }
};

const actions = {
  setResults ({ commit }) {
    setCollection(commit, 'results');
  },
  addResult (context, result) {
    add(result);
  },
  setResult (context, result) {
    set(result);
  },
  delResult (context, id) {
    del('results', id);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
