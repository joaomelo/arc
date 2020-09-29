import React, { useState } from 'react';
import { theme, sizes, colors } from '__cli/core/design';
import { useLoading } from '../singletons';

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
    <div
      css={{
        padding: theme.space.s4,
        borderRadius: theme.space.s3,
        backgroundColor: colors.primary
      }}
    >
      {title &&
        <h2
          css={{
            textAlign: 'center',
            fontWeight: theme.weight.w4,
            fontSize: sizes.sz3
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
            marginTop: theme.space.s4
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
            color: colors.primary,
            backgroundColor: colors.accent,
            fontSize: sizes.sz2,
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
