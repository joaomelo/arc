import { fetchStarted, fetchFailed, fetchSuccess, signSuccess } from './slice';
import { post } from '__cli/core/api';

const createAuthThunk = route => payload => async dispatch => {
  dispatch(fetchStarted());
  try {
    const data = await post(route, payload);
    dispatch(fetchSuccess());
    dispatch(signSuccess(data));
  } catch (error) {
    dispatch(fetchFailed(error.message));
  }
};

export const signIn = createAuthThunk('/auth/sign-in');
export const signUp = createAuthThunk('/auth/sign-up');
export const updateEmail = createAuthThunk('auth/update-email');
export const updatePassword = createAuthThunk('auth/update-password');
