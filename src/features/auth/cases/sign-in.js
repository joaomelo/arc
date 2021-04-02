export async function signInCase (credentials, dependencies) {
  const { identityProvider } = dependencies;
  await identityProvider.signIn(credentials);
}
