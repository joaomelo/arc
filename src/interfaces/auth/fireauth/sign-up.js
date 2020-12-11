import { UnsupportedAuthServiceError, EmailAlreadyInUseError } from '../adapter';
import { extractUser } from './extract-user';

export function fireauthSignUp ({ service, credentials }, fireauth) {
  switch (service) {
    case 'email':
      return fireauthEmailSignUp(credentials, fireauth);
    default:
      throw new UnsupportedAuthServiceError();
  }
};

async function fireauthEmailSignUp ({ email, password }, fireauth) {
  try {
    const userCredential = await fireauth.createUserWithEmailAndPassword(email, password);
    return extractUser(userCredential.user);
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        throw new EmailAlreadyInUseError();
      default:
        throw error;
    }
  }
}
