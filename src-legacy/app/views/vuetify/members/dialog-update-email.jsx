import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPassword, SaveBack } from '@/shared/components';
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
