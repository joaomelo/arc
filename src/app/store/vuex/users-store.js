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
      signMutation (state, { email }) {
        state.status = AUTH_STATUSES.SIGNED_IN;
        state.currentUser = { email };
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
      async signUpAction ({ commit }, payload) {
        const user = await signUp(payload, { authService: this.$authService });
        commit('signMutation', user);
      },
      signInAction ({ commit }, payload) {
      },
      async signOutAction ({ commit }) {
        await signOut(null, { authService: this.$authService });
        commit('signOutMutation');
      },
      async loadAuthServiceStateAction ({ commit }) {
        const user = await this.$authService.solveUser();
        if (user) {
          commit('signMutation', user);
        } else {
          commit('signOutMutation');
        }
      }
    }
  },
  afterCreate (store) {
    store.dispatch('loadAuthServiceStateAction');
  }
};
