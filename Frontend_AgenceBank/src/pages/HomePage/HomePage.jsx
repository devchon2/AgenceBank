import React from 'react';
import style from './HomePage.module.css';
import Hero from './Hero/Hero.jsx';
import HomeFeature from './HomeFeatureItem/HomeFeature.jsx';
import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';
import { useSelector } from 'react-redux';

/**
 * Tableau des fonctionnalités à afficher sur la page d'accueil
 */
const featuresArray = [
  {
    icon: iconChat,
    key: 'chat',
    title: 'You are our #1 priority',
    subTitle: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: iconMoney,
    key: 'money',
    title: 'More savings means higher rates',
    subTitle: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: iconSecurity,
    key: 'security',
    title: 'Security you can trust',
    subTitle: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

/**
 * Composant HomePage - Affiche la page d'accueil du site
 * 
 * @returns {JSX.Element}
 */
export default function HomePage() {
  console.log('HomePage store',useSelector(state => state));
  return (
    <main className={style.main}>
      
      {/* Section du héros */}
      <Hero />
      
      {/* Section des fonctionnalités */}
      <section className={style.featuresSection}>
        {featuresArray.map((feature) => (
          <HomeFeature 
            key={feature.key} 
            icon={feature.icon} 
            title={feature.title} 
            subTitle={feature.subTitle} 
          />
        ))}
      </section>
      
    </main>
  );
}
