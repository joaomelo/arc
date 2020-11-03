import React from 'react';
import { useValidation } from './use-validation';

export const BaseInput = ({ type, onChange, onValidation, rules, ...rest }) => {
  const { handleChange, handleValidation } = useValidation({ onChange, onValidation, rules });

  return (
    <input
      type={type || 'text'}
      onChange={handleChange}
      onInvalid={handleValidation}
      css={{
        display: 'block',
        width: '100%',
        ':focus': {
          outlineWidth: 'thick'
        }
      }}
      {...rest}
    />
  );
};
