import React, { useState } from 'react';
import {
  DialogBasic,
  ControlEmail,
  ControlPassword,
  PrimaryButton
} from '__cli/core/components';

function DialogSignUp ({ onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogBasic onSubmit={ e => onSignUp(email, password) }>
      <ControlEmail label="Email" value={ email } onChange={ setEmail } />
      <ControlPassword label="Password" value={ password } onChange={ setPassword } />
      <PrimaryButton label="Sign Up" />
    </DialogBasic>
  );
}

export { DialogSignUp };
