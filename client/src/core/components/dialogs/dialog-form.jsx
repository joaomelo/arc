import React, { useState } from 'react';
import { theme } from '__cli/core/design';

function DialogForm ({ onSubmit, title, children }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;
    try {
      await onSubmit(e);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div
      css={{
        padding: theme.space.s3,
        borderRadius: theme.space.s3,
        backgroundColor: theme.colors.primary
      }}
    >
      {title &&
        <h2
          css={{
            textAlign: 'center',
            fontWeight: theme.weight.w4,
            fontSize: theme.size.s3
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
            marginTop: theme.space.s3
          }
        }}
      >
        { children }
      </form>
      { message &&
        <span
          css={{
            display: 'block',
            textAlign: 'center',
            color: theme.colors.primary,
            backgroundColor: theme.colors.accent,
            fontSize: theme.size.s2,
            fontWeight: theme.weight.w2,
            marginTop: theme.space.s3,
            borderRadius: theme.space.s3,
            padding: theme.space.s1,
            widht: '100%'
          }}
        >
          { message }
        </span>
      }
    </div>
  );
}

export { DialogForm };
