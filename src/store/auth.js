import { auth, bind, set } from '@/firebase';

const state = {
  profiles: [],
  loginStatus: undefined,
  currentUser: undefined
};

const getters = {
  getProfiles: state => state.profiles,
  getProfile: state => id => state.profiles.find(profile => profile.id === id),
  getCurrentProfile: (state, getters) => state.currentUser ? getters.getProfile(state.currentUser.uid) : undefined,
  getOtherProfiles: (state, getters) => state.profiles.filter(profile => profile.id !== getters.getCurrentProfile),
  getLoginStatus: state => state.loginStatus
};

const mutations = {
  commitProfiles (state, profiles) {
    state.profiles = profiles;
  },
  commitStatusChange (state, payload) {
    state.loginStatus = payload.loginStatus;
    state.currentUser = payload.currentUser;
  }
};

const actions = {
  observeStatusChange (context) {
    const callback = (currentUser, loginStatus) => {
      const payload = {
        currentUser: currentUser,
        loginStatus: loginStatus
      };
      context.commit('commitStatusChange', payload);

      if (loginStatus === 'loggedin' && !context.getters.getProfile(currentUser.uid)) {
        const newProfile = {
          title: currentUser.email
        };
        Object.defineProperty(newProfile, 'id', { value: currentUser.uid, enumerable: false });
        context.dispatch('setProfile', newProfile);
      }
    };

    context.dispatch('setProfiles');
    auth.addCallback(callback, true);
  },
  logout (context) {
    auth.logout();
  },
  setProfiles ({ commit }) {
    return bind(
      'profiles',
      newProfiles => commit('commitProfiles', newProfiles));
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
