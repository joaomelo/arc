import React, { useState } from 'react';
import { camelCase, upperFirst } from 'lodash-es';
import { weights, colors } from '__cli/core/design';
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
          fontWeight: weights.bold,
          color: validity.valid ? 'inherit' : colors.accent
        }}
      >
        {label}{required && '*'}
      </label>
      <input
        name={`control${upperFirst(camelCase(label))}`}
        type={type}
        value={value}
        onChange={handleChange}
        onInvalid={e => setValidity(e.target.validity)}
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
