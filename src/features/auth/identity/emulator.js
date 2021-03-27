import { credentials } from '../../../../tests/fixtures';
import { del } from '../../../app/request';

export async function plugEmulator (fireauth, emulatorHost) {
  fireauth.useEmulator(emulatorHost, { disableWarnings: true });
  await clearUsers(fireauth, emulatorHost);
  await createDefaultUser(fireauth);
}

function clearUsers (fireauth, emulatorHost) {
  const projectId = fireauth.app.options.projectId;
  const clearUsersUrl = `${emulatorHost}/emulator/v1/projects/${projectId}/accounts`;
  return del(clearUsersUrl);
}

async function createDefaultUser (fireauth) {
  const { email, password } = credentials[0];
  await fireauth.createUserWithEmailAndPassword(email, password);
  await fireauth.signOut();
}
