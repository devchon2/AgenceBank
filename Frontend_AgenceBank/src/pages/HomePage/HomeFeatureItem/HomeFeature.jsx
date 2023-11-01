import React from 'react';
import style from './HomeFeature.module.css';

/**
 * Composant HomeFeature - Affiche une fonctionnalité sur la page d'accueil
 * 
 * @param {Object} props - Les propriétés passées au composant
 * @param {string} props.icon - L'icône représentant la fonctionnalité
 * @param {string} props.title - Le titre de la fonctionnalité
 * @param {string} props.subTitle - Le sous-titre de la fonctionnalité
 * 
 * @returns {JSX.Element}
 */
export default function HomeFeature({icon, title, subTitle}) {
  // Extraction du type de l'icône à partir de son nom
  const type = icon.split('-')[1].split('.')[0];

  return (
    <div className={style.feature_item}>
      
      {/* Affichage de l'icône */}
      <img src={icon} alt={`${type} icon`} className={style.feature_icon} />
      
      {/* Affichage du titre */}
      <h3 className={style.feature_title}>{title}</h3>
      
      {/* Affichage du sous-titre */}
      <p className={style.feature_subtitle}>{subTitle}</p>
      
    </div>
  );
}
