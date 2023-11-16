import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { set_Token } from '../../Redux/AuthReducer/AuthSlice.js';

export default function PrivateRoutes() {
  // Get the authentication token from Redux state
  const token = useSelector((state) => state.login.token);

  // State to track whether the user is logged in
  const [isLogged, setIsLogged] = useState(token);

  useEffect(() => {
    // Update the 'isLogged' state when the 'token' changes
    setIsLogged(token);

    // If the user is logged in (token exists), set the token in the application
    if (isLogged) {
      set_Token(token);
    }
  }, [token, isLogged]); // This effect depends on 'token' and 'isLogged'

  // If the user is not logged in (no token), navigate them to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in (token exists), render the child routes
  return <Outlet />;
}
