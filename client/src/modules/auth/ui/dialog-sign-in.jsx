import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogForm, ControlEmail, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { useSignIn } from '../domain';

export function DialogSignIn ({ signSuccess }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { request, loading, error, data } = useSignIn();

  console.log({ loading, error, data });

  return (
    <div>
      <DialogForm
        isLoading={loading}
        error={error}
        onSubmit={e => request({ email, password })}
      >
        <ControlEmail value={email} onChange={setEmail} required />
        <ControlPassword value={password} onChange={setPassword} required />
        <ButtonSubmit label={t('auth.sign-in')} />
      </DialogForm>
      <p>isLoading: {loading ? 'yes' : 'not'} - error: {error} - data: {JSON.stringify(data)}</p>
    </div>
  );
}
