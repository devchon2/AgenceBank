import style from './AccountPage.module.css'
import TransactionModule from './TransactionCount/TransactionModule'

const Datas = [
  { date: 'June 20th, 2020',
  description: 'Golden Sun Bakery',
  amount: '5.00',
  balance: '2,082.79',
  category: 'Food',
  transactionType: 'Electronic',
  notes: '',
  id : 1
},
{ date: 'June 20th, 2020',
  description: 'Golden Sun Bakery',
  amount: '5.00',
  balance: '2,082.79',
  category: 'Food',
  transactionType: 'Electronic',
  notes: '',
  id : 2
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
id : 3
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
id : 4
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
id : 5
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
id : 6
},
]




export default function ProfilePage() {
  return (
    <main className={style.main}>
      <section className={style.available}>
        <p className={style.title}>Argent Bank Checking (x8349)</p>
        <p className={style.amount}>$ 2,082.79</p>
        <p className={style.balanceType}>Available Balance</p>
      </section>
      <section className={style.transactionSection}>
        <div className={style.header}>

          <h2 className={style.headerTransaction}>Date</h2>
          <h2 className={style.headerTransaction}>Description</h2>
          <h2 className={style.headerTransaction}>Amount</h2>
          <h2 className={style.headerTransaction}>Balance</h2>
        </div>
      {Datas.map((obj) =>{
        
        return (<TransactionModule key={obj.id} id={obj.id} date={obj.date} description={obj.description} amount={obj.amount} balance={obj.balance} category={obj.category} transactionType={obj.transactionType} />)
})}
      
      
      </section>
    </main>
  )
}
        