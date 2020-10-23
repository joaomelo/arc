import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogForm, ControlEmail, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { useSignIn } from '../domain';

export const DialogSignIn = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { request, pending, error } = useSignIn();

  return (
    <div>
      <DialogForm
        isLoading={pending}
        error={error}
        onSubmit={e => request({ email, password })}
      >
        <ControlEmail value={email} onChange={setEmail} required />
        <ControlPassword value={password} onChange={setPassword} required />
        <ButtonSubmit label={t('auth.sign-in')} />
      </DialogForm>
    </div>
  );
};
