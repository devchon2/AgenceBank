import style from './LoginPage.module.css'
import { fetch_Token } from '../../../Services/login.service.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';





export default function LoginPage() {
  const navigate = useNavigate()

  const handle_Form = async (e) => {
    console.log('entrée dans handleform')
    e.preventDefault()
    const token = await fetch_Token().catch((err) => {
      console.log('erreur dans handleform', err)

    })

    console.log('token dans handleForm', token)

    if (token) {
      console.log('redirection vers user')
      navigate("/user")

    }
    const forgot = document.getElementById('forgot')
    forgot.classList.remove(style.hidden)
    forgot.classList.add(style.forgot)

    const input = document.getElementById('userPassword')
    input.style.marginBottom = '0px'
  }


  return (

    <main className={style.bg_dark}>
      <div className={style.signIn_Container}>
        <FontAwesomeIcon
          className={style.title_Login_Icon}
          icon={faUserCircle}
        />
        <h1 className={style.title}>Sign In</h1>
        <form  >
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

            />
            <p id='forgot' className={style.hidden}>Your credentials are invalids!</p>
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
            <button className={style.button} type="button" onClick={handle_Form}  >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>

  )


}