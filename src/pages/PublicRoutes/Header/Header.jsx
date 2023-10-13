import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/argentBankLogo.png';

import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header_Logo_Link}>
      <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
      </Link>

      <Link to="/login" className={style.header_Link}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle}/>
      Sign in
      </Link>
      
    </header>
  )
}
