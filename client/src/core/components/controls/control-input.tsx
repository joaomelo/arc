import React from 'react';
import { camelCase } from 'lodash-es';

interface ControlInputProps {
  label: string, 
  type: string,
  value: string,
  setValue: Function
}

function ControlInput({ label, type, value, setValue }: ControlInputProps) {
  return (
    <label className="block text-gray-800 font-bold">
      { label }
      <input 
        name={ camelCase(label) }
        type={ type }
        className="appearance-none shadow border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
        value={ value }
        onChange={ e => setValue(e.target.value) }
      />
    </label>
  )
}

export { ControlInput, ControlInputProps }