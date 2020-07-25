import { Collection, bindCollectionToAuth } from '__cli/core/collection';

const teamsCollection = new Collection('teams');

function plugCollection () {
  bindCollectionToAuth(teamsCollection);
}

export { teamsCollection, plugCollection };
