import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlPasswordConfirmed, ControlPassword, SaveBack } from '__cli/core/components';
import { useCurrentUserEmail, updateEmailCommand } from '../domain';

export const DialogUpdatePassword = () => {
  const { t } = useTranslation();
  const email = useCurrentUserEmail;
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      myCommand={updateEmailCommand}
      payload={{ newPassword, email, password }}
      actions={<SaveBack />}
    >
      <ControlPasswordConfirmed
        label={t('users.password-new')}
        value={newPassword}
        onChange={setNewPassword}
        required
      />
      <ControlPassword
        label={t('users.password-current')}
        value={password}
        onChange={setPassword}
        required
      />
    </DialogCommand>
  );
};
