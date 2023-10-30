import style from './Transaction.module.css'
import { Link } from 'react-router-dom'

export default function CountComponent({id ,count, title, balanceType}) {
  return (
    <section className={style.account}>
        <div className={style.accountContainer}>
          <h3 className={style.accountTitle} >{title}</h3>
          <p className={style.accountCount} >${count}</p>
          <p className={style.accountDescription}>{balanceType}</p>
        </div>
        <div className={style.accountCta}>
          <Link className={style.transactionBtn} to={`/account/${id}`} >View transactions
          </Link>
        </div>
      </section>
  )
}