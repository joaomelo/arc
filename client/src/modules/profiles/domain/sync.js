import { combineLatest } from 'rxjs';
import { Collection } from '__cli/core/collection';
import { AUTH_STATUSES, authStateChanged } from '__cli/core/auth';

const profilesCollection = new Collection('profiles');

function activateProfileSync () {
  authStateChanged.subscribe(syncConnection);

  const combinedAuthAndProfiles = combineLatest(profilesCollection.collectionUpdated, authStateChanged);
  combinedAuthAndProfiles.subscribe(checkAndSyncProfile);
}

function syncConnection ({ status, oldStatus }) {
  if (status === oldStatus) return;
  if (status === AUTH_STATUSES.SIGNEDIN) {
    profilesCollection.connect();
  } else {
    profilesCollection.disconnect();
  }
}

function checkAndSyncProfile (payload) {
  const profiles = payload[0];
  const authStateChangedPayload = payload[1];

  if (!profiles) return;
  if (authStateChangedPayload.status !== AUTH_STATUSES.SIGNEDIN) return;

  const userData = authStateChangedPayload.userData;
  const userProfile = profilesCollection.getItem(userData.uid);

  if (!userProfile) {
    const email = userData.email;
    profilesCollection.set({
      id: userData.uid,
      publicEmail: email,
      nickname: email.slice(0, email.indexOf('@'))
    });
  } else if (userData.email !== userProfile.publicEmail) {
    profilesCollection.update({
      id: userData.uid,
      publicEmail: userData.email
    });
  }
}

export { activateProfileSync };
