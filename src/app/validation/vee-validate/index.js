import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import ptBR from 'vee-validate/dist/locale/pt_BR.json';

function installRules () {
  extend('required', required);
  extend('email', email);
  extend('min', min);
}

export function initVeeValidate () {
  installRules();
  return {
    validationComponents: {
      ValidationProvider,
      ValidationObserver
    },
    validationMessages: {
      en: en.messages,
      ptBR: ptBR.messages
    }
  };
}
