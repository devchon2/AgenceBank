
import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import store from '../../Redux/store.js'


export default function PrivateRoutes() {  
  const tokenInState =  store.getState().token 



  

  console.log('tokenInState', !!tokenInState)

  if (!!tokenInState === true) {
    console.log('retour privateRoutes ok', tokenInState)
  return (
    <Outlet />
      
    

  )}

  console.log('retour privateRoutes ko', tokenInState)
  return <Navigate to="/login" />
}