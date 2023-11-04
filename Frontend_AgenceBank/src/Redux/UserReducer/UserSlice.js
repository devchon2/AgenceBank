import { createSlice } from "@reduxjs/toolkit";



const userSlice =  createSlice({
    name: "user",
    initialState: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        id: null,
    },
    reducers: {
        set_FirstName : (state, action) => {
        state.firstName = action.payload;
        },
        set_LastName : (state, action) => {
        state.lastName = action.payload;
        },
        set_User : (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.id = action.payload.id;
        },
        remove_User : (state,action) => {
        state.firstName = null;
        state.lastName = null;
        state.email = null;
        state.password = null;
        state.id = null;
        }
    }
    });
export default userSlice.reducer;
export const { set_FirstName, set_LastName, set_User, remove_User  } = userSlice.actions;