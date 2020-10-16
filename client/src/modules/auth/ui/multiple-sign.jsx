import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogTabs } from '__cli/core/components';
import { DialogSignIn } from './dialog-sign-in';
import { DialogSignUp } from './dialog-sign-up';

function MultipleSign ({ onSignIn, onSignUp }) {
  const { t } = useTranslation();

  return (
    <DialogTabs>
      <DialogSignIn label={t('users.sign-in')} onSignIn={onSignIn}/>
      <DialogSignUp label={t('users.sign-up')} onSignUp={onSignUp}/>
    </DialogTabs>
  );
}

export { MultipleSign };
