import style from './Hero.module.css';


export default function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.hero_Content}>
            


            <p className={style.subtitle}>No fees.</p> 
            <p className={style.subtitle}>No minimum deposit.</p> 
            <p className={style.subtitle}>High interest rates.</p>
            <p className={style.text}>Open a savings account with Argent Bank today</p>
            </div>
        </div>
    )
}