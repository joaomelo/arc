import type { IdentityProvider } from './provider'
import { createFirebaseAuthProvider } from './firebase-auth'

export enum IdentityProviderType {
  FirebaseAuth = 'FIREBASE_AUTH'
};

interface Options {
  type: IdentityProviderType
}

export function createIdentityProvider (options: Options): IdentityProvider {
  switch (options.type) {
    case IdentityProviderType.FirebaseAuth: return createFirebaseAuthProvider(options)
  }
}
