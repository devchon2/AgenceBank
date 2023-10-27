import {configureStore} from '@reduxjs/toolkit';
import firstNameReducer from './firstName/firstNameSlice.js';
import lastNameReducer from './lastName/lastNameSlice';
import idReducer from './id/idSlice';
import tokenReducer from './token/tokenSlice';

export const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    id: idReducer,
    token: tokenReducer,
  },
});
console.log(store);
