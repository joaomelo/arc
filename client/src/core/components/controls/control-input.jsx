import React, { useState } from 'react';
import { camelCase, upperFirst } from 'lodash-es';
import { theme } from '__cli/core/design';
import { ControlMessage } from './control-message';

function ControlInput ({ label, type, value, onChange, required }) {
  const [validity, setValidity] = useState({ valid: true });

  const handleChange = e => {
    setValidity(e.target.validity);
    onChange(e.target.value);
  };

  return (
    <div>
      <label
        css={{
          fontWeight: theme.weight.w2,
          color: validity.valid ? 'inherit' : theme.colors.accent
        }}
      >
        {label}{required && '*'}
      </label>
      <input
        name={`control${upperFirst(camelCase(label))}`}
        type={type}
        value={value}
        onChange={handleChange}
        required={required}
        css={{
          display: 'block',
          width: '100%',
          ':focus': {
            outlineWidth: 'thick'
          }
        }}
      />
      <ControlMessage validity={validity} />
    </div>
  );
}

export { ControlInput };
