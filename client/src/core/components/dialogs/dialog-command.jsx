import React from 'react';
import { spaces } from '__cli/core/design';
import { useCommand } from '__cli/core/commands';
import { LoadingOverlay } from '../loading';
import { MessageMulti } from '../text';
import { DialogForm } from './dialog-form';

export const DialogCommand = ({ myCommand, payload, children, ...rest }) => {
  const { command, pending, error, success } = useCommand(myCommand);

  return (
    <>
      <LoadingOverlay isLoading={pending}/>
      <DialogForm
        onSubmit={command}
        {...rest}
      >
        {children}
        <MessageMulti
          error={error}
          info={success}
          css={{ marginTop: spaces.spacious }}
        />
      </DialogForm>
    </>
  );
};
