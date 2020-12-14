import { fireauthSignUp } from './sign-up';
import { fireauthSolveUser } from './status';

export function adaptFireauth (fireauth) {
  const authService = {
    solveUser: () => fireauthSolveUser(fireauth),
    signUp: payload => fireauthSignUp(payload, fireauth),
    signOut: () => fireauth.signOut()
  };

  return authService;
}
