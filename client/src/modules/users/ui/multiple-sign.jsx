import React from 'react';
import { DialogSignIn } from './dialog-sign-in';
import { DialogSignUp } from './dialog-sign-up';

function MultipleSign ({ onSignIn, onSignUp }) {
  return (
    <div
      css={{
        '> *': {
          marginTop: '8px'
        }
      }}
    >
      <DialogSignIn onSignIn={onSignIn}/>
      <DialogSignUp onSignUp={onSignUp}/>
    </div>
  );
}

export { MultipleSign };
