import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogForm,
  ControlEmail,
  ControlPassword,
  PrimaryButton
} from '__cli/core/components';

function DialogSignIn ({ onSignIn }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogForm onSubmit={ e => onSignIn(email, password) }>
      <ControlEmail value={ email } onChange={ setEmail } required />
      <ControlPassword value={ password } onChange={ setPassword } required />
      <PrimaryButton label={t('users.sign-in')} />
    </DialogForm>
  );
}

export { DialogSignIn };
