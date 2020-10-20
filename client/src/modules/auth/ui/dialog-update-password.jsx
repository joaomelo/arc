import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  DialogForm,
  ControlEmail,
  ControlPassword,
  ButtonSubmit
} from '__cli/core/components';
import { updatePassword } from '../domain';

function DialogUpdatePasswordView ({ updatePassword, isLoading, error }) {
  const { t } = useTranslation();
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogForm
      isLoading={isLoading}
      error={error}
      onSubmit={e => updatePassword({ newEmail, password })}
    >
      <ControlEmail value={newEmail} onChange={setNewEmail} required />
      <ControlPassword value={password} onChange={setPassword} required />
      <ButtonSubmit label={t('auth.sign-in')} />
    </DialogForm>
  );
}

const mapState = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});
const mapDispatch = { updatePassword };
export const DialogUpdatePassword = connect(mapState, mapDispatch)(DialogUpdatePasswordView);
