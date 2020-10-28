import { createSlice } from '@reduxjs/toolkit';
import { LOCALES } from '__com/i18n/locales';

const initialState = {
  locale: LOCALES.EN.value
};

const slice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    updatePreferences (state, { payload }) {
      state.locale = payload.locale;
    }
  }
});

export const reducer = slice.reducer;
export const { updatePreferences } = slice.actions;
