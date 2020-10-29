import { createSlice } from '@reduxjs/toolkit';
import { extractUserData } from './user-data';

export const AUTH_STATUSES = {
  SIGNEDOUT: 'AUTH_STATUSES.SIGNEDOUT',
  SIGNEDIN: 'AUTH_STATUSES.SIGNEDIN'
};

const initialState = {
  status: AUTH_STATUSES.SIGNEDOUT,
  currentUser: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sign (state, { payload }) {
      state.status = AUTH_STATUSES.SIGNEDIN;
      state.currentUser = extractUserData(payload);
    },
    signOut () {
      return { ...initialState };
    }
  }
});

export const reducer = slice.reducer;
export const {
  sign,
  signOut
} = slice.actions;
