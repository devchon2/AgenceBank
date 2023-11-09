import style from './Transaction.module.css'
import { Link } from 'react-router-dom'

// CountComponent is a reusable component for displaying an account's information and a link to view transactions.
export default function CountComponent({ id, count, title, balanceType }) {
  return (
    // The outer section element representing the account container.
    <section className={style.account}>
      <div className={style.accountContainer}>
        {/* Account title */}
        <h3 className={style.accountTitle}>{title}</h3>
        {/* Account count */}
        <p className={style.accountCount}>${count}</p>
        {/* Description of the account balance type */}
        <p className={style.accountDescription}>{balanceType}</p>
      </div>
      <div className={style.accountCta}>
        {/* Link to view transactions for this account */}
        <Link className={style.transactionBtn} to={`/account/${id}`}>View transactions</Link>
      </div>
    </section>
  )
}
