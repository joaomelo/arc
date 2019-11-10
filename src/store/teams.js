import { add, set, del } from '@/firebase';
import { setCollection } from './helpers.js';

const state = {
  teams: []
};

const getters = {
  getTeams: state => state.teams,
  getTeam: state => id => state.teams.find(team => team.id === id),
  getOtherTeams: state => id => state.teams.filter(team => team.id !== id),
  getMyTeams: (state, getters) => state.teams.filter(team => team.owner &&
      getters.getCurrentProfile &&
      team.owner.id === getters.getCurrentProfile.id
  )
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
    add('teams', team);
  },
  setTeam (context, team) {
    set('teams', team.id, team);
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
