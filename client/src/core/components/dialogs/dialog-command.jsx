import React from 'react';
import { useCommand } from '__cli/core/commands';
import { LoadingOverlay } from '../loading';
import { DialogForm } from './dialog-form';

export const DialogCommand = ({ myCommand, payload, children, ...rest }) => {
  const { command, pending, error, success } = useCommand(myCommand);

  return (
    <>
      <LoadingOverlay isLoading={pending}/>
      <DialogForm
        onSubmit={e => command(payload)}
        error={error}
        success={success}
        {...rest}
      >
        {children}
      </DialogForm>
    </>
  );
};
