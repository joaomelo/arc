import React from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALES } from '__com/i18n';
import { ControlSelect } from '@/shared/components';

export const SelectLocale = (props) => {
  const { t } = useTranslation();

  const options = Object.values(LOCALES).map(locale => {
    const { value, label } = locale;
    return { value, label };
  });

  return <ControlSelect label={t('auth.language')} options={options} {...props} />;
};
