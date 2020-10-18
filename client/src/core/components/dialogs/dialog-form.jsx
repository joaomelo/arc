import React from 'react';
import { weights, spaces, sizes } from '__cli/core/design';
import { MessageError } from '../messages';
import { LoadingOverlay } from '../loading';
import { DialogBase } from './dialog-base';

function DialogForm ({ onSubmit, title, isLoading, error, children }) {
  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;
    onSubmit(e);
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading}/>
      <DialogBase>
        {title &&
        <h2
          css={{
            textAlign: 'center',
            fontWeight: weights.bolder,
            fontSize: sizes.big
          }}
        >
          {title}
        </h2>
        }
        <form
          onSubmit={ handleSubmit }
          noValidate
          css={{
            '> * + *': {
              marginTop: spaces.sp4
            }
          }}
        >
          { children }
        </form>
        <MessageError
          message={error}
          css={{
            marginTop: spaces.sp3
          }}
        />
      </DialogBase>
    </>
  );
}

export { DialogForm };
