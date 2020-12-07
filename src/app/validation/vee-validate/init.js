import { registerComponents } from './components';
import { installRules } from './rules';

export function initVeeValidate () {
  registerComponents();
  installRules();
}
