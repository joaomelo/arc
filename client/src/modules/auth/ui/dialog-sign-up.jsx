import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPasswordConfirmed, ButtonSubmit } from '__cli/core/components';
import { useSignUp } from '../domain';

export const DialogSignUp = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      useCommand={useSignUp}
      payload={{ email, password }}
      actions={<ButtonSubmit label={t('auth.sign-up')} />}
    >
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPasswordConfirmed value={password} onChange={setPassword} required />
    </DialogCommand>
  );
};
