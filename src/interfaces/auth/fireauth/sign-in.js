import { UnsupportedSignMethod, CredentialsUnrecognizedError } from '@/domain/auth';
import { extractUser } from './extract-user';

export function fireauthSignIn ({ method, credentials }, fireauth) {
  switch (method) {
    case 'email':
      return fireauthEmailSignIn(credentials, fireauth);
    default:
      throw new UnsupportedSignMethod();
  }
};

async function fireauthEmailSignIn ({ email, password }, fireauth) {
  try {
    const userCredential = await fireauth.signInWithEmailAndPassword(email, password);
    return extractUser(userCredential.user);
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        throw new CredentialsUnrecognizedError();
      default:
        throw error;
    }
  }
}
