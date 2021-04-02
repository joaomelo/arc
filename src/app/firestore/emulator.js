import { del } from '../request';

export function plugEmulator (firestore, emulatorHost) {
  firestore.useEmulator('localhost', emulatorHost);
  return clearFirestore(firestore, emulatorHost);
}

function clearFirestore (firestore, emulatorHost) {
  const projectId = firestore.app.options.projectId;
  const clearUrl = `http://localhost:${emulatorHost}/emulator/v1/projects/${projectId}/databases/(default)/documents`;
  return del(clearUrl);
}
