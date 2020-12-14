import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogCommand, ControlEmail, ControlPassword, ButtonSubmit, useValidation } from '@/shared/components';
import { signInCommand } from '../domain';
import { validateCredentials } from '__com/users';

export const DialogSignIn = () => {
  const { t } = useTranslation();
  const { validity, refreshValidity } = useValidation(validateCredentials);

  return (
    <DialogCommand
      myCommand={signInCommand}
      payload={validity.payload}
      onValidate={refreshValidity}
      footer={<ButtonSubmit label={t('auth.sign-in')} />}
    >
      <ControlEmail name="email" errors={validity.errors}/>
      <ControlPassword name="password" errors={validity.errors}/>
    </DialogCommand>
  );
};
