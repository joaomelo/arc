import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogForm,
  ControlEmail,
  ControlPasswordConfirmed,
  PrimaryButton
} from '__cli/core/components';

function DialogSignUp ({ onSignUp }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogForm onSubmit={e => onSignUp({ email, password })}>
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPasswordConfirmed value={password} onChange={setPassword} required />
      <PrimaryButton label={t('users.sign-up')} />
    </DialogForm>
  );
}

export { DialogSignUp };
