import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogBasic,
  ControlEmail,
  ControlPassword,
  PrimaryButton
} from '__cli/core/components';

function DialogSignIn ({ onSignIn }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogBasic title={t('users.sign-in')} onSubmit={ e => onSignIn(email, password) }>
      <ControlEmail value={ email } onChange={ setEmail } required />
      <ControlPassword value={ password } onChange={ setPassword } />
      <PrimaryButton label={t('users.sign-in')} />
    </DialogBasic>
  );
}

export { DialogSignIn };
