import React from 'react';
import { ControlInput } from './control-input';

interface ControlEmailProps {
  label: string, 
  value: string,
  setValue: Function
}

function ControlEmail({ label, value, setValue }: ControlEmailProps) {
  return (
    <ControlInput 
      label={ label } 
      type="email"
      value={ value }
      setValue= { setValue }
    />    
  )
}

export { ControlEmail }
