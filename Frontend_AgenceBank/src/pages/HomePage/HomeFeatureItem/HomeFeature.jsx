import style from './HomeFeature.module.css';

/**
 * HomeFeature component displaying a feature with an icon, title, and subtitle.
 * @param {Object} props - The component's props.
 * @param {string} props.icon - The icon image URL.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.subTitle - The subtitle of the feature.
 * @returns {JSX.Element} The HomeFeature component.
 */
export default function HomeFeature({ icon, title, subTitle }) {
  // Extract the type from the icon URL
  const type = icon.split('-')[1].split('.')[0];

  return (
    <div className={style.feature_item}>
      <img src={icon} alt={`${type} icon`} className={style.feature_icon} />
      <h3 className={style.feature_title}>{title}</h3>
      <p className={style.feature_subtitle}>
        {subTitle}
      </p>
    </div>
  );
};
