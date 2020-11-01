import { useSelector } from 'react-redux';
import { store } from '__cli/core/redux';
import { AUTH_STATUSES } from './slice';

const selectIsSignedIn = state => state.auth.status === AUTH_STATUSES.SIGNEDIN;
export const useIsSignedIn = () => useSelector(selectIsSignedIn);

const selectCurrentUserEmail = state => state.auth.currentUser ? state.auth.currentUser.email : null;
export const useCurrentUserEmail = () => useSelector(selectCurrentUserEmail);

const selectToken = state => state.auth.currentUser ? state.auth.currentUser.token : null;
export const queryToken = () => selectToken(store.getState());
