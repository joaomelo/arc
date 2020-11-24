import React from 'react';
import { useTranslation } from 'react-i18next';
import { spaces } from '@/core/design';
import { ButtonSubmit } from './button-submit';
import { ButtonSecondary } from './button-secondary';

export const SaveCancel = ({ saveLabel, cancelLabel, onCancel }) => {
  const { t } = useTranslation();
  return (
    <>
      <ButtonSecondary
        label={cancelLabel || t('components.cancel')}
        onClick={onCancel}
      />
      <ButtonSubmit
        label={saveLabel || t('components.save')}
        css={{ marginLeft: spaces.normal }}
      />
    </>
  );
};
