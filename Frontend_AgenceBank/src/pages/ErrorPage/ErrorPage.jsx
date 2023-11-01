import React from 'react';
import style from "./ErrorPage.module.css";

/**
 * Composant ErrorPage - Affiche une page d'erreur personnalisée
 * 
 * @param {Object} props - Les propriétés passées au composant
 * @param {string} [props.error='404'] - Le code d'erreur à afficher
 * @param {string} [props.message="Oups! cette page n'est pas disponible actuellement"] - Le message d'erreur à afficher
 * 
 * @returns {JSX.Element}
 */
export default function ErrorPage({error = '404', message = "Oups! cette page n'est pas disponible actuellement"}) {
  // Découpage du code d'erreur en tableau pour un affichage personnalisé
  const number = [...error];

  return (
    <div className={style.errorPage}>
      <div className={style.errorPageContainer}>
        
        {/* Affichage du code d'erreur */}
        <h1 className={style.errorTitle}>
          {number.map((n, index) => {
            return <span key={index} className={style.letter}>{n}</span>;
          })}
        </h1>
        
        {/* Affichage du message d'erreur */}
        <p className={style.errorMessage}>{message}</p>
        
      </div>
    </div>
  );
}
