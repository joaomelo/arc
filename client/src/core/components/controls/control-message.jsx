import React from 'react';
import { useTranslation } from 'react-i18next';
import { weights, sizes, colors } from '__cli/core/design';

function ControlMessage ({ validity, ...rest }) {
  const { t } = useTranslation();

  if (validity.valid) return null;

  return (
    <span
      css={{
        color: colors.accent,
        fontSize: sizes.small,
        fontWeight: weights.bold
      }}
      {...rest}
    >
      {validity.valueMissing && t('components.input-required')}
      {validity.typeMismatch && t('components.input-invalid')}
    </span>
  );
}

export { ControlMessage };
