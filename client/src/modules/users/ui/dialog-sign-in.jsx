import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { signInCommand } from '../domain';

export const DialogSignIn = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      myCommand={signInCommand}
      payload={{ email, password }}
      actions={<ButtonSubmit label={t('users.sign-in')} />}
    >
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPassword value={password} onChange={setPassword} required />
    </DialogCommand>
  );
};
