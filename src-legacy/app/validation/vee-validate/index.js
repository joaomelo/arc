import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, email, min, confirmed } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import ptBR from 'vee-validate/dist/locale/pt_BR.json';

function installRules () {
  extend('required', required);
  extend('email', email);
  extend('min', min);
  extend('confirmed', confirmed);
}
function initLocalization (i18n) {
  localize({
    en,
    'pt-BR': ptBR
  });

  i18n.onLocaleUpdate(locale => localize(i18n.currentLocale));
}

export function initVeeValidate (i18nService) {
  installRules();
  initLocalization(i18nService);

  return {
    validationComponents: {
      ValidationProvider,
      ValidationObserver
    }
  };
}
