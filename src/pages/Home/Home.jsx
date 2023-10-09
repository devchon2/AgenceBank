
import style from './Home.module.css';
import Header from '../../Components/Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
export default function Home() {
    return (
        <div className={style.home}>
        <Header />
        <Main />
        <Footer />
        </div>
    )
}