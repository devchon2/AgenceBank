import style from './CountComponents.module.css'
import { Link } from 'react-router-dom'

export default function CountComponent({count, title, balanceType}) {
  return (
    <section className={style.account}>
        <div className={style.accountContainer}>
          <h3 className={style.accountTitle} >{title}</h3>
          <p className={style.accountCount} >${count}</p>
          <p className={style.accountDescription}>{balanceType}</p>
        </div>
        <div className={style.accountCta}>
          <Link className={style.transactionBtn} to='/profile'>View transactions
          </Link>
        </div>
      </section>
  )
}