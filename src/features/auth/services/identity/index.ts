import type { User } from '../../entities';
import type { Credentials } from '../../entities'

export interface IdentityProvider {
  signIn: (credentials: Credentials) => User
}