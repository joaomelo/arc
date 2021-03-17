import { User } from '../entities'

export interface AuthStore {
  signIn: (user: User) => void
}
