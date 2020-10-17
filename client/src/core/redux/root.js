import { combineReducers } from 'redux';
import { reducer as authReducer } from '__cli/modules/auth';

export const rootReducer = combineReducers({
  auth: authReducer
});
