import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ControlPassword } from './control-password';

function ControlPasswordConfirmed ({ label, value, ...rest }) {
  const { t } = useTranslation();
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const rules = [
    v => v !== value && 'passwords should match'
  ];

  return (
    <>
      <ControlPassword
        {...rest}
        label={label}
        value={value}
      />
      <ControlPassword
        {...rest}
        label={t('users.password-repeat')}
        value={confirmationPassword}
        onChange={setConfirmationPassword}
        rules={rules}
      />
    </>
  );
}

export { ControlPasswordConfirmed };
