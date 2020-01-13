
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
