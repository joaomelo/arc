import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlPasswordConfirmed, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { useCurrentUserEmail, useUpdatePassword } from '../domain';

export const DialogUpdatePassword = () => {
  const { t } = useTranslation();
  const email = useCurrentUserEmail;
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      useCommand={useUpdatePassword}
      payload={{ newPassword, email, password }}
      actions={<ButtonSubmit label={t('auth.sign-in')} />}
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
    </DialogCommand>
  );
};
