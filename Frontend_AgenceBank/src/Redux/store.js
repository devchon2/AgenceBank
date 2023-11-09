import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice, { set_Login } from './AuthReducer/AuthSlice.js';
import userSlice, { set_User } from './UserReducer/UserSlice.js';

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  user: userSlice,   // User reducer
  login: authSlice, // Authentication reducer
});

// Configure the Redux store with the root reducer
const store = configureStore({
  reducer: rootReducer, // Set the root reducer for the store
});

// Check if login information is stored in local storage
if (localStorage.getItem("login")) {
  // Load login information from local storage and dispatch it to Redux store
  store.dispatch(set_Login(JSON.parse(localStorage.getItem("login"))));
  // Check if user information is stored in local storage
  if (localStorage.getItem("user")) {
    // Load user information from local storage and dispatch it to Redux store
    store.dispatch(set_User(JSON.parse(localStorage.getItem("user"))));
  }
}

// Export the configured Redux store
export default store;
