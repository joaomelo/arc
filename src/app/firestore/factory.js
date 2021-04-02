import 'firebase/firestore';
import { plugEmulator } from './emulator';
import { adaptFirestore } from './repository';

export async function createRepositoryProvider (config) {
  const firestore = await initFirestore(config);
  const repositoryProvider = adaptFirestore(firestore);
  return repositoryProvider;
}

async function initFirestore (config) {
  const { app, emulatorHost } = config;

  const firestore = app.firestore();
  if (emulatorHost) {
    await plugEmulator(firestore, emulatorHost);
  }

  return firestore;
}
