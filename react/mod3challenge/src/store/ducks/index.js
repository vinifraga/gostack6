import { combineReducers } from 'redux';

import users from './users';
import modals from './modals';

export default combineReducers({
  users,
  modals,
});
