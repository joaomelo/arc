import React from 'react';
import { useAuthStore, AUTH_STATUSES } from '../domain';
import { Welcome } from './welcome';
import { DialogSignIn } from './dialog-sign-in';
import { DialogSignUp } from './dialog-sign-up';

function PageAuth () {
  const status = useAuthStore(state => state.status);
  const email = useAuthStore(state => state.email);
  const signIn = useAuthStore(state => state.signIn);
  const signUp = useAuthStore(state => state.signUp);

  return status === AUTH_STATUSES.SIGNEDIN
    ? <Welcome user={email} />
    : (
      <>
        <DialogSignIn onSignIn={(email, password) => signIn(email, password)}/>
        <DialogSignUp onSignUp={(email, password) => signUp(email, password)}/>
      </>
    );
}

export { PageAuth };
