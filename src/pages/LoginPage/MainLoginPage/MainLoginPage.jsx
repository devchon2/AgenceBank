import style from './MainLoginPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function MainLoginPage() {
return (

<main className={style.bg_dark}>
  < div className={style.signIn_Container}>
  <FontAwesomeIcon className={style.title_Login_Icon} icon={faUserCircle}/>
    <h1 className={style.title}>Sign In</h1>
    <form >
      <div className={style.input_Container}>
      <label className={style.label} htmlFor="username">
        Username
      </label>
      
      <input
        className={style.input}
        type="text"
        id="username"
        name="username"
        
      />
      </div>
      <div className={style.input_Container}>
      <label className={style.label} htmlFor="password">
        Password
      </label>
    
      <input
        className={style.input}
        type="current-password"
        id="password"
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
        <button className={style.button} type="submit">
          Sign in
        </button>
      </div>
    </form>
  </div>
</main>
  
  )
  }
