import React from 'react';
import { signIn } from '../domain';
import { DialogSignIn } from './dialog-signin';

function PageAuth () {
  return (
    <DialogSignIn onSignIn={credentials => signIn(credentials)}/>
  );
}

export { PageAuth };
