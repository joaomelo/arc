import React from 'react';
import { ButtonPrimary } from './button-primary';

export const ButtonSubmit = props => {
  return (
    <ButtonPrimary
      type="submit"
      {...props}
    />
  );
};
