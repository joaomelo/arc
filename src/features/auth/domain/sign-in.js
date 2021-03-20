export async function signIn (credentials, dependencies) {
  const { identityProvider, authStore } = dependencies;
  const user = await identityProvider.signIn(credentials);
  authStore.send('SIGN_IN', { user });
}
