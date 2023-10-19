import style from './UserPage.module.css'
import { get, set } from '../../../Services/context.reducer.js'
import { put_NewInfos } from '../../../Services/login.service.js'

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

  const firstName = document.getElementById('firstName').value ? document.getElementById('firstName').value : get('firstName')
  console.log('firstName', firstName)

  const lastName = document.getElementById('lastName').value ? document.getElementById('lastName').value : get('lastName')

  const set_NewName = async () => {
    const putInfos = await put_NewInfos(token, firstName, lastName)
    if (putInfos) {
      set('firstName', firstName)
      set('lastName', lastName)
      handle_Cancel_Btn()
    }
  }
  set_NewName()
}

export default function UserPage() {
  const firstName = get('firstName')
  const lastName = get('lastName')


  return (
    <main className={style.bg_dark}>
      <div className={style.hero}>
        <h1 className={style.title}>
          Welcome back
          <span id='userTitleName' className={`${style.userTitleName} ${style.visible}`} >{`${firstName} ${lastName}`}!</span>

          <form id='userTitleForm' className={`${style.userTitleForm} ${style.hidden}`} >

            <div id='userTitleButtonContainer' className={style.userTitleInputContainer}>

              <input type="text" id="firstName" placeholder={firstName} className={style.userTitleInput} />
              <input type="text" id="lastName" placeholder={lastName} className={style.userTitleInput} />
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
    </main>
  )
}