
import style from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={style.errorPage} >
      
      <div className={style.errorPageContainer}>
        <h1 className={style.errorTitle}>
          <span className={style.firstLetter}>4</span>
          <span className={style.secondLetter}>0</span>
          <span className={style.lastLetter}>4</span> 
        </h1>
        <p className={style.errorMessage}>Oups! La page que vous demandez n'existe pas.</p>
      </div>
         
    </div>

  );
}