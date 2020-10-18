import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogTabs } from '__cli/core/components';
import { DialogSignIn } from './dialog-sign-in';
import { DialogSignUp } from './dialog-sign-up';

function MultipleSign () {
  const { t } = useTranslation();

  return (
    <DialogTabs>
      <DialogSignIn label={t('users.sign-in')}/>
      <DialogSignUp label={t('users.sign-up')}/>
    </DialogTabs>
  );
}

export { MultipleSign };