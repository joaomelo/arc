import React from 'react';
import { ControlInput } from './control-input';

interface ControlPasswordProps {
  label: string, 
  value: string,
  setValue: Function
}

function ControlPassword({ label, value, setValue }: ControlPasswordProps) {
  return (
    <ControlInput 
      label={ label } 
      type="password"
      value={ value }
      setValue= { setValue }
    />
  )
}

export { ControlPassword }
