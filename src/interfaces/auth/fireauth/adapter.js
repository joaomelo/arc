import { fireauthSignUp } from './sign-up';
import { fireauthSolveUser } from './status';

export function initFireauthAdapter (fireauth) {
  const adapter = {
    solveUser: () => fireauthSolveUser(fireauth),
    signUp: payload => fireauthSignUp(payload, fireauth),
    signOut: () => fireauth.signOut()
  };

  return adapter;
}
