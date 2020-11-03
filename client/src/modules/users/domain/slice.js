import { createSlice } from '@reduxjs/toolkit';
import { LOCALES } from '__com/i18n/locales';

export const AUTH_STATUSES = {
  SIGNEDOUT: 'AUTH_STATUSES.SIGNEDOUT',
  SIGNEDIN: 'AUTH_STATUSES.SIGNEDIN'
};

const initialState = {
  status: AUTH_STATUSES.SIGNEDOUT,
  currentUser: null,
  preferences: {
    locale: LOCALES.EN.value
  }
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sign (state, { payload }) {
      state.status = AUTH_STATUSES.SIGNEDIN;
      state.currentUser = payload;
    },
    signOut () {
      return { ...initialState };
    },
    updatePreferences (state, { payload }) {
      state.preferences.locale = payload.locale;
    }
  }
});

export const reducer = slice.reducer;
export const {
  sign,
  signOut,
  updatePreferences
} = slice.actions;
