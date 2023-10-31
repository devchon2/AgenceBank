import firstNameReducer from "./firstName/firstNameSlice";
import lastNameReducer from "./lastName/lastNameSlice";
import idReducer from "./id/idSlice";

import { combineReducers } from "@reduxjs/toolkit";

const userReducer = combineReducers({
  firstName: firstNameReducer,
  lastName: lastNameReducer,
  id: idReducer,
});

export default userReducer;