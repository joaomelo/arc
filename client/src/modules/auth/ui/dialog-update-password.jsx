import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  DialogForm,
  ControlPasswordConfirmed,
  ControlPassword,
  ButtonSubmit
} from '__cli/core/components';
import { updatePassword } from '../domain';

function DialogUpdatePasswordView ({ updatePassword, email, isLoading, error }) {
  const { t } = useTranslation();
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogForm
      isLoading={isLoading}
      error={error}
      onSubmit={e => updatePassword({ newPassword, email, password })}
    >
      <ControlPasswordConfirmed
        label={t('auth.password-new')}
        value={newPassword}
        onChange={setNewPassword}
        required
      />
      <ControlPassword
        label={t('auth.password-current')}
        value={password}
        onChange={setPassword}
        required
      />
      <ButtonSubmit label={t('auth.sign-in')} />
    </DialogForm>
  );
}

const mapState = state => ({
  email: state.auth.currentUser.email,
  isLoading: state.auth.isLoading,
  error: state.auth.error
});
const mapDispatch = { updatePassword };
export const DialogUpdatePassword = connect(mapState, mapDispatch)(DialogUpdatePasswordView);
