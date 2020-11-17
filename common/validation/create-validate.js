import Ajv from 'ajv';
import { isProduction } from '__com/meta';

let ajv;

export function createValidate (schema) {
  if (!ajv) {
    ajv = new Ajv({
      allErrors: true,
      verbose: !isProduction(),
      removeAdditional: true,
      useDefaults: 'empty'
    });
  }

  const pureValidate = ajv.compile(schema);

  const validate = schema => {
    const success = pureValidate(schema);
    return {
      success,
      errors: pureValidate.errors
    };
  };

  return validate;
}
