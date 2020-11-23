import React from 'react';
import { camelCase, upperFirst } from 'lodash-es';
import { weights, sizes, colors } from '@/core/design';

export const ControlGroup = ({ label, name, baseControl, errors, ...rest }) => {
  const Control = baseControl;
  const controlId = `control${upperFirst(camelCase(label))}`;

  const message = errors[name];

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
        name={name}
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
