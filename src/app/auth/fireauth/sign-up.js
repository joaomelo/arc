import { UnsupportedSignMethod, EmailAlreadyInUseError } from '@/domain/auth';
import { extractUser } from './extract-user';

export function fireauthSignUp ({ method, credentials }, fireauth) {
  switch (method) {
    case 'email':
      return fireauthEmailSignUp(credentials, fireauth);
    default:
      throw new UnsupportedSignMethod();
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
