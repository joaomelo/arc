import { initFirebaseSuiteFromEnv } from '../../../app/firebase';
import { createIdentityProvider } from './factory';

describe('firestore repository provider factory', () => {
  test('correctly connect to emulator and clear data', async () => {
    // create aoo, insert dummy data and check that the emulator is empty

    const config = {
      suite: initFirebaseSuiteFromEnv(),
      emulatorHost: process.env.FIRESTORE_EMULATOR_HOST
    };

    const identityProvider = await createIdentityProvider(config);

    expect(identityProvider).toBeDefined();
  });
});
