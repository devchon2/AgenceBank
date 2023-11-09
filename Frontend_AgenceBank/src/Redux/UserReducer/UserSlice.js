import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: null,
        lastName: null,
        id: null,
    },
    reducers: {
        set_FirstName: (state, action) => {
            state.firstName = action.payload;
            const user = JSON.parse(localStorage.getItem('user'));
            user.firstName = action.payload;
            localStorage.setItem('user', JSON.stringify(user));
            
        },
        set_LastName: (state, action) => {
            state.lastName = action.payload;
            const user = JSON.parse(localStorage.getItem('user'));
            user.lastName = action.payload;
            localStorage.setItem('user', JSON.stringify(user));
        },
        set_User: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.id = action.payload.id;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        remove_User: (state) => {
            localStorage.removeItem('user');
            state.firstName = null; 
            state.lastName =  null;
            state.id = null;
        },
    },
})
export default userSlice.reducer;
export const { set_FirstName, set_LastName, set_User, remove_User } = userSlice.actions;