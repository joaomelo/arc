const state = {
  user: null
};

const getters = {
  getUser (state) {
    return state.user;
  },
  getUserId (state) {
    return state.user.uid;
  },
  isLoggedIn (state) {
    return state.user != null;
  }
};

const mutations = {
  setUser (state, user) {
    state.user = user;
  }
};

export default {
  state,
  getters,
  mutations
};
