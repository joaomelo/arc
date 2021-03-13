import { fireauthSignUp } from './sign-up';
import { fireauthSignIn } from './sign-in';
import { fireauthSolveUser } from './status';

export function adaptFireauth (fireauth) {
  const authService = {
    solveUser: () => fireauthSolveUser(fireauth),
    signUp: payload => fireauthSignUp(payload, fireauth),
    signIn: payload => fireauthSignIn(payload, fireauth),
    signOut: () => fireauth.signOut()
  };

  return authService;
}
