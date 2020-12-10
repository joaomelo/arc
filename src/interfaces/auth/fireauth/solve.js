import { AUTH_STATUSES } from '@/domain/users';

export function fireauthSolveStatus (fireauth) {
  const { SIGNED_OUT, SIGNED_IN } = AUTH_STATUSES;
  return new Promise((resolve, reject) => {
    try {
      fireauth.onAuthStateChanged(user => resolve(user ? SIGNED_IN : SIGNED_OUT));
    } catch (error) {
      reject(error);
    }
  });
}
