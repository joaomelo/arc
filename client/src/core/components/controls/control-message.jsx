import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '__cli/core/design';

function ControlMessage ({ validity, ...rest }) {
  const { t } = useTranslation();

  if (validity.valid) return null;

  return (
    <span
      css={{
        color: theme.colors.accent,
        fontSize: theme.size.s1
      }}
      {...rest}
    >
      {validity.valueMissing && t('components.input-required')}
      {validity.typeMismatch && t('components.input-invalid')}
    </span>
  );
}

export { ControlMessage };
