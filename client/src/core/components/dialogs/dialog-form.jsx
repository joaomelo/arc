import React, { useState } from 'react';
import { weights, spaces, sizes } from '__cli/core/design';
import { MessageError } from '../messages';
import { useLoading } from '../singletons';
import { DialogBase } from './dialog-base';

function DialogForm ({ onSubmit, title, children }) {
  const [message, setMessage] = useState('');
  const toggleLoading = useLoading(state => state.toggleLoading);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;
    try {
      toggleLoading();
      await onSubmit(e);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setTimeout(() => toggleLoading(), 20000);
    }
  };

  return (
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
        message={message}
        css={{
          marginTop: spaces.sp3
        }}
      />
    </DialogBase>
  );
}

export { DialogForm };
