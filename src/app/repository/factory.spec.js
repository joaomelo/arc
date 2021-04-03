import { initFirebaseSuiteFromEnv } from '../firebase';
import { createRepositoryProvider } from './factory';

describe('firestore repository provider factory', () => {
  const config = {
    suite: initFirebaseSuiteFromEnv(),
    firestoreEmulatorHost: process.env.FIRESTORE_EMULATOR_HOST
  };

  let repositoryProvider;

  beforeEach(async () => {
    repositoryProvider = await createRepositoryProvider(config);
  });

  test('correctly instantiate firestore repository', async () => {
    expect(repositoryProvider.firestore)
      .toBeInstanceOf(config.suite.firebase.firestore.Firestore);
  });

  test('connect to emulator and clear data', async () => {
    // console.log(repositoryProvider);

    const docRef = repositoryProvider
      .firestore
      .collection('dummy')
      .doc('dummy-key');
    await docRef.set({ dummyData: 'dummyData' });

    repositoryProvider = await createRepositoryProvider(config);

    const doc = await docRef.get();
    expect(doc.exists).toBeFalsy();
  });
});
