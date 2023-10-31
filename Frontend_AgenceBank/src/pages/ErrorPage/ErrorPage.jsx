
import style from "./ErrorPage.module.css";

export default function ErrorPage({error = '404', message = "Oups! cette page n'est pas disponible actuellement"}) {
  const  number  = [...error]
 
  return (
  
    <div className={style.errorPage} >
      
      <div className={style.errorPageContainer}>
        <h1 className={style.errorTitle}>
          {  number.map((n, index) => {
          return <span key={index} className={style.letter} >{n}</span>})
}
        </h1>
        <p className={style.errorMessage}>{message}</p>
      </div>
         
    </div>

  );
}