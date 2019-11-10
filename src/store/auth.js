import { auth, set } from '@/firebase';
import { setCollection } from './helpers.js';
import { i18n } from '@/i18n';

const state = {
  profiles: [],
  loginStatus: 'unsolved',
  user: undefined
};

const getters = {
  getProfiles: state => state.profiles,
  getProfile: state => id => state.profiles.find(profile => profile.id === id),
  getCurrentProfile: (state, getters) => state.user ? getters.getProfile(state.user.uid) : undefined,
  getOtherProfiles: (state, getters) => state.profiles.filter(profile => profile.id !== getters.getCurrentProfile.id),
  getLoginStatus: state => state.loginStatus
};

const mutations = {
  commitProfiles (state, profiles) {
    state.profiles = profiles;
  },
  commitUser (state, payload) {
    state.loginStatus = payload.loginStatus;
    state.user = payload.user;
  }
};

const actions = {
  setUser ({ commit, getters, dispatch }) {
    commit('startedLoad', 'user');
    const setUserAndProfile = (user, loginStatus) => {
      commit('commitUser', { user, loginStatus });
      if (loginStatus === 'loggedin' && !getters.getProfile(user.uid)) {
        const newProfile = {
          id: user.uid,
          title: user.email,
          lang: i18n.fallbackLocale
        };
        dispatch('setProfile', newProfile);
        commit('stoppedLoad', 'user');
      }
    };
    auth.addCallback(setUserAndProfile, true);
  },
  logout (context) {
    auth.logout();
  },
  setProfiles ({ commit }) {
    setCollection(commit, 'profiles');
  },
  setProfile (context, profile) {
    set('profiles', profile.id, profile);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
