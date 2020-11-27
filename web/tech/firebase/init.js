import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export function initFirebaseServices ({ config, useEmulators }) {
  firebase.initializeApp(config);

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  if (useEmulators) {
    auth.useEmulator('http://localhost:9099/');
    firestore.useEmulator('localhost', 8080);
  }

  return {
    auth,
    firestore
  };
}
