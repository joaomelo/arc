import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogBasic,
  ControlEmail,
  ControlPassword,
  PrimaryButton
} from '__cli/core/components';

function DialogSignUp ({ onSignUp }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogBasic title={t('auth.sign-up')} onSubmit={ e => onSignUp(email, password) }>
      <ControlEmail value={ email } onChange={ setEmail } />
      <ControlPassword value={ password } onChange={ setPassword } />
      <PrimaryButton label={t('auth.sign-up')} />
    </DialogBasic>
  );
}

export { DialogSignUp };
