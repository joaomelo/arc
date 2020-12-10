import { fireauthSignUp } from './sign-up';
import { fireauthSolveStatus } from './status';

export function initFireauthAdapter (fireauth) {
  const adapter = {
    solveStatus: () => fireauthSolveStatus(fireauth),
    signUp: payload => fireauthSignUp(payload, fireauth),
    signOut: () => fireauth.signOut()
  };

  return adapter;
}
