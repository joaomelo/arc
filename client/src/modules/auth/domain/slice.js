import { createSlice } from '@reduxjs/toolkit';
import { extractUserData } from './user-data';

export const AUTH_STATUSES = {
  SIGNEDOUT: 'AUTH_STATUSES.SIGNEDOUT',
  SIGNEDIN: 'AUTH_STATUSES.SIGNEDIN'
};

const initialState = {
  status: AUTH_STATUSES.SIGNEDOUT,
  currentUser: null,
  isLoading: false,
  error: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sign (state, action) {
      state.status = AUTH_STATUSES.SIGNEDIN;
      state.currentUser = extractUserData(action.payload);
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
