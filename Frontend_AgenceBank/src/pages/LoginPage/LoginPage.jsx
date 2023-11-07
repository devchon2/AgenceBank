import style from "./LoginPage.module.css";
import { fetch_Token } from "../../Services/login.service.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetch_UserInfos } from "../../Services/login.service.js";
import { set_Login } from "../../Redux/AuthReducer/AuthSlice.js";
import { set_User } from "../../Redux/UserReducer/UserSlice.js";

import { useDispatch } from "react-redux";



function Forgot({ show }) {
  //fonction qui affiche le message d'erreur si les identifiants sont invalides

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
 * Composant de la page de connexion.
 * @returns {JSX.Element} Élément JSX représentant la page de connexion.
 */

export default function LoginPage() {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleCheck = () => {    //Fonction qui permet de cocher la case "Remember me" si l'utilisateur a déjà coché cette case

    const check = document.getElementById("remember");
    if (check.checked) {
      setRemember(true);
    }
  };
  const handle_Form = async (e) => { // Fonction qui permet de gérer le formulaire de connexion
    e.preventDefault();

    const token = await fetch_Token(password, email);

    if (password === '' || email === '' || !token) { //Si les identifiants sont invalides, afficher le message d'erreur
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {//Si les identifiants sont valides, enregistrer L'authentification dans le store et dans le local storage
      
      dispatch(set_Login({token: token, keepLogging: remember, authenticated: true}));

      const infos = await fetch_UserInfos(token);
      const user = {
        "firstName": infos.firstName,
        "lastName": infos.lastName,
        "id": infos.id,
      };
      //Récupérer les infos de l'utilisateur et les intégrer au store //////////////////////////////
      dispatch(set_User(user));
      navigate("/profile");
    }
    return;
  };



  return (
    <main className={style.bg_dark}>
      <div className={style.signIn_Container}>
        <FontAwesomeIcon
          className={style.title_Login_Icon}
          icon={faUserCircle}
        />
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
              onClick={handleCheck}
            />
            <label className={style.label_Check_} htmlFor="remember">
              Remember me
            </label>
          </div>

          <div className={style.button_container}>
            <button
              className={style.button}
              type="button"
              onClick={handle_Form}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
