import style from './PrivateLayout.module.css'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import PrivateHeader from '../PrivateHeader/PrivateHeader.jsx'
import Footer from '../../../Components/Footer/Footer.jsx'
import { getToken } from '../../../Services/context.reducer.js'


export default function PrivateLayout() {  
   
  const token = getToken()
  
    
  if (!token) {
    return (
     <Navigate to='/login'/>
    )
  }
  
  return (
      <div className={style.layout}>
      <PrivateHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

