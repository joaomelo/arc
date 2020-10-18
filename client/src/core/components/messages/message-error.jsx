import React from 'react';
import { weights, spaces, sizes, colors } from '__cli/core/design';

function MessageError ({ message, ...rest }) {
  return message
    ? (
      <p
        {...rest}
        css={{
          textAlign: 'center',
          color: colors.primary,
          backgroundColor: colors.accent,
          fontSize: sizes.normal,
          fontWeight: weights.bold,
          borderRadius: spaces.sp3,
          padding: spaces.sp1
        }}
      >
        { message }
      </p>
    )
    : null;
}

export { MessageError };