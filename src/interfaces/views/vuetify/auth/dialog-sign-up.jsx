import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPasswordConfirmed, ButtonSubmit } from '@/shared/components';
import { signUpCommand } from '../domain';

export const DialogSignUp = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      myCommand={signUpCommand}
      payload={{ email, password }}
      footer={<ButtonSubmit label={t('auth.sign-up')} />}
    >
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPasswordConfirmed value={password} onChange={setPassword} required />
    </DialogCommand>
  );
};
