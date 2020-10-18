import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  DialogForm,
  ControlEmail,
  ControlPasswordConfirmed,
  PrimaryButton
} from '__cli/core/components';
import { signUp } from '../domain';

function DialogSignUpView ({ onSignUp, isLoading, error }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogForm
      isLoading={isLoading}
      error={error}
      onSubmit={e => signUp({ email, password })}
    >
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPasswordConfirmed value={password} onChange={setPassword} required />
      <PrimaryButton label={t('users.sign-up')} />
    </DialogForm>
  );
}

const mapState = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});
const mapDispatch = { signUp };
export const DialogSignUp = connect(mapState, mapDispatch)(DialogSignUpView);
