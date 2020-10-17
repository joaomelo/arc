import { AUTH_STATUSES } from './slice';

export const selectIsSignedIn = state => state.auth.status === AUTH_STATUSES.SIGNEDIN;
