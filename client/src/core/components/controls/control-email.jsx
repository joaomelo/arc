import React from 'react';
import { ControlInput } from './control-input';

function ControlEmail (props) {
  return (
    <ControlInput
      type="email"
      { ...props }
    />
  );
}

export { ControlEmail };
