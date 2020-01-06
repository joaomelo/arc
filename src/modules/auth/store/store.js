import { AUTH_STATUS } from '../common';

const state = {
  authStatus: AUTH_STATUS.UNSOLVED,
  currentUser: null
};

const mutations = {
  setAuthStatus (state, authStatus) {
    state.authStatus = authStatus;
  },
  setCurrentUser (state, currentUser) {
    state.currentUser = currentUser;
  }
};

const authStore = {
  state,
  mutations
};

export { authStore };
