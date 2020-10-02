import React from 'react';
import { useTranslation } from 'react-i18next';
import { ControlInput } from './control-input';

function ControlEmail ({ label, ...rest }) {
  const { t } = useTranslation();
  const emailLabel = label || t('users.email');
  // {validity.valueMissing && t('components.input-required')}
  // {validity.typeMismatch && t('components.input-invalid')}
  return (
    <ControlInput
      label={emailLabel}
      type="email"
      { ...rest }
    />
  );
}

export { ControlEmail };
