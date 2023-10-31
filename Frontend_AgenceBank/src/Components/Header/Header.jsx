import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { removeLastName } from '../../Redux/UserReducer/lastName/lastNameTypes.js'
import  { removeFirstName }  from '../../Redux/UserReducer/firstName/firstNameTypes.js';
import { removeToken } from '../../Redux/token/tokenTypes.js';
import { removeId } from '../../Redux/UserReducer/id/idTypes.js';
import { useDispatch, useSelector } from 'react-redux';


export default function Header() {
  
  const isConnected = useSelector(state => state.token)
  const[isLogged , setIsLogged] = useState(isConnected)
  
  const firstName = useSelector(state => state.user.firstName)
  const [fstName, setFstName] = useState(firstName)

  
    

  useEffect(() => {          
    
    setIsLogged(isConnected)
    setFstName(firstName)
  }, [firstName, isConnected])


  const navigate = useNavigate();
  const HandleLogout = () => {    
    const dispatch = useDispatch();
    dispatch(removeToken())
    dispatch(removeFirstName())
    dispatch(removeLastName())
    dispatch(removeId())
    navigate('/login');
  }

if (isLogged) {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header_Logo_Link}>
      <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
      </Link>

      <nav className={style.header_Nav}>
      <Link to="/profile" className={style.header_Link}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle}/>
      <p className={style.header_FirstName}>      {fstName}
</p>
      </Link>
      <Link to="/login" className={style.header_Link} onClick={HandleLogout}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faSignOut}/>
        Sign Out
      </Link>
      </nav>
    </header>
  )
  } else {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header_Logo_Link}>
      <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
      <h1 className={style.sr_only}>Accounts</h1>
      </Link>

      <Link to="/login" className={style.header_Link}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle}/>
      Sign in
      </Link>
      
    </header>
  )
}
}
