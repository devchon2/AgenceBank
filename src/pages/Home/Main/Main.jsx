import style from './Main.module.css';
import Hero from '../../../Components/Hero/Hero.jsx';
import iconChat from '../../../assets/icon-chat.png';
import iconMoney from '../../../assets/icon-money.png';
import iconSecurity from '../../../assets/icon-security.png';
import HomeFeature from '../../../Components/HomeFeatureItem/HomeFeature.jsx';

const featuresArray = [
  {
    icon: iconChat,
    key :'chat',
    title: 'You are our #1 priority',
    subTitle: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: iconMoney,
    key :'money',

    title: 'More savings means higher rates',
    subTitle: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: iconSecurity,
    key:'security',
    title: 'Security you can trust',
    subTitle: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];



export default function Main() {
  return (
    <main className={style.main}>
    <Hero/>
    <section className={style.featuresSection}>
    {featuresArray.map((feature) => (
      <HomeFeature key={feature.key} icon={feature.icon} title={feature.title} subTitle={feature.subTitle} />
    ))}
    </section>
    </main>
  );
}