import { useEffect, useState } from "react"
import style from './TitleForm.module.css'
import { put_NewInfos } from '../../../../Services/login.service.js'
import { useDispatch, useSelector } from "react-redux"
import { setFirstName } from "../../../../Redux/firstName/firstNameTypes.js"
import { setLastName } from "../../../../Redux/lastName/lastNameTypes.js"


export default function TitleForm({ showSaveBtn, showCancelBtn, showEditBtn, showTitle, showForm, Edit_Btn, Cancel_Btn, }) {
  const ftName = useSelector(state => state.firstName.firstName)
  const ltName = useSelector(state => state.lastName.lastName)
  console.log('ftName', ftName)

  const [fstName, setFstName] = useState(ftName)
  const [lstName, setLstName] = useState(ltName)
  const dispatch = useDispatch()
const token = useSelector(state => state.token.token)
  async function handle_NewName(e) {

    e.preventDefault()
    
    console.log('token', token)

    await put_NewInfos(token, fstName, lstName)
    dispatch(setFirstName(fstName))
    dispatch(setLastName(lstName))
    Cancel_Btn()
  }

  useEffect(() => {

    setFstName(ftName)
    setLstName(ltName)
  }, [ftName, ltName])




  const saveBtn = showSaveBtn === 'visible' ? style.visible : style.hidden
  const title = showTitle === 'visible' ? style.visible : style.hidden
  const editBtn = showEditBtn === 'visible' ? style.visible : style.hidden
  const cancelBtn = showCancelBtn === 'visible' ? style.visible : style.hidden
  const form = showForm === 'visible' ? style.visible : style.hidden


  return (
    <>
      <h1 className={style.title}>
        Welcome back
        <div id='userTitleName' className={`${style.userTitleName} ${title}`}>
          <span className={style.firstName} > {`${fstName} `}</span>
          <span className={style.lastName} > {`${lstName}`} </span> !</div>

          <form id='userTitleForm' className={`${style.userTitleForm} ${form}`} >

            <div id='userTitleButtonContainer' className={style.userTitleInputContainer}>

              <input type="text" id="firstName" placeholder={fstName} className={style.userTitleInput} onChange={(e) => setFstName(e.target.value)} />
              <input type="text" id="lastName" placeholder={lstName} className={style.userTitleInput} onChange={(e) => setLstName(e.target.value)} />
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
