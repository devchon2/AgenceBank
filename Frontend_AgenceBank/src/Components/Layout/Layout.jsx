import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import style from "./Layout.module.css"
import { Outlet } from "react-router-dom"



export default function Layout() {

return (
  <div className={style.layout}>
  <Header />
  <Outlet />
  <Footer />
</div>
)
}
