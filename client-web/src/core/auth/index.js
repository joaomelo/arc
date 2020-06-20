// kickstarting module
import { igniteAuth } from './domain';
igniteAuth();

// export public asssets
export { getAuthStatus, getCurrentUser } from './domain';
export { AUTH_EVENTS } from './common';
export { LinkLogout, PageLogin } from './ui';
