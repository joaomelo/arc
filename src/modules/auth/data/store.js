import { startLoad, stopLoad } from '@/load';
import { setDoc, getDoc, authService } from '@/services';
import { convertProfileToDoc, convertDocToProfile } from '@/data/adapters';
import { bindCommon } from '../../../data/store/common.js';

const state = {
  authStatus: authService.status,
  currentProfile: null,
  profiles: []
};

const getters = {
  getAuthStatus: state => state.authStatus,
  getCurrentProfile: state => state.currentProfile,
  getProfiles: state => state.profiles,
  getProfile: state => id => state.profiles.find(profile => profile.id === id),
  getOtherProfiles: (state, getters) => state.profiles.filter(profile => profile.id !== getters.getCurrentProfile.id)
};

const mutations = {
  commitProfiles (state, profiles) {
    state.profiles = profiles;
  },
  commitAuthStatus (state, { status, profile }) {
    state.authStatus = status;
    state.currentProfile = profile;
  }
};

const actions = {
  bindProfiles ({ commit }) {
    const config = { collection: 'profiles' };
    const adapter = convertDocToProfile;
    const mutation = profiles => commit('commitProfiles', profiles);

    bindCommon(config, adapter, mutation);
  },

  bindAuth ({ commit, dispatch }) {
    const onAuthChange = async (user, status) => {
      startLoad('authChanged');
      let profile = await dispatch('pullProfileFromDataService', user.uid);
      if (!profile) {
        await dispatch('createUserProfile', user);
        profile = await dispatch('pullProfileFromDataService', user.uid);
      };

      commit('commitAuthStatus', { status, profile });
      stopLoad('authChanged');
    };

    authService.addCallback(onAuthChange);
  },

  pullProfileFromDataService (context, id) {
    return getDoc('profiles', id);
  },

  createUserProfile ({ dispatch }, user) {
    const profile = {
      id: user.uid,
      title: user.email
    };
    const profileDocument = convertProfileToDoc(profile);
    return setDoc('profiles', profile.id, profileDocument);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
