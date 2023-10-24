import style from './ProfilePage.module.css'
import TransactionModule from './TransactionCount/TransactionModule'

const Datas = [
  { date: 'June 20th, 2020',
  description: 'Golden Sun Bakery',
  amount: '5.00',
  balance: '2,082.79',
  category: 'Food',
  transactionType: 'Electronic',
  notes: '',
},
{ date: 'June 20th, 2020',
  description: 'Golden Sun Bakery',
  amount: '5.00',
  balance: '2,082.79',
  category: 'Food',
  transactionType: 'Electronic',
  notes: '',
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
},
{ date: 'June 20th, 2020',
description: 'Golden Sun Bakery',
amount: '5.00',
balance: '2,082.79',
category: 'Food',
transactionType: 'Electronic',
notes: '',
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
      {Datas.map((obj, index) =>{
        console.log('date', obj.date)
        console.log('description', obj.description)
        console.log('amount', obj.amount)
        console.log('balance', obj.balance)
        console.log('category', obj.category)
        console.log('transactionType', obj.transactionType)
        console.log('Notes', obj.notes)
        return (<TransactionModule key={index} date={obj.date} description={obj.description} amount={obj.amount} balance={obj.balance} category={obj.category} transactionType={obj.transactionType} />)
})}
      
      
      </section>
    </main>
  )
}
        