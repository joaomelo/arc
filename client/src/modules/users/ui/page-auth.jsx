import React from 'react';
import { useAuthStore, AUTH_STATUSES } from '../domain';
import { Welcome } from './welcome';
import { MultipleSign } from './multiple-sign';

function PageAuth () {
  const status = useAuthStore(state => state.status);
  const email = useAuthStore(state => state.email);
  const signIn = useAuthStore(state => state.signIn);
  const signUp = useAuthStore(state => state.signUp);

  return status === AUTH_STATUSES.SIGNEDIN
    ? <Welcome user={email} />
    : <MultipleSign onSignIn={signIn} onSignUp={signUp}/>;
}

export { PageAuth };
