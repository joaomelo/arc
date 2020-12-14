import { AUTH_STATUSES, signUp, signOut } from '@/domain/auth';

const initialState = {
  status: AUTH_STATUSES.UNSOLVED,
  currentUser: null
};

export const authStoreConfig = {
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
