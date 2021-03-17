import type { User, Credentials } from '../entities'

export interface IdentityProvider {
  signIn: (credentials: Credentials) => Promise<User>
}
