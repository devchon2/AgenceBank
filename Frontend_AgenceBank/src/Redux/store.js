import {configureStore} from '@reduxjs/toolkit';
import firstNameReducer from './firstName/firstNameSlice.js';
import lastNameReducer from './lastName/lastNameSlice';
import idReducer from './id/idSlice';
import tokenReducer from './token/tokenSlice';

const store = configureStore({
  
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    id: idReducer,
    token: tokenReducer,
  
});
console.log(store);

export default store;