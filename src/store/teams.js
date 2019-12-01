import { add, set, del } from '@/services/firestore';
import { setCollection } from './helpers.js';

const state = {
  teams: []
};

const getters = {
  getTeams: state => state.teams,
  getTeam: state => id => state.teams.find(team => team.id === id),
  getOtherTeams: state => id => state.teams.filter(team => team.id !== id),
  getMyTeams: (state, getters) => state.teams.filter(team => getters.isMyTeam(team)),
  isMyTeam: (state, getters) => team => {
    const uid = getters.getCurrentProfile.id;
    const mgs = team.managers || [];
    return (team.owner.id === uid) || (mgs.findIndex(m => m.id === uid) !== -1);
  }
};

const mutations = {
  commitTeams (state, teams) {
    state.teams = teams;
  }
};

const actions = {
  setTeams ({ commit }) {
    setCollection(commit, 'teams');
  },
  addTeam (context, team) {
    team.owner = context.getters.getCurrentProfile;
    add(team);
  },
  setTeam (context, team) {
    set(team);
  },
  delTeam (context, id) {
    del('teams', id);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
