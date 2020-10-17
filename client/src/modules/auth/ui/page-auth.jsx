import React from 'react';
import { connect } from 'react-redux';
import { spaces } from '__cli/core/design';
import { selectIsSignedIn, signIn, signUp, signOut } from '../domain';
import { Welcome } from './welcome';
import { MultipleSign } from './multiple-sign';
import { AuthDisclaimer } from './auth-disclaimer';

function PageAuthView ({ isSignedIn, email, signIn, signUp, signOut }) {
  return (
    <div>
      {
        isSignedIn
          ? <Welcome user={email} onSignOut={e => signOut()} />
          : <MultipleSign onSignIn={signIn} onSignUp={signUp}/>
      }
      <AuthDisclaimer css={{ marginTop: spaces.sp5 }} />
    </div>
  );
}

const mapDispatch = { signIn, signUp, signOut };
const mapState = state => ({ isSignedIn: selectIsSignedIn(state), email: state.auth.email });

export const PageAuth = connect(mapState, mapDispatch)(PageAuthView);
