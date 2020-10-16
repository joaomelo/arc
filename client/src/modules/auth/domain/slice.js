import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn } from './middleware';

export const AUTH_STATUSES = {
  SIGNEDOUT: 'AUTH_STATUSES.SIGNEDOUT',
  SIGNEDIN: 'AUTH_STATUSES.SIGNEDIN'
};

const initialState = {
  status: AUTH_STATUSES.SIGNEDOUT,
  token: null,
  id: null,
  email: null
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn (state, action) {
      const { email, password } = action.payload;
      const userData = signIn(email, password);
      return {
        status: AUTH_STATUSES.SIGNEDIN,
        ...userData
      };
    },
    signUp (state, action) {
      const { email, password } = action.payload;
      const userData = signUp(email, password);
      return {
        status: AUTH_STATUSES.SIGNEDIN,
        ...userData
      };
    },
    signOut (state, action) {
      return { ...initialState };
    }
  }
});
