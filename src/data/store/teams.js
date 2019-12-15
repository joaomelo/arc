import { add, set, del } from '@/services/firestore';
import { setCollection } from './helpers.js';

const state = {
  teams: []
};

const getters = {
  getTeams: state => state.teams,
  getTeam: state => id => state.teams.find(team => team.id === id),
  getOtherTeams: state => id => state.teams.filter(team => team.id !== id),
  getMyWriteTeams: (state, getters) => state.teams.filter(team => getters.isMyWriteTeam(team)),
  isMyWriteTeam: (state, getters) => team => {
    const id = getters.getCurrentProfile.id;
    const writeRoles = ['owner', 'editor'];
    const findedWriteRole = team.roles.find(role => role.profile.id === id && writeRoles.includes(role.role));

    return !!findedWriteRole;
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
