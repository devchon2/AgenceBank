import style from "./ErrorPage.module.css";

/**
 * ErrorPage component for displaying error messages.
 * @param {Object} props - The component's props.
 * @param {string} props.error - The error code (e.g., '404').
 * @param {string} props.message - The error message.
 * @returns {JSX.Element} The ErrorPage component.
 */
export default function ErrorPage({ error = '404', message = "Oops! This page is currently unavailable" }) {
  const number = [...error];  //split the error code into an array of characters
 
  return (
    <div className={style.errorPage}>
      <div className={style.errorPageContainer}>
        <h1 className={style.errorTitle}>
          {number.map((n, index) => (  //nuanced colors for each letters
            <span key={index} className={style.letter}>{n}</span>
          ))}
        </h1>
        <p className={style.errorMessage}>{message}</p> {/* Error message */}
      </div>
    </div>
  );
}
