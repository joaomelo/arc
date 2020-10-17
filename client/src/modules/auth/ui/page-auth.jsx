import React from 'react';
import { connect } from 'react-redux';
import { spaces } from '__cli/core/design';
import { AUTH_STATUSES, slice } from '../domain';
import { Welcome } from './welcome';
import { MultipleSign } from './multiple-sign';
import { AuthDisclaimer } from './auth-disclaimer';

function PageAuthView ({ status, email, signIn, signUp, signOut }) {
  return (
    <div>
      {
        status === AUTH_STATUSES.SIGNEDIN
          ? <Welcome user={email} onSignOut={signOut} />
          : <MultipleSign onSignIn={signIn} onSignUp={signUp}/>
      }
      <AuthDisclaimer css={{ marginTop: spaces.sp5 }} />
    </div>
  );
}

const { signIn, signUp, signOut } = slice.actions;
const mapDispatch = { signIn, signUp, signOut };
const mapState = state => ({ status: state.auth.status, email: state.auth.email });

export const PageAuth = connect(mapState, mapDispatch)(PageAuthView);
