import { Collection, bindCollectionToAuth } from '__cli/core/collection';

const teamsCollection = new Collection('teams');

function plugCollection () {
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

  bindCollectionToAuth(teamsCollection, options);
}

export { teamsCollection, plugCollection };
