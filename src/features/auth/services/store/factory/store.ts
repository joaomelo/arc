import type { User } from './user';

export enum AuthStatuses {
  Unsolved = 'UNSOLVED',
  SignedOut = 'SIGNED_OUT',
  SignedIn = 'SIGNED_IN'
};

export class AuthStore {
  status: AuthStatuses
  currentUser: User | null

  constructor() {
    this.status = AuthStatuses.Unsolved,
    this.currentUser = null
  }
 
  signIn(user: User) {
    this.status = AuthStatuses.SignedIn,
    this.currentUser = user
  }

  signOut() {
    this.status = AuthStatuses.SignedOut,
    this.currentUser = null
  }
}

export function createAuthStore(): AuthStore {
  return new AuthStore();
}