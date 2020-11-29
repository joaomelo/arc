import { LOCALES } from '@/shared/i18n/locales';

export const AUTH_STATUSES = {
  UNDEFINED: 'AUTH_STATUSES.UNDEFINED',
  SIGNED_OUT: 'AUTH_STATUSES.SIGNED_OUT',
  SIGNED_IN: 'AUTH_STATUSES.SIGNED_IN'
};

const initialState = {
  status: AUTH_STATUSES.UNDEFINED,
  currentUser: null,
  preferences: {
    locale: LOCALES.DEFAULT.value
  }
};

export const usersStoreConfig = {
  store: {
    state: {
      ...initialState
    },
    getters: {
      isUndefined: state => state.status === AUTH_STATUSES.UNDEFINED,
      isSignedIn: state => state.status === AUTH_STATUSES.SIGNED_IN,
      currentUserEmail: state => state.currentUser && state.currentUser.email
    },
    mutations: {
      sign (state, payload) {
        state.status = AUTH_STATUSES.SIGNED_IN;
        state.currentUser = payload;
      },
      signOut (state) {
        state.status = AUTH_STATUSES.SIGNED_OUT;
        state.currentUser = initialState.currentUser;
        state.preferences = { ...initialState.preferences };
      },
      updatePreferences (state, payload) {
        state.preferences.locale = payload.locale;
      }
    },
    actions: {
      commandSignIn ({ commit }, payload) {
      },
      commandSignOut ({ commit }) {
      },
      subscribeToAuthState ({ commit }) {
        this.$authService.onAuthStateChanged(user => {
          if (user) {
            commit('sign', { ...user });
          } else {
            // todo: reset the whole store state no just the module
            commit('signOut');
          }
        });
      }
    }
  },
  afterCreate (store) {
    store.dispatch('subscribeToAuthState');
  }
};
