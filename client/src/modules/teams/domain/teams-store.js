import HotCollection from '@joaomelo/hot-collection';

const teamsCollection = new HotCollection('teams');

// just mocking
teamsCollection.connect({ adapter: 'in-memory' });

// setTimeout(() => {
//   teamsCollection.add({
//     name: 'familia',
//     creator: 'jm',
//     admins: ['jm'],
//     editors: ['graci'],
//     participants: ['sofia', 'pedro']
//   });
// }, 1000);

// setTimeout(() => {
//   teamsCollection.add({
//     name: 'outro',
//     creator: 'jm',
//     admins: ['jm'],
//     editors: ['batman', 'superman'],
//     participants: ['lanterna', 'marciano']
//   });
// }, 2000);

// setTimeout(() => {
//   teamsCollection.add({
//     name: 'mais um',
//     creator: 'jm',
//     admins: ['jm'],
//     editors: ['batman', 'superman'],
//     participants: ['lanterna', 'marciano']
//   });
// }, 3000);

export { teamsCollection };
