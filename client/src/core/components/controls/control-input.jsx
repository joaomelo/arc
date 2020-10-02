import React, { useState } from 'react';
import { camelCase, upperFirst } from 'lodash-es';
import { weights, sizes, colors } from '__cli/core/design';
import { BaseInput } from './base-input';

function ControlInput ({ label, ...rest }) {
  const [message, setMessage] = useState('');

  const controlId = `control${upperFirst(camelCase(label))}`;

  return (
    <div>
      <label
        htmlFor={controlId}
        css={{
          fontWeight: weights.bold,
          color: message ? colors.accent : 'inherit'
        }}
      >
        {label}
      </label>
      < BaseInput
        {...rest}
        id={controlId}
        onValidation={error => setMessage(error)}
      />
      { message &&
        <p
          css={{
            color: colors.accent,
            fontSize: sizes.small,
            fontWeight: weights.bold
          }}
        >
          {message}
        </p>
      }
    </div>
  );
}

export { ControlInput };
