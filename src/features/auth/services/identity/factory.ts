import type { IdentityProvider } from '../../cases'
import { createFirebaseAuthProvider } from './firebase-auth'

export function createIdentityProvider (type: string, options: Object): IdentityProvider {
  switch (type) {
    case 'FIREBASE_AUTH': return createFirebaseAuthProvider(options)
    default: throw new Error(`Identity Provider of type "${type}" not supported.`)
  }
}
