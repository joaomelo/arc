import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DialogRequest, ControlEmail, ControlPassword, ButtonSubmit } from '__cli/core/components';
import { selectCurrentUserEmail, useUpdateEmail } from '../domain';

export const DialogUpdateEmail = () => {
  const { t } = useTranslation();
  const email = useSelector(selectCurrentUserEmail);
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogRequest
      useRequest={useUpdateEmail}
      payload={{ newEmail, email, password }}
      actions={<ButtonSubmit label={t('components.save')} />}
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
    </DialogRequest>
  );
};
