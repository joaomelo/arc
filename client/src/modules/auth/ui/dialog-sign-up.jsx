import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogForm, ControlEmail, ControlPasswordConfirmed, ButtonSubmit } from '__cli/core/components';
import { useSignUp } from '../domain';

export const DialogSignUp = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { request, pending, error } = useSignUp();

  return (
    <DialogForm
      isLoading={pending}
      error={error}
      onSubmit={e => request({ email, password })}
    >
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPasswordConfirmed value={password} onChange={setPassword} required />
      <ButtonSubmit label={t('auth.sign-up')} />
    </DialogForm>
  );
};
