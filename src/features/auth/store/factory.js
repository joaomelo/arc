import { createStore } from '../../../app/store-toolkit';

export function createAuthStore () {
  const state = {
    authStatus: 'signedOut',
    user: null
  };

  const getters = {
    get user () {
      return { ...state.user };
    },
    get isSignedIn () {
      return !!state.user;
    }
  };

  const actions = {
    signIn (user) {
      state.user = { ...user };
      state.authStatus = 'signedIn';
    },
    signOut () {
      state.user = null;
      state.authStatus = 'signedOut';
    }
  };

  return createStore({ state, getters, actions });
}
