import style  from './LoginPage.module.css'
import { get_Token } from '../../../Services/login.service.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  
  const HandleForm = async (e) => {
    e.preventDefault();
    const isAuth = await get_Token()
    const token = localStorage.getItem('token');
  
    console.log('token ok',   isAuth);
  
    if (isAuth === true && token !== null) {
      return(
      window.location.href = '/user'
      )
    } else {
      return (
      window.location.href = "/login"
      )
    }
  }

return( 
  
  <main className={style.bg_dark}>
      <div className={style.signIn_Container}>
        <FontAwesomeIcon
          className={style.title_Login_Icon}
          icon={faUserCircle}
        />
        <h1 className={style.title}>Sign In</h1>
        <form  onSubmit={HandleForm}>
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
            <button className={style.button}  type="submit"  >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>

)


}