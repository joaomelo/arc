import { auth } from '@/services/fireauth';
import { get, set } from '@/services/firestore';
import { i18n } from '@/i18n';

const state = {
  loginStatus: 'unsolved',
  user: undefined
};

const getters = {
  getUser: (state) => state.user,
  getLoginStatus: state => state.loginStatus
};

const mutations = {
  commitLogin (state, { loginStatus, user }) {
    state.loginStatus = loginStatus;
    state.user = user;
  }
};

const actions = {
  async setAuth ({ commit, getters, dispatch }) {
    commit('startedLoad', 'login');
    commit('startedLoad', 'profile');

    const setLogin = (user, loginStatus) => {
      commit('commitLogin', { loginStatus, user });
      commit('stoppedLoad', 'login');
    };

    const boostrapProfile = async (user, loginStatus) => {
      if (user) {
        const dbProfile = await get('profiles', user.uid);
        if (dbProfile === null) {
          const newProfile = {
            id: user.uid,
            title: user.email,
            lang: i18n.fallbackLocale,
            collection: 'profiles'
          };
          await set(newProfile);
        }
      }
      commit('stoppedLoad', 'profile');
    };

    auth.addCallback(boostrapProfile);
    auth.addCallback(setLogin);
  },
  logout (context) {
    auth.logout();
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
