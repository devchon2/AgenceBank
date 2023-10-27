import style from './PrivateHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import firstNameReducer from '../../../Redux/firstName/firstNameSlice.js';
import { removeLastName } from '../../../Redux/lastName/lastNameTypes.js';
import  { removeFirstName, getFirstName}  from '../../../Redux/firstName/firstNameTypes.js';
import { removeToken } from '../../../Redux/token/tokenTypes.js';
import { removeId } from '../../../Redux/id/idTypes.js';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../Redux/store.js';



export default function PrivateHeader() {
    const dispatch = useDispatch()
    
    const firstName = useSelector(state => state.firstName.firstName)
const [fstName, setFstName] = useState(firstName)

  useEffect(() => {          
    

    setFstName(firstName)
  }, [firstName])


  const navigate = useNavigate();
  const HandleLogout = () => {
    dispatch(removeToken())
    dispatch(removeFirstName())
    dispatch(removeLastName())
    dispatch(removeId())

    navigate('/login');
  }

  console.log('return de privateHeader')
  return (
    <header className={style.header}>
      <Link to="/" className={style.header_Logo_Link}>
      <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
      </Link>

      <nav className={style.header_Nav}>
      <Link to="/user" className={style.header_Link}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle}/>
      {fstName}
      </Link>
      <Link to="/login" className={style.header_Link} onClick={HandleLogout}>
      <FontAwesomeIcon className={style.header_Login_Icon} icon={faSignOut}/>
        Sign Out
      </Link>
      </nav>
      
    </header>
  )
}
