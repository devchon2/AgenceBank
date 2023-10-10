
import style from './HomePage.module.css';
import Header from '../../Components/Header/Header.jsx';
import Main from './MainHomePage/MainHomePage.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
export default function Home() {
    return (
        <div className={style.homePage}>
        <Header />
        <Main />
        <Footer />
        </div>
    )
}