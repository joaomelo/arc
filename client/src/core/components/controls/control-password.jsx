import React from 'react';
import { ControlInput } from './control-input';

function ControlPassword ({ label, value, setValue }) {
  return (
    <ControlInput
      label={ label }
      type="password"
      value={ value }
      setValue= { setValue }
    />
  );
}

export { ControlPassword };
