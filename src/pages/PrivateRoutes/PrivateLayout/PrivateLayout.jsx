import style from './PrivateLayout.module.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import PrivateHeader from '../PrivateHeader/PrivateHeader.jsx'
import Footer from '../../../Components/Footer/Footer.jsx'
import { useEffect } from 'react'
import { fetch_UserInfos } from '../../../Services/login.service.js'
import {  getToken } from '../../../Services/context.reducer.js'


export default function PrivateLayout() {  

    const token = getToken()
    
    useEffect(() => {
    console.log('entrée dans useeffect')
    
    const get_infos = async () => {
      return await fetch_UserInfos(token).catch((err) => {
        console.log('erreur dans infos', err)
      })
    }
    get_infos()
    console.log('sortie de useeffect',)
    }, [token])

    
    
  if (!token) {
    return (
      <div>
        Loading...
      </div>
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
