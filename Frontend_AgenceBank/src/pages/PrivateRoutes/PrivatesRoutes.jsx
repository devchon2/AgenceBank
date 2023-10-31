
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


import { useSelector } from 'react-redux'


export default function PrivateRoutes() {  
  const token = useSelector(state => state.token)
    
  if (!token) {
    return (
     <Navigate to='/login'/>
    )
  }
  return (
    <Outlet />
     
  )
}