import React from 'react';
import { spaces } from '__cli/core/design';
import { MessageError } from '../text';
import { LoadingOverlay } from '../loading';
import { DialogBase } from './dialog-base';

function DialogForm ({ header, isLoading, error, onSubmit, children }) {
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
        <MessageError
          message={error}
          css={{
            marginTop: spaces.breathable
          }}
        />
      </DialogBase>
    </>
  );
}

export { DialogForm };
