import React from 'react';
import { ControlInput } from './control-input';

function ControlPassword (props) {
  return (
    <ControlInput
      type="password"
      { ...props }
    />
  );
}

export { ControlPassword };
