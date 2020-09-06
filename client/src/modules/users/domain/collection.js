import { Collection, bindCollectionToAuth } from '__cli/core/collection';
import { authState } from '__cli/core/auth';

const profilesCollection = new Collection('profiles');

function plugCollection () {
  bindCollectionToAuth(profilesCollection);
}

function getCurrentProfile () {
  return profilesCollection.getItem(authState.userData.uid);
}

export { profilesCollection, getCurrentProfile, plugCollection };
