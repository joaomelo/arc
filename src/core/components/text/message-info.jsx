import React from 'react';
// import { colors } from '__cli/core/design';
import { MessageBase } from './message-base';

function MessageInfo ({ message }) {
  return (
    <MessageBase
      message={message}
      // css={{
      //   color: colors.primary,
      //   backgroundColor: colors.accent
      // }}
    />
  );
}

export { MessageInfo };
