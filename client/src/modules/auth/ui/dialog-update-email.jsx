import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPassword, SaveBack } from '__cli/core/components';
import { useCurrentUserEmail, useUpdateEmail } from '../domain';

export const DialogUpdateEmail = () => {
  const { t } = useTranslation();
  const email = useCurrentUserEmail();
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogCommand
      useCommand={useUpdateEmail}
      payload={{ newEmail, email, password }}
      actions={<SaveBack />}
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
        required
      />
    </DialogCommand>
  );
};
