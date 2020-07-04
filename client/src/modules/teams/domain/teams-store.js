import HotCollection from '@joaomelo/hot-collection';
import { firedb } from '__cli/core/firebase';

const teamsCollection = new HotCollection('teams', {
  adapter: { firestore: firedb }
});

teamsCollection.add({
  name: 'familia',
  creator: 'jm',
  admins: ['jm'],
  editors: ['graci'],
  participants: ['sofia', 'pedro']
});

export { teamsCollection };
