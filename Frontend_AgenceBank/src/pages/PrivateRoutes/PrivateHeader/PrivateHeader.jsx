import style from './PrivateHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getFtName, removeState, removeToken,removeFtName, removeLtName, getState } from '../../../Services/context.reducer.js'



export default function PrivateHeader() {
  const [firstName, setFirstName] = useState(getState().firstName)
  const state = getState()

  const navigate = useNavigate();
  const HandleLogout = () => {
    removeToken();
    removeFtName();
    removeLtName();
    removeState();
    navigate('/login');
  }

  useEffect(() => {  
    
    const name = getFtName()

    setFirstName(name)

  }, [state])

  

  return (
    <header className={style.header}>
      <Link to="/" className={style.header_Logo_Link}>
      <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
      </Link>

      <nav className={style.header_Nav}>
      <Link to="/user" className={style.header_Link}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle}/>
      {firstName}
      </Link>
      <Link to="/login" className={style.header_Link} onClick={HandleLogout}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faSignOut}/>
        Sign Out
      </Link>
      </nav>
      
    </header>
  )
}