import { extractUser } from './extract-user';

// the function bellow avoids returning a null user before the service
// resolves data saved in local storage.
// this will secure a correct unsolved status in the app
// until the operations is finished.

export function fireauthSolveUser (fireauth) {
  return new Promise((resolve, reject) => {
    try {
      const unsubscribe = fireauth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user ? extractUser(user) : null);
      });
    } catch (error) {
      reject(error);
    }
  });
}
