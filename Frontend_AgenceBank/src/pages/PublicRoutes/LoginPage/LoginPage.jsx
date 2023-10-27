import style from "./LoginPage.module.css";
import { fetch_Token } from "../../../Services/login.service.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetch_UserInfos } from "../../../Services/login.service.js";
import {
  set_State,
  set_Token,
} from "../../../Services/context.reducer.js";
import {store } from "../../../Redux/store.js";
import { useSelector, useDispatch } from "react-redux";
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

  const first = useSelector((state) => state.firstName);
  const last = useSelector((state) => state.lastName);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
console.log("store", store.getState());

  const navigate = useNavigate();

  const handle_Form = async (e) => {
    e.preventDefault();
    console.log("entrée dans handleForm");
    const token = await fetch_Token(password, email);
    //Récupérer le token et l'intégrer au store 
    dispatch(set_Token(token));
  


    console.log("reponse", token);
    console.log("token dans handleForm", token);

    if (token === false) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      set_Token(token);
      const infos = await fetch_UserInfos(token);
      console.log(infos);
      //Récupérer les infos de l'utilisateur et les intégrer au store //////////////////////////////
      set_State([
        infos.firstName,
        infos.lastName,
        token,
      ]);
      console.log("redirection vers user");
      navigate("/user");
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
                console.log("email", email);
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
                console.log("password", password);
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
