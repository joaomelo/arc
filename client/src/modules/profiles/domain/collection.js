import { Collection } from '__cli/core/collection';
import { AUTH_STATUSES, authState, authStateChanged } from '__cli/core/auth';

const profilesCollection = new Collection('profiles');

function plugCollection () {
  authStateChanged.subscribe(({ status, oldStatus }) => {
    if (status !== oldStatus && status === AUTH_STATUSES.SIGNEDIN) {
      profilesCollection.connect();
    } else {
      profilesCollection.disconnect();
    }
  });
}

function getCurrentProfile () {
  return profilesCollection.getItem(authState.userData.uid);
}

export { profilesCollection, getCurrentProfile, plugCollection };
