import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UserReducer/UserSlice.js';
import tokenReducer from './token/tokenSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user:userReducer,
  token: tokenReducer,
});

const store = configureStore({
  
    reducer: rootReducer,
  
});

export default store;