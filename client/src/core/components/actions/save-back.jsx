import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { SaveCancel } from './save-cancel';

export const SaveBack = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <SaveCancel
      cancelLabel={t('components.back')}
      onCancel={() => history.goBack()}
    />
  );
};
