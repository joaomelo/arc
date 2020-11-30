import { useState } from 'react';

export const useValidation = validate => {
  const [validity, setValidity] = useState({
    success: false,
    errors: {},
    payload: {}
  });

  const refreshValidity = form => {
    // we convert formData web api class to a plain object
    const payload = {};
    const formData = new FormData(form);
    for (const entry of formData.entries()) {
      // this will discard empty string fields
      // wich secures proper 'required' check in json-schema
      // AJV considers empty strings valid against the required keyword
      if (entry[1]) payload[entry[0]] = entry[1];
    }

    // the process of validation is impure and changes the payload
    // removing properties and adding defaults acoordinly to the schema
    // because of that, this payload should be the source of truth
    const { success, errors } = validate(payload);

    // reestructure the errors list to make it transparent to components
    const refinedErrors = {};
    errors.forEach(error => {
      const fieldName = error.dataPath
        ? error.dataPath.substring(1)
        : error.params.missingProperty;
      refinedErrors[fieldName] = error.message;
    });

    const validitySnapshot = {
      success,
      payload,
      errors: refinedErrors
    };

    setValidity(validitySnapshot);

    // here we return a validity spapshot wich will not update
    // that can used in a component that just receive the refresh function
    return validitySnapshot;
  };

  return { validity, refreshValidity };
};
