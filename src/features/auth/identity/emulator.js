import { credentials } from '../../../../tests/fixtures';
import { del } from '../../../app/request';

export async function plugEmulator (fireauth, emulatorUrl) {
  fireauth.useEmulator(emulatorUrl, { disableWarnings: true });
  await clearUsers(fireauth, emulatorUrl);
  await createDefaultUser(fireauth);
}

function clearUsers (fireauth, emulatorUrl) {
  const projectId = fireauth.app.options.projectId;
  const clearUsersUrl = `${emulatorUrl}/emulator/v1/projects/${projectId}/accounts`;
  return del(clearUsersUrl);
}

async function createDefaultUser (fireauth) {
  const { email, password } = credentials[0];
  await fireauth.createUserWithEmailAndPassword(email, password);
  await fireauth.signOut();
}
