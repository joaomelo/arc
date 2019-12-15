const state = {
  loadSet: new Set(),
  loadSize: 0
};

const getters = {
  getLoadSet: state => state.loadSet,
  getLoadSize: state => state.loadSize
};

const mutations = {
  startedLoad (state, load) {
    state.loadSet.add(load);
    state.loadSize = state.loadSet.size;
  },
  stoppedLoad (state, load) {
    state.loadSet.delete(load);
    state.loadSize = state.loadSet.size;
  }
};

export default {
  state,
  getters,
  mutations
};
