import { connectToFirebaseServices } from './connect';

export function initFirebase ({ config, emulators }) {
  const { auth, firestore } = connectToFirebaseServices({ config, emulators });
  return {
    authService: auth,
    dbService: firestore
  };
};
