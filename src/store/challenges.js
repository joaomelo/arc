import { bind, add, set, del } from '@/firebase';

const state = {
  challenges: []
};

const getters = {
  getChallenges: state => state.challenges,
  getChallenge: state => id => state.challenges.find(challenge => challenge.id === id)
};

const mutations = {
  commitChallenges (state, challenges) {
    state.challenges = challenges;
  }
};

const actions = {
  setChallenges ({ commit }) {
    return bind(
      'challenges',
      newChallenges => commit('commitChallenges', newChallenges));
  },
  addChallenge (context, challenge) {
    add('challenges', challenge);
  },
  setChallenge (context, challenge) {
    set('challenges', challenge.id, challenge);
  },
  delChallenge (context, id) {
    del('challenges', id);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
