import { add, set, del } from '@/firebase';
import { setCollection } from './helpers.js';

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
    add('results', result);
  },
  setResult (context, result) {
    set('results', result.id, result);
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
