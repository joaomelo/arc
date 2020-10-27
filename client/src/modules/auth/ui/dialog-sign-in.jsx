import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogRequest, ControlEmail, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { useSignIn } from '../domain';

export const DialogSignIn = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogRequest
      useRequest={useSignIn}
      payload={{ email, password }}
      actions={<ButtonSubmit label={t('auth.sign-in')} />}
    >
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPassword value={password} onChange={setPassword} required />
    </DialogRequest>
  );
};
