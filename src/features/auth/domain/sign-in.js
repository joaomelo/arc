export async function signInCase (credentials, dependencies) {
  const { identityProvider, authStore } = dependencies;
  const user = await identityProvider.signIn(credentials);
  authStore.actions.signIn(user);
}
