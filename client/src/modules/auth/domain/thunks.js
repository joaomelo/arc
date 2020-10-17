import { apiSignIn, apiSignUp } from './api';
import { signStarted, signSuccess, signFailed } from './slice';

export const signIn = payload => async dispatch => {
  dispatch(signStarted());
  try {
    const userData = await apiSignIn(payload);
    dispatch(signSuccess(userData));
  } catch (error) {
    dispatch(signFailed(error.message));
  }
};

export const signUp = payload => async dispatch => {
  dispatch(signStarted());
  try {
    const userData = await apiSignUp(payload);
    dispatch(signSuccess(userData));
  } catch (error) {
    dispatch(signFailed(error.message));
  }
};
