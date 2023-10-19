import style from './CountComponents.module.css'

export default function CountComponent({count, title, balanceType}) {
  return (
    <section className={style.account}>
        <div className={style.accountContainer}>
          <h3 className={style.accountTitle} >{title}</h3>
          <p className={style.accountCount} >${count}</p>
          <p className={style.accountDescription}>{balanceType}</p>
        </div>
        <div className={style.accountCta}>
          <button className={style.transactionBtn}>View transactions</button>
        </div>
      </section>
  )
}