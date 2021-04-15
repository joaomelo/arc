
import { validateCredentials } from './credentials';

export async function signInCase (credentials, dependencies) {
  const { identityProvider } = dependencies;

  validateCredentials(credentials);
  await identityProvider.signIn(credentials);
}
