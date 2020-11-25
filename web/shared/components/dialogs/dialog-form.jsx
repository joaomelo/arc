import React from 'react';
import { Card } from './card';

export const DialogForm = ({ onSubmit, onValidate, children, ...rest }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { success, payload } = onValidate(e.target);
    if (success) {
      onSubmit(payload);
    }
  };

  const handleChange = e => {
    onValidate(e.target.form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      noValidate
    >
      <Card {...rest}>
        { children }
      </Card>
    </form>
  );
};
