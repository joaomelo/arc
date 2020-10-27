import React from 'react';
import { LoadingOverlay } from '../loading';
import { DialogForm } from './dialog-form';

export const DialogRequest = ({ useRequest, payload, children, ...rest }) => {
  const { request, pending, error, success } = useRequest();

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
