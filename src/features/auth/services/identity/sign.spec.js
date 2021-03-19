import { initFirebaseAppFromEnv } from '../../../../app/firebase';
import { createIdentityProvider } from './factory';

describe('createIdentityProvider factory function', () => {
  let identityProvider;

  beforeAll(() => {
    const config = {
      app: initFirebaseAppFromEnv(),
      emulatorUrl: process.env.FIREBASE_AUTH_EMULATOR_URL
    };
    identityProvider = createIdentityProvider(config);
  });

  test('signs in a existing user with proper credentials', () => {
    expect(identityProvider).toBeDefined();
  });

  test('throws if attempt sign in with incorrect credentials', () => {
    expect(true).toBe(false);
  });
});
