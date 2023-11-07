import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './UserReducer/UserSlice.js';
import AuthSlice, { set_Login } from './AuthReducer/AuthSlice.js';
import { set_User } from './UserReducer/UserSlice.js';


const rootReducer = combineReducers({
  user : userSlice,
  login : AuthSlice,
})



const store = configureStore({
    
    reducer: rootReducer,
    
});

if (localStorage.getItem("login")) {
  
    store.dispatch(set_Login(JSON.parse(localStorage.getItem("login"))))
    store.dispatch(set_User(JSON.parse(localStorage.getItem("user"))))
}

export default store;



