import React from 'react';
import { spaces } from '__cli/core/design';
import { useAuthStore, AUTH_STATUSES } from '../domain';
import { Welcome } from './welcome';
import { MultipleSign } from './multiple-sign';
import { AuthDisclaimer } from './auth-disclaimer';

function PageAuth () {
  const status = useAuthStore(state => state.status);
  const email = useAuthStore(state => state.email);
  const signIn = useAuthStore(state => state.signIn);
  const signUp = useAuthStore(state => state.signUp);

  return (
    <div>
      {
        status === AUTH_STATUSES.SIGNEDIN
          ? <Welcome user={email} />
          : <MultipleSign onSignIn={signIn} onSignUp={signUp}/>
      }
      <AuthDisclaimer css={{ marginTop: spaces.sp5 }} />
    </div>
  );
}

export { PageAuth };
