import style from './MainLoginPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function MainLoginPage() {
return (

<main className={style.bg_dark}>
  < div className={style.signIn_Container}>
  <FontAwesomeIcon className={style.header_Login_Icon} icon={faUserCircle}/>
    <h1 className={style.title}>Sign In</h1>
    <form className={style.form}>
      <label className={style.label} htmlFor="username">
        Username
      </label>
      <input
        className={style.input}
        type="text"
        id="username"
        name="username"
        
      />
      <label className={style.label} htmlFor="password">
        Password
      </label>
      <input
        className={style.input}
        type="current-password"
        id="password"
        name="password"
      />
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
