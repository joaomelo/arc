import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  DialogForm,
  ControlEmail,
  ControlPassword,
  PrimaryButton
} from '__cli/core/components';
import { signIn } from '../domain';

function DialogSignInView ({ signIn, isLoading, error }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogForm
      isLoading={isLoading}
      error={error}
      onSubmit={e => signIn({ email, password })}
    >
      <ControlEmail value={email} onChange={setEmail} required />
      <ControlPassword value={password} onChange={setPassword} required />
      <PrimaryButton label={t('users.sign-in')} />
    </DialogForm>
  );
}

const mapState = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});
const mapDispatch = { signIn };
export const DialogSignIn = connect(mapState, mapDispatch)(DialogSignInView);
