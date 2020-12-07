import React from 'react';
import { weights, spaces, sizes, colors } from '@/shared/design';

export const MessageBase = ({ message, ...rest }) => {
  if (!message) return null;
  return (
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
  );
};
