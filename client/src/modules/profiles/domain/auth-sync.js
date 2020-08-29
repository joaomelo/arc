import { combineLatest } from 'rxjs';
import { i18n } from '__cli/core/i18n';
import { AUTH_STATUSES, authStateSubject } from '__cli/core/auth';
import { profilesCollection } from './collection';

function plugProfileAuthSync () {
  const combinedAuthAndProfiles = combineLatest(profilesCollection.collectionUpdated, authStateSubject);
  combinedAuthAndProfiles.subscribe(checkAndSyncProfile);
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
      nickname: email.slice(0, email.indexOf('@')),
      locale: i18n.fallbackLocale
    });
  } else if (userData.email !== userProfile.publicEmail) {
    profilesCollection.update({
      id: userData.uid,
      publicEmail: userData.email
    });
  }
}

export { plugProfileAuthSync };
