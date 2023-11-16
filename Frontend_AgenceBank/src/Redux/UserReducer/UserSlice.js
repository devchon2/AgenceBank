import { createSlice } from "@reduxjs/toolkit";

// Create a user slice with initial state
const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: null, // Stores the user's first name
    lastName: null,  // Stores the user's last name
    id: null,        // Stores the user's ID (not used in this code)
  },
  reducers: {
    // Action to set the user's first name
    set_FirstName: (state, action) => {
      state.firstName = action.payload;

      // Update the first name in local storage
      const user = JSON.parse(localStorage.getItem('user'));
      user.firstName = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
    },
    // Action to set the user's last name
    set_LastName: (state, action) => {
      state.lastName = action.payload;

      // Update the last name in local storage
      const user = JSON.parse(localStorage.getItem('user'));
      user.lastName = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
    },
    // Action to set user data (first name, last name, and ID)
    set_User: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;

      // Update user data in local storage
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    // Action to remove user data from state and local storage
    remove_User: (state) => {
      localStorage.removeItem('user');
      state.firstName = null; 
      state.lastName =  null;
      state.id = null;
    },
  },
});

// Export the reducer and actions
export default userSlice.reducer;
export const { set_FirstName, set_LastName, set_User, remove_User } = userSlice.actions;
