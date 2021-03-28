import { signInCase } from './sign-in';

describe('sign-in use case', () => {
  test('happy path', async () => {
    const email = 'test@email.com';
    const credentials = { email, password: 'password' };
    const user = { id: 'id', email };
    const identityProvider = { signIn: jest.fn(credentials => user) };
    const authStore = { signIn: jest.fn(user => undefined) };

    await signInCase(credentials, { identityProvider, authStore });

    expect(identityProvider.signIn).toHaveBeenCalledWith(credentials);
    expect(authStore.actions.signIn).toHaveBeenCalledWith('SIGN_IN', { user });
  });
});
