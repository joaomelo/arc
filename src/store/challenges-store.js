import { bindQuery } from '@/firebase';

const state = {
  challenges: []
};

const getters = {
  getChallenges (state) {
    return state.challenges;
  },

  getChallenge (state, id) {
    return state.challenges.find(challenge => challenge.id === id);
  }
};

const mutations = {
  commitChallenges (state, challenges) {
    state.challenges = challenges;
  }
};

const actions = {
  setChallenges ({ commit }) {
    return bindQuery(
      'challenges', {
        orderBy: {
          field: 'title',
          direction: 'asc'
        }
      },
      newChallenges => commit('commitChallenges', newChallenges));
  }
};

const challengesStore = {
  state,
  getters,
  mutations,
  actions
};

export { challengesStore };
