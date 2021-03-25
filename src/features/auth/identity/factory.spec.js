import { initFirebaseAppFromEnv } from '../../../app/firebase';
import { createIdentityProvider } from './factory';

describe('identity provider factory module', () => {
  test('correctly connect to emulator', async () => {
    const config = {
      app: initFirebaseAppFromEnv(),
      emulatorUrl: process.env.FIRESTORE_EMULATOR_HOST
    };

    const identityProvider = await createIdentityProvider(config);

    expect(identityProvider).toBeDefined();
  });
});
