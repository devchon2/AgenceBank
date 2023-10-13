import style from './PublicLayout.module.css'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header.jsx'
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
