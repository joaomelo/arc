import React from 'react';
import { weights, spaces, sizes, colors } from '__cli/core/design';

function MessageBase ({ message, ...rest }) {
  return message
    ? (
      <p
        css={{
          textAlign: 'center',
          color: colors.secondary,
          backgroundColor: colors.primary,
          fontSize: sizes.normal,
          fontWeight: weights.bold,
          borderRadius: spaces.breathable,
          padding: `${spaces.breathable} ${spaces.spacious}`
        }}
        {...rest}
      >
        { message }
      </p>
    )
    : null;
}

export { MessageBase };
