import React, { useState } from 'react';
import { camelCase, upperFirst } from 'lodash-es';
import { weights, sizes, colors } from '__cli/core/design';

export const ControlGroup = ({ label, baseControl, ...rest }) => {
  const [message, setMessage] = useState('');

  const Control = baseControl;
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
      <Control
        id={controlId}
        onValidation={error => setMessage(error)}
        {...rest}
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
};
