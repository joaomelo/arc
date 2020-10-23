import React from 'react';
import { spaces } from '__cli/core/design';
import { MessageError, MessageInfo } from '../text';
import { LoadingOverlay } from '../loading';
import { DialogBase } from './dialog-base';

function DialogForm ({ onSubmit, header, isLoading, error, success, children }) {
  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;
    onSubmit(e);
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading}/>
      <DialogBase header={header}>
        <form
          onSubmit={ handleSubmit }
          noValidate
          css={{
            '> * + *': {
              marginTop: spaces.spacious
            }
          }}
        >
          { children }
        </form>
        <div css={{ marginTop: spaces.breathable }}>
          <MessageError message={error}/>
          <MessageInfo message={success}/>
        </div>
      </DialogBase>
    </>
  );
}

export { DialogForm };
