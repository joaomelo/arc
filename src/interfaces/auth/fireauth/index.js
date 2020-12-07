import firebase from 'firebase/app';
import 'firebase/auth';

export function initFireauth ({ config, emulators }) {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const fireauth = firebase.auth();

  if (emulators) {
    fireauth.useEmulator(`http://localhost:${emulators.authPort}/`);
  }

  return fireauth;
}
