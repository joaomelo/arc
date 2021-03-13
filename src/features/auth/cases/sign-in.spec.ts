import { Credentials, User } from '../entities';
import { signIn } from './sign-in';

describe('sign-in use case', () => {
  test('happy path', () => {
    const credentials = { email: 'test@email.com', password: 'password' };
    const identityProvider = {
      signIn: jest.fn(({ email }: Credentials) => ({ id: 'id', email }))
    };
    const authStore = {
      signIn: jest.fn((user: User) => undefined)
    };

    signIn(credentials, { identityProvider, authStore });

    expect(identityProvider.signIn).toHaveBeenCalled();
    expect(authStore.signIn).toHaveBeenCalled();
  })
});