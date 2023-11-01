import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import style from './LoginPage.module.css';
import { fetch_Token, fetch_UserInfos } from '../../Services/login.service.js';
import {setFirstName}  from '../../Redux/UserReducer/firstName/firstNameTypes.js';
import  {setLastName}  from '../../Redux/UserReducer/lastName/lastNameTypes.js';
import  {setId}  from '../../Redux/UserReducer/id/idTypes.js';
import  {setToken}  from '../../Redux/token/tokenTypes.js';

/**
 * Composant pour afficher un message d'erreur pour les identifiants invalides
 * @param {boolean} show - Afficher ou masquer le message d'erreur
 * @returns {JSX.Element|null}
 */
function Forgot({ show }) {
  if (show) {
    return (
      <div className={style.forgot}>
        <p>Your credentials are invalids!</p>
      </div>
    );
  }
  return null;
}

/**
 * Composant LoginPage - Gère la page de connexion de l'application
 * @returns {JSX.Element}
 */
export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Gère la soumission du formulaire de connexion
   * @param {Event} e - L'événement de soumission du formulaire
   */
  const handle_Form = async (e) => {
    e.preventDefault();

    // Récupération du token
    const token = await fetch_Token(password, email);
    dispatch(setToken(token));

    // Vérification des identifiants
    if (!password || !email || !token) {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    } else {
      // Récupération des informations de l'utilisateur
      const infos = await fetch_UserInfos(token);
      dispatch(setFirstName(infos.firstName));
      dispatch(setLastName(infos.lastName));
      dispatch(setId(infos.id));

      // Redirection vers la page de profil
      navigate('/profile');
    }
  };

  return (
    <main className={style.bg_dark}>
      <div className={style.signIn_Container}>
        <FontAwesomeIcon className={style.title_Login_Icon} icon={faUserCircle} />
        <h1 className={style.title}>Sign In</h1>
        <form>
          <div className={style.input_Container}>
            <label className={style.label} htmlFor="userMail">
              Username
            </label>

            <input
              className={`${style.input} `}
              type="text"
              id="userMail"
              name="username"
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={style.input_Container}>
            <label className={style.label} htmlFor="userPassword">
              Password
            </label>

            <input
              className={`${style.input} `}
              type="password"
              autoComplete="off"
              id="userPassword"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Forgot show={show} />
          </div>
          <div className={style.input_Check_Container}>
            <input
              className={style.input_Check}
              type="checkbox"
              id="remember"
              name="Remember me"
            />
            <label className={style.label_Check_} htmlFor="remember">
              Remember me
            </label>
          </div>
        </form>

          <div className={style.button_container}>
            <button
              className={style.button}
              type="button"
              onClick={handle_Form}
            >
              Sign in
            </button>
          </div>
      </div>
    </main>
  );
}
