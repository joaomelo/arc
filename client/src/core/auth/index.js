import { startListeningToAuthService } from './domain';

// initialization
startListeningToAuthService();

export {
  AUTH_STATUSES,
  authState,
  authStateChanged,
  signOut
} from './domain';

export {
  ButtonLogout,
  PageAuth,
  PageAccount,
  PageUnverified
} from './ui';
