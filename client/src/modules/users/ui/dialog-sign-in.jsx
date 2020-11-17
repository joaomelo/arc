import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { signInCommand } from '../domain';
import { validateCredentials } from '__com/users';

export const DialogSignIn = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      myCommand={signInCommand}
      payload={{ email, password }}
      validate={ validateCredentials }
      footer={<ButtonSubmit label={t('users.sign-in')} />}
    >
      <ControlEmail name="email" value={email} onChange={setEmail} />
      <ControlPassword name="password" value={password} onChange={setPassword} />
    </DialogCommand>
  );
};
