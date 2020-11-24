import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPassword, SaveBack } from '@/core/components';
import { useCurrentUserEmail, updateEmailCommand } from '../domain';

export const DialogUpdateEmail = () => {
  const { t } = useTranslation();
  const email = useCurrentUserEmail();
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      myCommand={updateEmailCommand}
      payload={{ newEmail, email, password }}
      footer={<SaveBack />}
    >
      <ControlEmail
        label={t('users.email-new')}
        value={newEmail}
        onChange={setNewEmail}
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