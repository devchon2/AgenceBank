import Header from "../Header/Header.jsx"; 
import Footer from "../Footer/Footer.jsx"; 
import style from "./Layout.module.css"; 
import { Outlet } from "react-router-dom"; 

/**
 * Composant Layout qui représente la mise en page générale de l'application.
 * Il inclut un en-tête, un contenu variable (Outlet), et un pied de page.
 * @component
 */
export default function Layout() {
  return (
    <div className={style.layout}> {/* Utilise la classe de style "layout" pour le conteneur principal */}
      <Header /> 
      <Outlet /> 
      <Footer /> 
    </div>
  );
}