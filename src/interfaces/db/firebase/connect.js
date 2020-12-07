import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export function connectToFirebaseServices ({ config, emulators }) {
  firebase.initializeApp(config);

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  if (emulators) {
    auth.useEmulator(`http://localhost:${emulators.authPort}/`);
    firestore.useEmulator('localhost', emulators.firestorePort);
  }

  return {
    auth,
    firestore
  };
}
