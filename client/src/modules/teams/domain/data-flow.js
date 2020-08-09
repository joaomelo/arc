import { AUTH_STATUSES, authStateChanged } from '__cli/core/auth';
import { Stream, River } from '__cli/core/data';

const teams = new River();

function bindTeamsFlowsToAuth () {
  return authStateChanged.subscribe(({ status, oldStatus, userData }) => {
    if (status === oldStatus) return;

    if (status === AUTH_STATUSES.SIGNEDIN) {
      plugTeams(userData.uid);
    } else {
      teams.disconnect();
    }
  });
}

function plugTeams (userId) {
  const ownedTeams = new Stream(teamOption({ field: 'owner', operator: '==', value: userId }));
  const editedTeams = new Stream(teamOption({ field: 'editors', operator: 'array-contains', value: userId }));
  const memberedTeams = new Stream(teamOption({ field: 'members', operator: 'array-contains', value: userId }));

  teams.connect(
    [ownedTeams, editedTeams, memberedTeams],
    { type: 'or' }
  );
}

function teamOption (clause) {
  return {
    collection: 'teams',
    query: {
      where: [
        { field: 'isActive', operator: '==', value: true },
        clause
      ],
      orderBy: { field: 'name', sort: 'asc' }
    }
  };
};

export { teams, bindTeamsFlowsToAuth };
