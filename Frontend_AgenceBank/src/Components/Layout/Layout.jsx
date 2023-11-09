import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import style from "./Layout.module.css"
import { Outlet } from "react-router-dom"
  import { set_Login } from '../../Redux/AuthReducer/AuthSlice.js';
  import { set_User } from '../../Redux/UserReducer/UserSlice.js';

export default function Layout() {



return (
  <div className={style.layout}>
  <Header />
  <Outlet />
  <Footer />
</div>
)
}
