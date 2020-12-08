import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

function installRules () {
  extend('required', required);
  extend('email', email);
  extend('min', min);
}

export function initVeeValidate () {
  installRules();
  return { ValidationProvider, ValidationObserver };
}
