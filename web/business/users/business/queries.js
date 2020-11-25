import { useSelector } from 'react-redux';
import { store } from '@/shared/redux';
import { AUTH_STATUSES } from './slice';

const selectToken = state => state.users.currentUser ? state.users.currentUser.token : null;
export const queryToken = () => selectToken(store.getState());

const selectIsSignedIn = state => state.users.status === AUTH_STATUSES.SIGNED_IN;
export const useIsSignedIn = () => useSelector(selectIsSignedIn);

const selectCurrentUserEmail = state => state.users.currentUser ? state.users.currentUser.email : null;
export const useCurrentUserEmail = () => useSelector(selectCurrentUserEmail);

const selectPreferences = state => state.users.preferences;
export const usePreferences = () => useSelector(selectPreferences);
