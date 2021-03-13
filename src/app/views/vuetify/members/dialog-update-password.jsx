import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlPasswordConfirmed, ControlPassword, SaveBack } from '@/shared/components';
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
      footer={<SaveBack />}
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
