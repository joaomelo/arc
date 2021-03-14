import { IdentityProvider } from '../services/identity'
import { AuthStore } from '../services/store'
import { Credentials } from '../entities'

interface dependencies {
  identityProvider: IdentityProvider
  authStore: AuthStore
}

export async function signIn (credentials: Credentials, dependencies: dependencies): Promise<void> {
  const { identityProvider, authStore } = dependencies
  const user = await identityProvider.signIn(credentials)
  authStore.signIn(user)
}
