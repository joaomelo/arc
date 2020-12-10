import { defaultLocale } from '@/app/i18n';
import { AUTH_STATUSES, signUp, signOut } from '@/domain/users';

const initialState = {
  status: AUTH_STATUSES.UNSOLVED,
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
      status: state => state.status,
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
      signUpAction (context, payload) {
        return signUp(payload, { authService: this.$authService });
      },
      signInAction ({ commit }, payload) {
      },
      signOutAction (context) {
        return signOut(null, { authService: this.$authService });
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
