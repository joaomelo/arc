import { bind, set } from '@/firebase';
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
    commit('startedLoad', 'profiles');
    bind(
      'profiles',
      profiles => {
        commit(mapStoreFunction('profiles', 'colMutation'), profiles);
        commit('commitCurrentProfile', profiles.find(p => p.id === getters.getUser.uid));
        commit('stoppedLoad', 'profiles');
      });
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
