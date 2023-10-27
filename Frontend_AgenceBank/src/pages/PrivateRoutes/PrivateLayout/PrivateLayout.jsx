import style from './PrivateLayout.module.css'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import PrivateHeader from '../PrivateHeader/PrivateHeader.jsx'
import Footer from '../../../Components/Footer/Footer.jsx'

import { useSelector } from 'react-redux'


export default function PrivateLayout() {  
  const token = useSelector((state) => state.token.token)

  console.log('token dans private layout', token)
    
  if (!token) {
    return (
     <Navigate to='/login'/>
    )
  }
  console.log('sortie de privateLayout')
  return (
      <div className={style.layout}>
      <PrivateHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

