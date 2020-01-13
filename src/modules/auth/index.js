// kickstarting module
import { igniteAuth } from './domain';
igniteAuth();

// export public asssets
export { getAuthStatus } from './domain';
export { AUTH_EVENTS, AUTH_STATUSES } from './common';
export { LinkLogout, PageLogin } from './ui';
