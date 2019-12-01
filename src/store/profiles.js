import { bind, set } from '@/services/firestore';
import { mapStoreFunction } from './helpers';

const state = {
  profiles: [],
  currentProfile: undefined
};

const getters = {
  getProfiles: state => state.profiles,
  getProfile: state => id => state.profiles.find(profile => profile.id === id),
  getCurrentProfile: (state) => state.currentProfile,
  getOtherProfiles: (state, getters) => state.profiles.filter(profile => profile.id !== getters.getCurrentProfile.id)
};

const mutations = {
  commitProfiles (state, profiles) {
    state.profiles = profiles;
  },
  commitCurrentProfile (state, profile) {
    state.currentProfile = profile;
  }
};

const actions = {
  setProfiles ({ commit, getters }) {
    bind(
      'profiles',
      commit,
      profiles => {
        commit(mapStoreFunction('profiles', 'colMutation'), profiles);
        commit('commitCurrentProfile', profiles.find(p => p.id === getters.getUser.uid));
      });
  },
  setProfile (context, profile) {
    set(profile);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
