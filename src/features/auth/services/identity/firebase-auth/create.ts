import firebase from 'firebase/app'
import 'firebase/auth'

import { initFireauth } from './service'
import { adaptFireauth } from './adapter'

import { fireauthSignUp } from './sign-up'
import { fireauthSignIn } from './sign-in'
import { fireauthSolveUser } from './status'

export function createFirebaseAuthProvider (options) {
  const fireauth = initFireauth(options)
  const fireauthAdapter = adaptFireauth(fireauth)
  return fireauthAdapter
}

function initFireauth ({ config, emulators }) {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(config)
  }

  const fireauth = firebase.auth()

  if (emulators) {
    fireauth.useEmulator(`http://localhost:${emulators.authPort}/`)
  }

  return fireauth
}

function adaptFireauth (fireauth) {
  const authService = {
    solveUser: async () => await fireauthSolveUser(fireauth),
    signUp: async payload => await fireauthSignUp(payload, fireauth),
    signIn: async payload => await fireauthSignIn(payload, fireauth),
    signOut: () => fireauth.signOut()
  }

  return authService
}
