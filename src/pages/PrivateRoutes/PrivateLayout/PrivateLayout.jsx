import style from './PrivateLayout.module.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import PrivateHeader from '../PrivateHeader/PrivateHeader.jsx'
import Footer from '../../../Components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import { fetch_UserInfos } from '../../../Services/login.service.js'
import {  get } from '../../../Services/context.reducer.js'
import { Navigate } from 'react-router-dom'


export default function PrivateLayout() {
  
    const token = get('token')
    useEffect(() => {
    console.log('entrée dans useeffect')
    
    const infos = async () => {
      return await fetch_UserInfos().catch((err) => {
        console.log('erreur dans infos', err)
      })
    }
    infos()
    console.log('sortie de infos')}, [])

  if (!token) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
      <div className={style.layout}>
      <PrivateHeader  />
      <Outlet />
      <Footer />
    </div>
  )
}
