import { useEffect, useState } from "react"
import style from './TitleForm.module.css'
import { put_NewInfos } from '../../../../Services/login.service.js'
import { useDispatch, useSelector } from "react-redux"
import { set_FirstName, set_LastName } from "../../../../Redux/UserReducer/UserSlice.js"

export default function TitleForm({ showSaveBtn, showCancelBtn, showEditBtn, showTitle, showForm, Edit_Btn, Cancel_Btn, }) {
  // Get user data and token from Redux state
  const ftName = useSelector(state => state.user.firstName)
  const ltName = useSelector(state => state.user.lastName)
  const token = useSelector(state => state.login.token)

  // Define state variables for first name and last name
  const [fstName, setFstName] = useState(ftName)
  const [lstName, setLstName] = useState(ltName)
  const dispatch = useDispatch()
  
  // Function to handle updating the user's name
  async function handle_NewName(e) {
    e.preventDefault()
    
    // Call the API to update user information
    await put_NewInfos(token, fstName, lstName)
    
    // Dispatch updated first and last names to Redux store
    dispatch(set_FirstName(fstName))
    dispatch(set_LastName(lstName))
    
    // Call the Cancel_Btn function to hide the form and show the title
    Cancel_Btn()
  }

  // Update state when user data changes
  useEffect(() => {
    setFstName(ftName)
    setLstName(ltName)
  }, [ftName, ltName])

  // Determine CSS classes for various elements based on their visibility
  const saveBtn = showSaveBtn === 'visible' ? style.visible : style.hidden
  const title = showTitle === 'visible' ? style.visible : style.hidden
  const editBtn = showEditBtn === 'visible' ? style.visible : style.hidden
  const cancelBtn = showCancelBtn === 'visible' ? style.visible : style.hidden
  const form = showForm === 'visible' ? style.visible : style.hidden

  return (
    <>
      {/* Title and User Name */}
      <h1 className={style.title}>
        Welcome back
        {/* Display User Name */}
        <div id='userTitleName' className={`${style.userTitleName} ${title}`}>
          <span className={style.firstName}>{`${fstName} `}</span>
          <span className={style.lastName}>{`${lstName}`}</span> !
        </div>
  
        {/* Form for Editing User Name */}
        <form id='userTitleForm' className={`${style.userTitleForm} ${form}`}>
          {/* Input Fields for First Name and Last Name */}
          <div id='userTitleButtonContainer' className={style.userTitleInputContainer}>
            <input
              type="text"
              id="firstName"
              placeholder={fstName}
              className={style.userTitleInput}
              onChange={(e) => {
                if (e.target.value.trim() !== '') {
                  setFstName(e.target.value)
                  }
                }}
                
            />
            <input
              type="text"
              id="lastName"
              placeholder={lstName}
              className={style.userTitleInput}
              onChange={(e) => {
                if (e.target.value.trim() !== '') {
                  setLstName(e.target.value)
                  }
                }}
            />
          </div>
          {/* Buttons for Save and Cancel */}
          <div className={style.userTitleButtonContainer}>
            <button
              key={Math.random()}
              className={`${style.userTitleButton} ${saveBtn}`}
              type='submit'
              onClick={handle_NewName}
            >
              Save
            </button>
            <button
              key={Math.random()}
              className={`${style.userTitleButton} ${cancelBtn}`}
              type='reset'
              onClick={Cancel_Btn}
            >
              Cancel
            </button>
          </div>
        </form>
      </h1>
  
      {/* Edit Button */}
      <div id='editBtnContainer' className={`${editBtn} ${style.editBtnContainer}`}>
        <button id='editBtn' className={style.button} onClick={Edit_Btn}>
          Edit Name
        </button>
      </div>
    </>
  )
}