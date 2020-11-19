import Ajv from 'ajv';

let ajv;

export function createValidate (schema) {
  if (!ajv) {
    ajv = new Ajv({
      allErrors: true,
      verbose: false,
      removeAdditional: true,
      useDefaults: 'empty'
    });
  }

  const vanillaValidate = ajv.compile(schema);

  const validate = schema => {
    const success = vanillaValidate(schema);
    return {
      success,
      errors: [...vanillaValidate.errors]
    };
  };

  return validate;
}
