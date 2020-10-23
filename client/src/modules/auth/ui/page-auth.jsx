import React from 'react';
import { useSelector } from 'react-redux';
import { spaces } from '__cli/core/design';
import { selectIsSignedIn } from '../domain';
import { Welcome } from './welcome';
import { MultipleSign } from './multiple-sign';
import { AuthDisclaimer } from './auth-disclaimer';

export const PageAuth = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return (
    <div>
      { isSignedIn ? <Welcome /> : <MultipleSign /> }
      <AuthDisclaimer css={{ marginTop: spaces.presumptuous }} />
    </div>
  );
};
