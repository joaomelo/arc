import 'firebase/auth';
import { signIn } from './sign-in';

export function createIdentityProvider (config) {
  const firebaseAuth = initFireauth(config);
  const identityProvider = adaptFirebaseAuth(firebaseAuth);
  return identityProvider;
}

function initFireauth (config) {
  const { app, emulatorUrl } = config;

  const fireauth = app.auth();
  if (!emulatorUrl) {
    fireauth.useEmulator(emulatorUrl);
  }

  return fireauth;
}

function adaptFirebaseAuth (fireauth) {
  return {
    signIn: (credentials) => signIn(credentials, fireauth)
  };
}
