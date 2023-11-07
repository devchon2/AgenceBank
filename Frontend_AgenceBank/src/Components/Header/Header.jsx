import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove_User } from '../../Redux/UserReducer/UserSlice.js';
import { remove_Auth } from '../../Redux/AuthReducer/AuthSlice.js';



export default function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.login.authenticated)

  
  const firstName = useSelector((state) => state.user.firstName)
  const [fstName, setFstName] = useState(firstName)
  
  
  const [head, setHead] = useState({
    status:'notAuthenticated',
    signinBtn: {
      icon: faUserCircle,
      text: 'Sign In',
    },
    profilBtn: {
      profileButtonClass: style.hidden,
      icon: faUserCircle,
      IconClass: style.hidden,
    },
  })

  useEffect(() => {
    if (isAuth) {
      setHead({
        status:'authenticated',
        signinBtn: {
          icon: faSignOut,
          text: 'Sign Out',
        },
        profilBtn: {
          profileButtonClass: style.header_Link,
          icon: faUserCircle,
          iconClass: style.visible,
    }})
    setFstName(firstName)
   } else {
      setHead({
        status:'notAuthenticated',
        signinBtn: {
          icon: faUserCircle,
          text: 'Sign In',
        },
        profilBtn: {
          profileButtonClass: style.hidden,
          icon: faUserCircle,
          iconClass: style.hidden,
        }
      })
    
  }  
    
    
    
  }, [firstName, isAuth])
  
  const HandleLogout = () => { // Gestion de la suppression de la conneixon
    dispatch(remove_User())
    dispatch(remove_Auth())    
    localStorage.clear()

    navigate('/login');
  }

  return (
    <header className={style.header}>
      <Link to="/" className={style.header_Logo_Link}>
        <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
      </Link>

      <nav className={style.header_Nav}>
        <Link to="/profile" className={head.profilBtn.profileButtonClass}>
          <FontAwesomeIcon className={head.profilBtn.iconClass} icon={head.profilBtn.icon} />
          <p className={style.header_FirstName}>      {fstName}
          </p>
        </Link>
        <Link to="/login" className={style.header_Link} onClick={HandleLogout}>
          <FontAwesomeIcon className={style.visible} icon={head.signinBtn.icon} />
          {head.signinBtn.text}
        </Link>
      </nav>
    </header>
  )
}
