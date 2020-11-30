import { registerComponents } from './components';
import { installRules } from './rules';

export function initValidation () {
  registerComponents();
  installRules();
}
