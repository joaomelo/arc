import { connectToFirebaseServices } from './connect';
import { injectFirebaseIntoStore } from './inject';

export function initFirebase ({ config, emulators, store }) {
  const { auth, firestore } = connectToFirebaseServices({ config, emulators });
  injectFirebaseIntoStore(store, {
    authService: auth,
    dbService: firestore
  });
};
