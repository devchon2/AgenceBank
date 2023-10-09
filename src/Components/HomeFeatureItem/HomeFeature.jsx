import style from './HomeFeature.module.css';

export default function HomeFeature({icon, title, subTitle}) {
  const type = icon.split('-')[1].split('.')[0];

  return (
    <div className={style.feature_item}>
    <img src={icon} alt={`${type} icon`} className={style.feature_icon} />
    <h3 className={style.feature_title}>{title}</h3>
    <p className={style.feature_subtitle}>
      {subTitle}
    </p>
  </div>
  
    )
};