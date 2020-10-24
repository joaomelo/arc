import React from 'react';
import { MessageError } from './message-error';
import { MessageInfo } from './message-info';

export const MessageMulti = ({ error, info, ...rest }) => {
  if (!error && !info) return null;

  return (
    <div {...rest}>
      <MessageError message={error}/>
      <MessageInfo message={info}/>
    </div>
  );
};
