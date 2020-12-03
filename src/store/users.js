import { defaultLocale } from '@/business/i18n/locales';
import { signUp } from '@/business/users';

export const AUTH_STATUSES = {
  UNDEFINED: 'AUTH_STATUSES.UNDEFINED',
  SIGNED_OUT: 'AUTH_STATUSES.SIGNED_OUT',
  SIGNED_IN: 'AUTH_STATUSES.SIGNED_IN'
};

const initialState = {
  status: AUTH_STATUSES.UNDEFINED,
  currentUser: null,
  preferences: {
    locale: defaultLocale
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
      signMutation (state, payload) {
        state.status = AUTH_STATUSES.SIGNED_IN;
        state.currentUser = payload;
      },
      signOutMutation (state) {
        state.status = AUTH_STATUSES.SIGNED_OUT;
        state.currentUser = initialState.currentUser;
        state.preferences = { ...initialState.preferences };
      },
      updatePreferencesMutation (state, payload) {
        state.preferences.locale = payload.locale;
      }
    },
    actions: {
      signUpAction (context, { email, password }) {
        return signUp({ email, password }, { authService: this.$authService });
      },
      signInAction ({ commit }, payload) {
      },
      signOutAction ({ commit }) {
      },
      subscribeToAuthStateAction ({ commit }) {
        this.$authService.onAuthStateChanged(user => {
          if (user) {
            const userData = {
              email: user.email
            };
            commit('signMutation', userData);
          } else {
            // todo: reset the whole store state no just the module
            commit('signOutMutation');
          }
        });
      }
    }
  },
  afterCreate (store) {
    store.dispatch('subscribeToAuthStateAction');
  }
};
