import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    Authenticated: false,
    token: null,
    KeepLogging: false,
  },
  reducers: {
  set_Token : (state, action)=> {
    state.token = action.payload;
  },
  set_IsAuth : (state, action) => {
    state.Authenticated = action.payload;
  },
  set_KeepLogging : (state, action) => {
    state.KeepLogging = action.payload;
  },
  }
});



export default authSlice.reducer;
export const { set_Token, set_IsAuth, set_KeepLogging } = authSlice.actions; 