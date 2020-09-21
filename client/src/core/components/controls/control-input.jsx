import React from 'react';
import { camelCase } from 'lodash-es';

function ControlInput ({ label, type, value, onChange, required }) {
  return (
    <div>
      <label
        css={{
          fontWeight: 400
        }}
      >
        {label}{required && '*'}
      </label>
      <input
        name={ camelCase(label) }
        type={ type }
        value={ value }
        onChange={ e => onChange(e.target.value) }
        required={required}
        css={{
          display: 'block',
          width: '100%',
          boxSizing: 'border-box',
          ':focus': {
            outlineWidth: 'thick'
          }
        }}
      />
    </div>
  );
}

export { ControlInput };
