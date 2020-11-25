import { Collection, bindCollectionToAuth } from '@/shared/collection';

const challengesCollection = new Collection('challenges');

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
        field: 'title',
        sort: 'asc'
      }
    }
  };

  bindCollectionToAuth(challengesCollection, options);
}

export { challengesCollection, plugCollection };
