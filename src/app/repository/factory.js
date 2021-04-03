import 'firebase/firestore';
import { plugEmulator, clearFirestoreEmulator } from './emulator';
import { adaptFirestore } from './adapter';

export async function createRepositoryProvider (config) {
  const firestore = await initFirestore(config);
  const repositoryProvider = adaptFirestore(firestore);
  return repositoryProvider;
}

async function initFirestore (config) {
  const { suite, firestoreEmulatorHost } = config;
  const { app, projectId } = suite;

  const firestore = app.firestore();

  if (firestoreEmulatorHost) {
    plugEmulator(firestore, firestoreEmulatorHost);
    await clearFirestoreEmulator(projectId, firestoreEmulatorHost);
  }

  return firestore;
}
