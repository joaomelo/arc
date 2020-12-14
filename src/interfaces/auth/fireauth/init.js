import { initFireauth } from './service';
import { adaptFireauth } from './adapter';

export function initAdaptedFireauth (options) {
  const fireauth = initFireauth(options);
  const fireauthAdapter = adaptFireauth(fireauth);
  return fireauthAdapter;
}
