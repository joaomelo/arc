import { combineReducers } from 'redux';
import { slice as authSlice } from '__cli/modules/auth/domain/slice';

export const rootReducer = combineReducers({
  auth: authSlice.reducer
});
