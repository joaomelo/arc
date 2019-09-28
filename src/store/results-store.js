import { bindQuery } from '@/firebase';

const state = {
  results: []
};

const getters = {
  getResults (state) {
    return state.results;
  },

  getResult (state, id) {
    return state.results.find(result => result.id === id);
  }
};

const mutations = {
  commitResults (state, results) {
    state.results = results;
  }
};

const actions = {
  setResults ({ commit }) {
    return bindQuery(
      'results', {
        orderBy: {
          field: 'title',
          direction: 'asc'
        }
      },
      newResults => commit('commitResults', newResults));
  }
};

const resultsStore = {
  state,
  getters,
  mutations,
  actions
};

export { resultsStore };
