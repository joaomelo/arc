export async function signIn (credentials, dependencies) {
  const { identityProvider, authStore } = dependencies;
  const user = await identityProvider.signIn(credentials);
  authStore.signIn(user);
}
