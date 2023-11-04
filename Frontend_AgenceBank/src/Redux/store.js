import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UserReducer/UserSlice.js';
import authReducer from './AuthReducer/AuthSlice.js';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistUser = {
  key : "user",
  storage,
}

const persistAuth = {
  key : "login",
  storage,
}




const persistedUserReducer = persistReducer(persistUser, userReducer,)
const persistedAuthReducer = persistReducer(persistAuth, authReducer)


const store = configureStore({
    
    reducer: {
     user:persistedUserReducer,
     login:persistedAuthReducer,
    },  
    devTools : process . env . NODE_ENV !== 'production' , middleware : [ thunk ] 
});

export default store;
export const persistor = persistStore(store)
