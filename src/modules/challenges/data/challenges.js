import { add, set, del } from '@src/services/firestore';
import { setCollection } from './helpers.js';

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
    setCollection(commit, 'challenges');
  },
  addChallenge (context, challenge) {
    add(challenge);
  },
  setChallenge (context, challenge) {
    set(challenge);
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
