import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.css';
import Logo from '../../assets/argentBankLogo.png';
import { removeFirstName } from '../../Redux/UserReducer/firstName/firstNameTypes.js';
import { removeLastName } from '../../Redux/UserReducer/lastName/lastNameTypes.js';
import { removeId } from '../../Redux/UserReducer/id/idTypes.js';
import { removeToken } from '../../Redux/token/tokenTypes.js';

/**
 * Composant Header - Gère le header de l'application
 * @function
 * @returns {JSX.Element}
 */
export default function Header() {
  // Utilisation des hooks Redux pour gérer l'état global
  const isConnected = useSelector(state => state.token);
  const firstName = useSelector(state => state.user.firstName);
  
  // Utilisation des hooks d'état locaux pour gérer le rendu du composant
  const [isLogged, setIsLogged] = useState(isConnected);
  const [fstName, setFstName] = useState(firstName);

  // Utilisation de useNavigate pour gérer la navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Gère la déconnexion de l'utilisateur
   */
  const handleLogout = () => {
    dispatch(removeToken());
    dispatch(removeFirstName());
    dispatch(removeLastName());
    dispatch(removeId());
    navigate('/login');
  };

  // Utilisation de useEffect pour mettre à jour l'état local en fonction de l'état global
  useEffect(() => {
    setIsLogged(isConnected);
    setFstName(firstName);
  }, [firstName, isConnected]);

  // Rendu conditionnel du composant en fonction de l'état de connexion
  if (isLogged) {
    return (
      <header className={style.header}>
        <Link to="/" className={style.header_Logo_Link}>
          <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
        </Link>
        <nav className={style.header_Nav}>
          <Link to="/profile" className={style.header_Link}>
            <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle} />
            <p className={style.header_FirstName}>{fstName}</p>
          </Link>
          <Link to="/login" className={style.header_Link} onClick={handleLogout}>
            <FontAwesomeIcon className={style.header_Login_Icon} icon={faSignOut} />
            Sign Out
          </Link>
        </nav>
      </header>
    );
  } 
    return (
      <header className={style.header}>
        <Link to="/" className={style.header_Logo_Link}>
          <img src={Logo} alt="Argent Bank Logo" className={style.header_Logo} />
        </Link>
        <Link to="/login" className={style.header_Link}>
          <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle} />
          Sign in
        </Link>
      </header>
    );
  }
