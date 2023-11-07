import { useEffect, useState } from "react"
import style from './TitleForm.module.css'
import { put_NewInfos } from '../../../../Services/login.service.js'
import { useDispatch, useSelector } from "react-redux"
import { set_FirstName, set_LastName } from "../../../../Redux/UserReducer/UserSlice.js"



export default function TitleForm({ showSaveBtn, showCancelBtn, showEditBtn, showTitle, showForm, Edit_Btn, Cancel_Btn, }) {
  const ftName = useSelector(state => state.user.firstName)
  const ltName = useSelector(state => state.user.lastName)
  const token = useSelector(state => state.login.token)

  const [fstName, setfstName] = useState(ftName)
  const [lstName, setlstName] = useState(ltName)
  const dispatch = useDispatch()
  
  async function handle_NewName(e) {
    e.preventDefault()
    
    await put_NewInfos(token, fstName, lstName)
    dispatch(set_FirstName(fstName))
    dispatch(set_LastName(lstName))
    Cancel_Btn()
  }

  useEffect(() => {

    setfstName(ftName)
    setlstName(ltName)
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

              <input type="text" id="firstName" placeholder={fstName} className={style.userTitleInput} onChange={(e) => setfstName(e.target.value)} />
              <input type="text" id="lastName" placeholder={lstName} className={style.userTitleInput} onChange={(e) => setlstName(e.target.value)} />
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
