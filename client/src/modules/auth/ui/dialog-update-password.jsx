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
  const { request, pending, error, success } = useUpdatePassword();

  return (
    <DialogForm
      onSubmit={e => request({ newPassword, email, password }, t('auth.password-updated'))}
      isLoading={pending}
      error={error}
      success={success}
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
