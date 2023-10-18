
import style from "./ErrorPage.module.css";

export default function ErrorPage({error, message}) {
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