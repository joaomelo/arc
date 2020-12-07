import firebase from 'firebase/app';
import 'firebase/firestore';

export function initFirestore ({ config, emulators }) {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const firestore = firebase.firestore();

  if (emulators) {
    firestore.useEmulator('localhost', emulators.firestorePort);
  }

  return firestore;
};
