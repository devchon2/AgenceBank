import style from './UserPage.module.css'
import { getToken, getFtName, getLtName, getState } from '../../../Services/context.reducer.js'
import { put_NewInfos } from '../../../Services/login.service.js'
import { useState, useEffect } from 'react'
import CountComponent from './Transactions/Transaction.jsx'

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
  const [firstName, setFirstName] = useState(getFtName())
  const [lastName, setLastName] = useState(getLtName())
  const [showSaveBtn, setShowSaveBtn] = useState('hidden')
  const [showCancelBtn, setShowCancelBtn] = useState('hidden')
  const [showEditBtn, setShowEditBtn] = useState('visible')
  const [showTitle, setShowTitle] = useState('visible')
  const [showForm, setShowForm] = useState('hidden')


  useEffect(() => {
    console.log('state dans userpage', getState())

  }, [])

  function TitleForm({ stateSaveBtn, stateTitle, stateEditBtn, stateCancelBtn, stateForm }) {

    const saveBtn = stateSaveBtn === 'visible' ? style.visible : style.hidden
    const title = stateTitle === 'visible' ? style.visible : style.hidden
    const editBtn = stateEditBtn === 'visible' ? style.visible : style.hidden
    const cancelBtn = stateCancelBtn === 'visible' ? style.visible : style.hidden
    const form = stateForm === 'visible' ? style.visible : style.hidden


    return (
      <>
        <h1 className={style.title}>
          Welcome back
          <span id='userTitleName' className={`${style.userTitleName} ${title}`} >{`${firstName} ${lastName}`}!</span>

          <form id='userTitleForm' className={`${style.userTitleForm} ${form}`} >

            <div id='userTitleButtonContainer' className={style.userTitleInputContainer}>

              <input type="text" id="firstName" placeholder={firstName} className={style.userTitleInput} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" id="lastName" placeholder={lastName} className={style.userTitleInput} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className={style.userTitleButtonContainer}>
              <button key={Math.random()} className={`${style.userTitleButton} ${saveBtn}`} type='submit' onClick={handle_NewName}>Save</button>
              <button key={Math.random()} className={`${style.userTitleButton} ${cancelBtn}`} type='reset' onClick={handle_Cancel_Btn}>Cancel</button>
            </div>
          </form>


        </h1>

        <div id='editBtnContainer' className={`${editBtn} ${style.editBtnContainer}`}>
          <button id='editBtn' className={style.button}
            onClick={handle_Edit_Btn}>Edit Name </button>
        </div>
      </>

    )
  }


  function handle_Edit_Btn() {
    setShowSaveBtn('visible')
    setShowCancelBtn('visible')
    setShowEditBtn('hidden')
    setShowTitle('hidden')
    setShowForm('visible')
  }

  function handle_Cancel_Btn() {
    setShowSaveBtn('hidden')
    setShowCancelBtn('hidden')
    setShowEditBtn('visible')
    setShowTitle('visible')
    setShowForm('hidden')


  }

  async function handle_NewName(e) {
    e.preventDefault()
    const token = getToken()
    console.log('token', token)
    await put_NewInfos(token, firstName, lastName)
    setFirstName(firstName)
    setLastName(lastName)
    handle_Cancel_Btn()
  }







  return (
    <main className={style.bg_dark}>
      <div className={style.hero}>
        <TitleForm stateSaveBtn={showSaveBtn} stateTitle={showTitle} stateEditBtn={showEditBtn} stateCancelBtn={showCancelBtn} stateForm={showForm} />

      </div>


      {accounts.map((account) => (
        <CountComponent key={account.id} count={account.amount} title={account.title} balanceType={account.balanceType} />
      ))}

    </main>
  )
}