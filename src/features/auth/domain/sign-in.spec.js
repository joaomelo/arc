import { signIn } from './sign-in';

describe('sign-in use case', () => {
  test('happy path', async () => {
    const email = 'test@email.com';
    const credentials = { email, password: 'password' };
    const user = { id: 'id', email };
    const identityProvider = { signIn: jest.fn(credentials => user) };
    const authStore = { send: jest.fn((event, payload) => undefined) };

    await signIn(credentials, { identityProvider, authStore });

    expect(identityProvider.signIn).toHaveBeenCalledWith(credentials);
    expect(authStore.send).toHaveBeenCalledWith('SIGN_IN', { user });
  });
});
