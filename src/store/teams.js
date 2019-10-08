import { bind, add, set, del } from '@/firebase';

const state = {
  teams: []
};

const getters = {
  getTeams: state => state.teams,
  getTeam: state => id => state.teams.find(team => team.id === id)
};

const mutations = {
  commitTeams (state, teams) {
    state.teams = teams;
  }
};

const actions = {
  setTeams ({ commit }) {
    return bind(
      'teams', {
        orderBy: {
          field: 'title',
          direction: 'asc'
        }
      },
      newTeams => commit('commitTeams', newTeams));
  },
  addTeam (context, team) {
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