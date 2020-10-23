import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DialogForm, ControlEmail, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { selectCurrentUserEmail, useUpdateEmail } from '../domain';

export const DialogUpdateEmail = () => {
  const { t } = useTranslation();
  const email = useSelector(selectCurrentUserEmail);
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const { request, pending, error, success } = useUpdateEmail();

  return (
    <DialogForm
      onSubmit={e => request({ newEmail, email, password }, t('auth.email-updated'))}
      isLoading={pending}
      error={error}
      success={success}
    >
      <ControlEmail
        label={t('auth.email-new')}
        value={newEmail}
        onChange={setNewEmail}
        required
      />
      <ControlPassword
        label={t('auth.password-current')}
        value={password}
        onChange={setPassword}
        required />
      <ButtonSubmit label={t('components.save')} />
    </DialogForm>
  );
};
