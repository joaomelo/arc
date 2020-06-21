// import { bind, add, set, del } from 'client/src/services/firestore';

// const teamsState = reactive({
//   teams: []
// });

// const getters = {
//   getTeams: state => state.teams,
//   getTeam: state => id => state.teams.find(team => team.id === id),
//   getOtherTeams: state => id => state.teams.filter(team => team.id !== id),
//   getMyWriteTeams: (state, getters) => state.teams.filter(team => getters.isMyWriteTeam(team)),
//   isMyWriteTeam: (state, getters) => team => {
//     const id = getters.getUser.uid;
//     const writeRoles = ['owner', 'editor'];
//     const findedWriteRole = team.roles.find(role => role.profile.id === id && writeRoles.includes(role.role));

//     return !!findedWriteRole;
//   }
// };

// const mutations = {
//   commitTeams (state, teams) {
//     state.teams = teams;
//   }
// };

// const actions = {
//   setTeams ({ commit, getters, dispatch }) {
//     bind(
//       'teams',
//       teams => {
//         commit('commitTeams', teams);
//         const writeTeams = getters.getMyWriteTeams();
//         if (!writeTeams || writeTeams.length === 0) {
//           dispatch('createDefaultTeam');
//         }
//       });
//   },

//   addTeam (context, team) {
//     team.owner = context.getters.getCurrentProfile;
//     add(team);
//   },
//   setTeam (context, team) {
//     set(team);
//   },
//   delTeam (context, id) {
//     del('teams', id);
//   },
//   hasOwnedTeam (context, profile) {
//     return true;
//   }
// };

// export {
//   teamsState,
//   getters,
//   mutations,
//   actions
// };

const teamsCollection = {
  items: [
    {
      id: '8687237385498237',
      name: 'familia',
      creator: 'jm',
      admins: ['jm'],
      editors: ['graci'],
      participants: ['sofia', 'pedro']
    },
    {
      id: '987384567834563',
      name: 'supem',
      creator: 'jm',
      admins: ['jm'],
      editors: ['joanna', 'sergio'],
      participants: ['victor', 'sobral']
    }
  ]
};

export { teamsCollection };
