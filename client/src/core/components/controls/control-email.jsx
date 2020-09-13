import React from 'react';
import { ControlInput } from './control-input';

function ControlEmail ({ label, value, setValue }) {
  return (
    <ControlInput
      label={ label }
      type="email"
      value={ value }
      setValue= { setValue }
    />
  );
}

export { ControlEmail };
