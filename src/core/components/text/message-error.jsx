import React from 'react';
import { colors } from '@/core/design';
import { MessageBase } from './message-base';

function MessageError ({ message, ...rest }) {
  return (
    <MessageBase
      message={message}
      css={{
        color: colors.primary,
        backgroundColor: colors.accent
      }}
      {...rest}
    />
  );
}

export { MessageError };
