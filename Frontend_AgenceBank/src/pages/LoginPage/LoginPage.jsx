import style from "./LoginPage.module.css";
import { fetch_Token } from "../../Services/login.service.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetch_UserInfos } from "../../Services/login.service.js";
import { setFirstName } from "../../Redux/firstName/firstNameTypes.js";
import { setLastName } from "../../Redux/lastName/lastNameTypes.js";
import { setToken } from "../../Redux/token/tokenTypes.js";
import { setId } from "../../Redux/id/idTypes.js";


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
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);


const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const handle_Form = async (e) => {
    e.preventDefault();

    let token = await fetch_Token(password, email);
    //Récupérer le token et l'intégrer au store 
    dispatch(setToken(token));

    if (password === '' || email === '' || token === false) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      
      const infos = await fetch_UserInfos(token);
      //Récupérer les infos de l'utilisateur et les intégrer au store //////////////////////////////
      dispatch(setFirstName(infos.firstName));
      dispatch(setLastName(infos.lastName));
      dispatch(setId(infos.id))
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
