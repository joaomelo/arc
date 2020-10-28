import React from 'react';
import { useTranslation } from 'react-i18next';
import { spaces } from '__cli/core/design';
import { ButtonSubmit } from './button-submit';
import { ButtonSecondary } from './button-secondary';

export const SaveBack = ({ saveLabel, backLabel }) => {
  const { t } = useTranslation();
  return (
    <SaveCancel
      label={cancelLabel || t('components.cancel')}
      onClick={onCancel}
    />
  );
};
