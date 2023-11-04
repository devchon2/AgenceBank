
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'


import { useSelector } from 'react-redux'


export default function PrivateRoutes() {  
  const tok = useSelector(state => state.login.token)
  const [token, setToken] = useState(tok)

  useEffect(() => {
    setToken(tok)
  }
    , [tok])



  if (!token) {
    return (
     <Navigate to='/login'/>
    )
  }
  return (
    <Outlet />
     
  )
}