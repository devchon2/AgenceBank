import Footer from '../../Components/Footer/Footer.jsx';
import MainLoginPage from './MainLoginPage/MainLoginPage.jsx';
import Header from '../../Components/Header/Header.jsx';
import style  from './LoginPage.module.css';

export default function LoginPage() {
return( 
  <div className={style.loginPage}>
  <Header />
  <MainLoginPage />
  <Footer />
</div>
)


}