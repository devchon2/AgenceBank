import style from './PrivateLayout.module.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import PrivateHeader from '../PrivateHeader/PrivateHeader.jsx'
import Footer from '../../../Components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import { fetch_UserInfos } from '../../../Services/login.service.js'
import {  getState, getToken } from '../../../Services/context.reducer.js'


export default function PrivateLayout() {  
   

    
    
  // if (!token) {
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   )
  // }
  
  return (
      <div className={style.layout}>
      <PrivateHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

