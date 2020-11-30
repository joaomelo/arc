import React from 'react';

export const BaseInput = ({ type, defaultValue, ...rest }) => {
  return (
    <input
      type={type || 'text'}
      defaultValue={defaultValue}
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
