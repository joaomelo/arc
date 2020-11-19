import React from 'react';

export const BaseSelect = ({ defaultValue, options, ...rest }) => {
  const stdOptions = options.map(option => {
    return {
      value: typeof option === 'string' ? option : option.value,
      label: typeof option === 'string' ? option : option.label
    };
  });

  return (
    <select
      defaultValue={defaultValue}
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
