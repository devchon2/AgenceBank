import {configureStore} from '@reduxjs/toolkit';
import firstNameReducer from './firstName/firstNameSlice.js';
import lastNameReducer from './lastName/lastNameSlice';
import idReducer from './id/idSlice';
import tokenReducer from './token/tokenSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  firstName: firstNameReducer,
  lastName: lastNameReducer,
  id: idReducer,
  token: tokenReducer,
});

const store = configureStore({
  
    reducer: rootReducer,
  
});

export default store;