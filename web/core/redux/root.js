import { combineReducers } from 'redux';
import { reducer as usersReducer } from '@/modules/users/domain/slice';

export const rootReducer = combineReducers({
  users: usersReducer
});
