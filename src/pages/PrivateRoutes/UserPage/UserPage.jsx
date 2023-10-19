import style from './UserPage.module.css'
import { get, set } from '../../../Services/context.reducer.js'
import { put_NewInfos } from '../../../Services/login.service.js'
import { useState, useEffect } from 'react'
import CountComponent from './CountComponents/CountComponent.jsx'

const accounts = [
  {
    id: 1,
    title: 'Argent Bank Checking (x8349)',
    amount: '2,082.79',
    balanceType: 'Available Balance',
  },
  {
    id: 2,
    title: 'Argent Bank Savings (x6712)',
    amount: '10,928.42',
    balanceType: 'Available Balance',
  },
  {
    id: 3,
    title: 'Argent Bank Credit Card (x8349)',
    amount: '184.30',
    balanceType: 'Current Balance',
  },
]


export default function UserPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')  

  

function handle_Edit_Btn() {
  const formContainer = document.getElementById('userTitleForm')
  const title = document.getElementById('userTitleName')
  const editBtn = document.getElementById('editBtnContainer')

  console.log('title', title)
  title.classList.toggle(style.hidden)
  title.classList.toggle(style.visible)


  console.log('formContainer', formContainer)
  formContainer.classList.toggle(style.visible)
  formContainer.classList.toggle(style.hidden)

  console.log('editBtn', editBtn)
  editBtn.classList.toggle(style.hidden)
  editBtn.classList.toggle(style.visible)


}

function handle_Cancel_Btn() {
  const formContainer = document.getElementById('userTitleForm')
  const title = document.getElementById('userTitleName')
  const editBtn = document.getElementById('editBtnContainer')

  title.classList.add(style.visible)
  title.classList.remove(style.hidden)

  formContainer.classList.add(style.hidden)
  formContainer.classList.remove(style.visible)

  editBtn.classList.add(style.visible)
  editBtn.classList.remove(style.hidden)


}

function handle_NewName(e) {
  e.preventDefault()
  const token = get('token')
  console.log('token', token)
  const set_NewName = async () => {
    const putInfos = await put_NewInfos(token, firstName, lastName).catch((err) => console.log(err))
    
    
    setFirstName(firstName)
    setLastName(lastName)
    return putInfos
    }
  
  set_NewName()      
  handle_Cancel_Btn()
}

useEffect(() => {
  const fName = get('firstName')
  const lName = get('lastName')
  setFirstName(fName)
  setLastName(lName)
}
, [firstName, lastName])





  return (
    <main className={style.bg_dark}>
      <div className={style.hero}>
        <h1 className={style.title}>
          Welcome back
          <span id='userTitleName' className={`${style.userTitleName} ${style.visible}`} >{`${firstName} ${lastName}`}!</span>

          <form id='userTitleForm' className={`${style.userTitleForm} ${style.hidden}`} >

            <div id='userTitleButtonContainer' className={style.userTitleInputContainer}>

              <input type="text" id="firstName" placeholder={firstName} className={style.userTitleInput} onChange={(e) => setFirstName(e.target.value)}/>
              <input type="text" id="lastName" placeholder={lastName} className={style.userTitleInput} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className={style.userTitleButtonContainer}>
              <button key={Math.random()} className={style.userTitleButton} type='submit' onClick={handle_NewName}>Save</button>
              <button key={Math.random()} className={style.userTitleButton} type='reset' onClick={handle_Cancel_Btn}>Cancel</button>
            </div>
          </form>


        </h1>

        <div id='editBtnContainer' className={`${style.visible} ${style.editBtnContainer}`}>
          <button id='editBtn' className={style.button}
            onClick={handle_Edit_Btn}>Edit Name </button>
        </div>
      </div>

      
        {accounts.map((account) => (
          <CountComponent key={account.id} count={account.amount} title={account.title} balanceType={account.balanceType} />
        ))}
      
    </main>
  )
}