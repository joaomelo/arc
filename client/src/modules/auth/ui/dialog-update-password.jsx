import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DialogForm, ControlPasswordConfirmed, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { selectCurrentUserEmail, useUpdatePassword } from '../domain';

export const DialogUpdatePassword = () => {
  const { t } = useTranslation();
  const email = useSelector(selectCurrentUserEmail);
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');
  const { request, pending, error } = useUpdatePassword();

  return (
    <DialogForm
      isLoading={pending}
      error={error}
      onSubmit={e => request({ newPassword, email, password })}
    >
      <ControlPasswordConfirmed
        label={t('auth.password-new')}
        value={newPassword}
        onChange={setNewPassword}
        required
      />
      <ControlPassword
        label={t('auth.password-current')}
        value={password}
        onChange={setPassword}
        required
      />
      <ButtonSubmit label={t('auth.sign-in')} />
    </DialogForm>
  );
};
