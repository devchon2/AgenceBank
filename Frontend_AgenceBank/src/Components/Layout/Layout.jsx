import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import style from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"



export default function Layout() {
  
  const tok = useSelector(state => state.token)
  const [token, setToken] = useState(tok)

  const state = useSelector(state => state)
  const [appState, setAppState] = useState(state)

  useEffect(() => {
    setAppState(state)
    setToken(tok)
  }, [tok, state])

  return (
    <div className={style.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
