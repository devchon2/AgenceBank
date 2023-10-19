import style from './PrivateLayout.module.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import PrivateHeader from '../PrivateHeader/PrivateHeader.jsx'
import Footer from '../../../Components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import { fetch_UserInfos } from '../../../Services/login.service.js'
import { set, get } from '../../../Services/context.reducer.js'
import { Navigate } from 'react-router-dom'


export default function PrivateLayout() {
  const token = localStorage.getItem('token')
  const isAuth = localStorage.getItem('isAuth')
 const [firstName, setFirstName] = useState('firstName')
  const [lastName, setLastName] = useState('lastName')
  const [id, setId] = useState('id')

  useEffect(() => {
 
    if (token === null) {
      return <Navigate to="/login" />
    }

    const infos = async () => {
      await fetch_UserInfos().then((res) => res.data).then((data) => {
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setId(data.id)
        set('firstName', data.firstName)
        set('lastName', data.lastName)
        set('id', data.id)
      })
    infos()
    if (token) {
      console.log('infos', infos())
    }
      
    }
    infos()
  }
    
    , [token,firstName, lastName, id])


  if (!token) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
      <div className={style.layout}>
      <PrivateHeader firstName={''} />
      <Outlet />
      <Footer />
    </div>
  )
}
