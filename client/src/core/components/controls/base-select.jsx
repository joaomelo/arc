import React from 'react';
import { useValidation } from './use-validation';

export const BaseSelect = ({ onChange, onValidation, rules, options, ...rest }) => {
  const { handleChange, handleValidation } = useValidation({ onChange, onValidation, rules });

  const stdOptions = options.map(option => {
    return {
      value: typeof option === 'string' ? option : option.value,
      label: typeof option === 'string' ? option : option.label
    };
  });

  return (
    <select
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
    >
      {
        stdOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)
      }
    </select>
  );
};
