import { createBaseStore } from '../../../app/store';

export function createAuthStore (identityProvider) {
  const state = {
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

  const authStore = createBaseStore({ state, getters });

  identityProvider.subscribe(user => {
    state.user = user;
    authStore.invalidate();
  });

  return authStore;
}
