import { signInCase } from './sign-in';

describe('sign-in use case', () => {
  test('happy path', async () => {
    const email = 'test@email.com';
    const credentials = { email, password: 'password' };
    const user = { id: 'id', email };
    const identityProvider = { signIn: jest.fn(credentials => user) };

    await signInCase(credentials, { identityProvider });

    expect(identityProvider.signIn).toHaveBeenCalledWith(credentials);
  });
});
