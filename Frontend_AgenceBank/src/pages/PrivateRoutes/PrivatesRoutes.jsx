
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { set_Token } from '../../Redux/AuthReducer/AuthSlice.js'


export default function PrivateRoutes() {  
  const token = useSelector((state) => state.login.token)
  
  const [isLogged, setIsLogged] = useState(token)

  useEffect(() => {
    setIsLogged(token)
    if (isLogged) {
      set_Token(token)
    }
  }
  , [token, isLogged])


  if (!token) {
    return (
     <Navigate to='/login'/>
    )
  }
  return (
    <Outlet />
     
  )
}