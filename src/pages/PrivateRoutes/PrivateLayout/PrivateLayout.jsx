import style from './PrivateLayout.module.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../PrivateHeader/PrivateHeader.jsx'
import Footer from '../../../Components/Footer/Footer.jsx'


export default function PublicLayout() {
  return (
      <div className={style.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
