import 'firebase/auth';
import { plugEmulator } from './emulator';
import { signIn } from './sign-in';

export async function createIdentityProvider (config) {
  const firebaseAuth = await initFireauth(config);
  const identityProvider = adaptFirebaseAuth(firebaseAuth);
  return identityProvider;
}

async function initFireauth (config) {
  const { app, emulatorUrl } = config;

  const fireauth = app.auth();
  if (emulatorUrl) {
    await plugEmulator(fireauth, emulatorUrl);
  }

  return fireauth;
}

function adaptFirebaseAuth (fireauth) {
  return {
    signIn: credentials => signIn(credentials, fireauth)
  };
}
