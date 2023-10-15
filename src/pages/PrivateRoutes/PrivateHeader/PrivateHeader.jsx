import style from './PrivateHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/argentBankLogo.png';

import { Link } from 'react-router-dom';

const HandleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('isAuth');
}

export default function Header({name}) {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header_Logo_Link}>
      <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
      </Link>

      <nav className={style.header_Nav}>
      <Link to="/user" className={style.header_Link}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle}/>
      Tony
      </Link>
      <Link to="/login" className={style.header_Link} onClick={HandleLogout}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faSignOut}/>
        Sign Out
      </Link>
      </nav>
      
    </header>
  )
}
