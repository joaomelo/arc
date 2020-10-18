import React from 'react';
import { connect } from 'react-redux';
import { spaces } from '__cli/core/design';
import { selectIsSignedIn } from '../domain';
import { Welcome } from './welcome';
import { MultipleSign } from './multiple-sign';
import { AuthDisclaimer } from './auth-disclaimer';

function PageAuthView ({ isSignedIn }) {
  return (
    <div>
      {
        isSignedIn
          ? <Welcome />
          : <MultipleSign />
      }
      <AuthDisclaimer css={{ marginTop: spaces.sp5 }} />
    </div>
  );
}

const mapState = state => ({ isSignedIn: selectIsSignedIn(state) });
const mapDispatch = null;
export const PageAuth = connect(mapState, mapDispatch)(PageAuthView);
