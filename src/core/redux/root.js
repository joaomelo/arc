import { combineReducers } from 'redux';
import { reducer as usersReducer } from '__cli/modules/users/domain/slice';

export const rootReducer = combineReducers({
  users: usersReducer
});
