import React from 'react';
import { LoadingOverlay } from '../loading';
import { DialogForm } from './dialog-form';

export const DialogCommand = ({ useCommand, payload, children, ...rest }) => {
  const { request, pending, error, success } = useCommand();

  return (
    <>
      <LoadingOverlay isLoading={pending}/>
      <DialogForm
        onSubmit={e => request(payload)}
        error={error}
        success={success}
        {...rest}
      >
        {children}
      </DialogForm>
    </>
  );
};
