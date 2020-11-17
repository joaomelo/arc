import React from 'react';
import { Card } from './card';

export const DialogForm = ({ onSubmit, validate, children, ...rest }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { success, payload, errors } = handleValidation(e.target);
    if (success) {
      onSubmit(payload);
    } else {
      // apply errors to the form controls
      // what is the strategy? applyMessage? use a prop?
      console.log(errors);
    }
  };

  const handleValidation = form => {
    // we convert formData web api class to a plain object
    const payload = {};
    const formData = new FormData(form);
    for (const entry of formData.entries()) {
      // this will set 'null' in empty string fields
      // wich secures proper 'required' check in json-schema
      // AJV considers empty strings valid against the required keyword
      payload[entry[0]] = entry[1] || null;
    }

    // the process of validation is impure and changes the payload
    // removing properties and adding defaults acoordinly to the schema
    // because of that this payload should be the source of truth
    const validation = validate(payload);

    const result = {
      success: validation.success,
      payload,
      errors: validation.errors
    };

    return result;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
    >
      <Card {...rest}>
        { children }
      </Card>
    </form>
  );
};
