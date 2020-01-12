import { igniteAuth } from './domain';

// ignites firebaseauth and bind auth status callback to authstatus changes
igniteAuth();

// export public assets
export { getAuthStatus } from './domain';
export { AUTH_EVENTS, AUTH_STATUSES } from './common';
export { LinkLogout, PageLogin } from './ui';
