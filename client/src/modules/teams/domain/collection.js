import { Collection } from '__cli/core/collection';
import { AUTH_STATUSES, authStateChanged } from '__cli/core/auth';

const teamsCollection = new Collection('teams');

function bindTeamsCollectionToAuth () {
  return authStateChanged.subscribe(({ status, oldStatus, userData }) => {
    if (status === oldStatus) return;

    if (status === AUTH_STATUSES.SIGNEDIN) {
      plugCollection(userData.uid);
    } else {
      teamsCollection.disconnect();
    }
  });
}

function plugCollection (userId) {
  const options = {
    saveMode: 'safe',
    query: {
      where: [
        {
          field: 'isActive',
          operator: '==',
          value: true
        }
      ],
      orderBy: {
        field: 'name',
        sort: 'asc'
      }
    }
  };

  teamsCollection.connect(options);
}

export { teamsCollection, bindTeamsCollectionToAuth };
