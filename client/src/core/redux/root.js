import { combineReducers } from 'redux';
import { reducer as authReducer } from '__cli/modules/auth/domain/slice';

export const rootReducer = combineReducers({
  auth: authReducer
});
