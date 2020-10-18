import React from 'react';
import { weights, spaces, sizes, colors } from '__cli/core/design';

function MessageError ({ message, ...rest }) {
  return message
    ? (
      <p
        css={{
          textAlign: 'center',
          color: colors.primary,
          backgroundColor: colors.accent,
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

export { MessageError };
