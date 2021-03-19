import { signIn } from './sign-in';

describe('sign-in use case', () => {
  test('happy path', async () => {
    const credentials = { email: 'test@email.com', password: 'password' };
    const authStore = { signIn: jest.fn((user) => undefined) };
    const identityProvider = { signIn: jest.fn(({ email }) => ({ id: 'id', email })) };

    await signIn(credentials, { identityProvider, authStore });

    expect(identityProvider.signIn).toHaveBeenCalled();
    expect(authStore.signIn).toHaveBeenCalled();
  });
});
