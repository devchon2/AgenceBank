import { useState } from "react"
import style from './TitleForm.module.css'
import { getToken, getFtName, getLtName, setState, getState, setFtName, setLtName } from '../../../../Services/context.reducer.js'
import { put_NewInfos } from '../../../../Services/login.service.js'

export default function TitleForm({ showSaveBtn, showCancelBtn, showEditBtn, showTitle, showForm, Edit_Btn, Cancel_Btn, }) {
  const [firstName, setFirstName] = useState(getFtName())
  const [lastName, setLastName] = useState(getLtName())
async function handle_NewName(e) {
      e.preventDefault()
      const token = getToken()
      console.log('token', token)
      await put_NewInfos(token, firstName, lastName)
      setState({'firstName': firstName, 'lastName': lastName, 'token': token})
      setFirstName(firstName)
      setLastName(lastName)

      console.log('firstName', getState())
      Cancel_Btn()
    }

  
  
    

    
    const saveBtn = showSaveBtn === 'visible' ? style.visible : style.hidden
    const title = showTitle === 'visible' ? style.visible : style.hidden
    const editBtn = showEditBtn === 'visible' ? style.visible : style.hidden
    const cancelBtn = showCancelBtn === 'visible' ? style.visible : style.hidden
    const form = showForm === 'visible' ? style.visible : style.hidden


    return (
      <>
        <h1 className={style.title}>
          Welcome back
          <span id='userTitleName' className={`${style.userTitleName} ${title}`} >{`${firstName} ${lastName}`}!</span>

          <form id='userTitleForm' className={`${style.userTitleForm} ${form}`} >

            <div id='userTitleButtonContainer' className={style.userTitleInputContainer}>

              <input type="text" id="firstName" placeholder={firstName} className={style.userTitleInput} onChange={(e) => {
                console.log('e.target.value', e.target.value);
                setFirstName(e.target.value)}} />
              <input type="text" id="lastName" placeholder={lastName} className={style.userTitleInput} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className={style.userTitleButtonContainer}>
              <button key={Math.random()} className={`${style.userTitleButton} ${saveBtn}`} type='submit' onClick={handle_NewName}>Save</button>
              <button key={Math.random()} className={`${style.userTitleButton} ${cancelBtn}`} type='reset' onClick={Cancel_Btn}>Cancel</button>
            </div>
          </form>


        </h1>

        <div id='editBtnContainer' className={`${editBtn} ${style.editBtnContainer}`}>
          <button id='editBtn' className={style.button}
            onClick={Edit_Btn}>Edit Name </button>
        </div>
      </>

    )
  }
