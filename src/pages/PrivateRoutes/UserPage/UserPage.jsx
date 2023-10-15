import style from './UserPage.module.css'

export default function UserPage() {
  return (
    <main className={style.bg_dark}>
      <div className={style.hero}>
        <h1 className={style.title}>
          WelCome back{" "}
          <span className={style.userTitleName}>Tony Jarvis!</span>
        </h1>

        <div className={style.button_container}>
          <button className={style.button}>Edit Name </button>
        </div>
      </div>
    </main>
  );

}