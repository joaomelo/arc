import React from 'react';
import { useTranslation } from 'react-i18next';
import { ControlInput } from './control-input';

function ControlPassword ({ label, ...rest }) {
  const { t } = useTranslation();
  const passwordLabel = label || t('auth.password');

  return (
    <ControlInput
      label={passwordLabel}
      type="password"
      { ...rest }
    />
  );
}

export { ControlPassword };
