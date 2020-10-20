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
    fetchStarted (state) {
      state.isLoading = true;
      state.error = '';
    },
    fetchFailed (state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchSuccess (state, action) {
      state.isLoading = false;
      state.error = '';
    },
    signOut () {
      return { ...initialState };
    },
    signSuccess (state, action) {
      state.status = AUTH_STATUSES.SIGNEDIN;
      state.currentUser = extractUserData(action.payload);
    }
  }
});

export const reducer = slice.reducer;
export const {
  fetchStarted,
  fetchFailed,
  fetchSuccess,
  signOut,
  signSuccess
} = slice.actions;
