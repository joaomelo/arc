import { LOCALES } from '@/core/i18n/locales';

export const AUTH_STATUSES = {
  UNDEFINED: 'AUTH_STATUSES.UNDEFINED',
  SIGNED_OUT: 'AUTH_STATUSES.SIGNED_OUT',
  SIGNED_IN: 'AUTH_STATUSES.SIGNED_IN'
};

const initialState = {
  status: AUTH_STATUSES.UNDEFINED,
  currentUser: null,
  preferences: {
    locale: LOCALES.EN.value
  }
};

export const store = {
  namespaced: true,
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
      state = { ...initialState };
    },
    updatePreferences (state, payload) {
      state.preferences.locale = payload.locale;
    }
  },
  actions: {
    commandSignIn ({ commit }, payload) {
      commit('sign', payload);
    },
    commandSignOut ({ commit }) {
      commit('signOut');
    }
  }
};
