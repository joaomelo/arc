import { combineReducers } from 'redux';
import { reducer as authReducer } from '__cli/modules/auth/domain/slice';
import { reducer as preferencesReducer } from '__cli/modules/preferences/domain/slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  preferences: preferencesReducer
});
