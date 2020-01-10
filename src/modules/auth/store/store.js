import { AUTH_STATUS } from '../common';
import { store } from '@/core/store';

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

function igniteAuthStore () {
  store.registerModule('auth', authStore);
}

export { igniteAuthStore };
