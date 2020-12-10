import { initFireauth } from './service';
import { initFireauthAdapter } from './adapter';

export function initAdaptedFireauth (options) {
  const fireauth = initFireauth(options);
  const fireauthAdapter = initFireauthAdapter(fireauth);
  return fireauthAdapter;
}
