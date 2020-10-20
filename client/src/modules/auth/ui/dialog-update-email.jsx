import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  DialogForm,
  ControlEmail,
  ControlPassword,
  ButtonSubmit
} from '__cli/core/components';
import { updateEmail } from '../domain';

function DialogUpdateEmailView ({ updateEmail, email, isLoading, error }) {
  const { t } = useTranslation();
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogForm

      isLoading={isLoading}
      error={error}
      onSubmit={e => updateEmail({ newEmail, email, password })}
    >
      <ControlEmail
        label={t('auth.email-new')}
        value={newEmail}
        onChange={setNewEmail}
        required
      />
      <ControlPassword
        label={t('auth.password-current')}
        value={password}
        onChange={setPassword}
        required />
      <ButtonSubmit label={t('components.save')} />
    </DialogForm>
  );
}

const mapState = state => ({
  email: state.auth.currentUser.email,
  isLoading: state.auth.isLoading,
  error: state.auth.error
});
const mapDispatch = { updateEmail };
export const DialogUpdateEmail = connect(mapState, mapDispatch)(DialogUpdateEmailView);
