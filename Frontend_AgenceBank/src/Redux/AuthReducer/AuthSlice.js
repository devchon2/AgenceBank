import { createSlice } from "@reduxjs/toolkit";

// Create an authentication slice with initial state
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false, // Represents whether the user is authenticated
    token: null, // Stores the user's authentication token
    keepLogging: false, // Indicates if the user wants to keep logged in
  },
  reducers: {
    // Action to set the user's authentication token
    set_Token: (state, action) => {
      state.token = action.payload;

      // Update the authentication token in local storage
      const { login } = localStorage.getItem("login");
      login.token = action.payload;
      localStorage.setItem("login", JSON.stringify(login));
    },
    // Action to set the authenticated state to true
    set_IsAuth: (state, action) => {
      state.authenticated = true;

      // Update the authenticated state in local storage
      const { login } = localStorage.getItem("login");
      login.authenticated = true;
      localStorage.setItem("login", JSON.stringify(login));
    },
    // Action to set the keepLogging state
    set_KeepLogging: (state, action) => {
      state.keepLogging = action.payload;

      // Update the keepLogging state in local storage
      const { login } = localStorage.getItem("login");
      login.keepLogging = action.payload;
    },
    // Action to set login state with token and keepLogging
    set_Login: (state, action) => {
      state.authenticated = true;
      state.keepLogging = action.payload.keepLogging;
      state.token = action.payload.token;

      // Update the login state in local storage
      localStorage.setItem("login", JSON.stringify({
        keepLogging: action.payload.keepLogging,
        token: action.payload.token,
        authenticated: action.payload.authenticated,
      }));
    },
    // Action to remove authentication data
    remove_Auth: (state, action) => {
      state.authenticated = false;
      state.keepLogging = false;
      state.token = null;

      // Update the local storage to clear authentication data
      localStorage.setItem("login", JSON.stringify({
        keepLogging: false,
        token: null,
        authenticated: false,
      }));
    },
  },
});

// Export the reducer and actions
export default authSlice.reducer;
export const { set_Token, set_IsAuth, set_KeepLogging, remove_Auth, set_Login } = authSlice.actions;
