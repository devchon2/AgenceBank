import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    token:  null,
    keepLogging: false,
  },
  reducers: {
  set_Token : (state, action)=> {
    state.token = action.payload;
    const { login } = localStorage.getItem("login");
    login.token = action.payload;
    localStorage.setItem("login", JSON.stringify(login));

  },
  set_IsAuth : (state, action) => {
    state.authenticated = true;
    const { login } = localStorage.getItem("login");
    login.authenticated = true;
    localStorage.setItem("login", JSON.stringify(login));
  },
  set_KeepLogging : (state, action) => {
    state.keepLogging = action.payload;
    const { login } = localStorage.getItem("login");
    login.keepLogging = action.payload;
  },
  set_Login : (state, action) => {
    state.authenticated = true;
    state.keepLogging = action.payload.keepLogging;
    state.token = action.payload.token;
    localStorage.setItem('login',JSON.stringify({keepLogging:action.payload.keepLogging,token:action.payload.token,authenticated:action.payload.authenticated}))
  },
  remove_Auth : (state,action) => {
    
    state.authenticated = false;
    state.keepLogging = false;
    state.token = null;
    localStorage.setItem('login',JSON.stringify({keepLogging:false,token:null,authenticated:false}))
  
  }
  }
});



export default authSlice.reducer;
export const { set_Token, set_IsAuth, set_KeepLogging, remove_Auth, set_Login } = authSlice.actions; 