import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogTabs } from '@/shared/components';
import { DialogSignIn } from './dialog-sign-in';
import { DialogSignUp } from './dialog-sign-up';

export const DialogSign = () => {
  const { t } = useTranslation();

  return (
    <DialogTabs>
      <DialogSignIn header={t('users.sign-in')}/>
      <DialogSignUp header={t('users.sign-up')}/>
    </DialogTabs>
  );
};