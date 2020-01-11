import { igniteAuth } from './domain';
import { igniteAuthStore } from './store';

// register local store to global store
igniteAuthStore();
// ignites firebaseauth and bind auth status callback to authstatus changes
igniteAuth();

// export public assets
export { AUTH_STATUS } from './common';
export { LinkLogout, PageLogin } from './ui';
