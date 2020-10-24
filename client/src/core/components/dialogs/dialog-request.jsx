import React from 'react';
import { spaces } from '__cli/core/design';
import { MessageError, MessageInfo } from '../text';
import { LoadingOverlay } from '../loading';
import { DialogBase } from './dialog-base';

function DialogRequest ({ onSubmit, header, isLoading, error, success, children }) {
  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;
    onSubmit(e);
  };

  const messageSlot = error || success
    ? (
      <div css={{ marginTop: spaces.breathable }}>
        <MessageError message={error}/>
        <MessageInfo message={success}/>
      </div>
    )
    : null;

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
        { messageSlot }
      </DialogBase>
    </>
  );
}

export { DialogRequest };
