import { bind, add, set, del } from '@/firebase';

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
    return bind(
      'results',
      newResults => commit('commitResults', newResults));
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
