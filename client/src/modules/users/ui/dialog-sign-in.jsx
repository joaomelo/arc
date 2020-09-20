import React, { useState } from 'react';
import {
  DialogBasic,
  ControlEmail,
  ControlPassword,
  PrimaryButton
} from '__cli/core/components';

function DialogSignIn ({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogBasic onSubmit={ e => onSignIn(email, password) }>
      <ControlEmail label="Email" value={ email } onChange={ setEmail } />
      <ControlPassword label="Password" value={ password } onChange={ setPassword } />
      <PrimaryButton label="Sign In" />
    </DialogBasic>
  );
}

export { DialogSignIn };
