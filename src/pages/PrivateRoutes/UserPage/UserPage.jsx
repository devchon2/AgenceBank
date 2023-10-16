import style from './UserPage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function HandleClick(){
  const formContainer = document.getElementById('userTitleForm')
  const title = document.getElementById('userTitleName')
  const editBtn = document.getElementById('editBtn')

  title.classList.add(style.hidden)
  title.classList.remove(style.visible)

  formContainer.classList.add(style.visible)
  formContainer.classList.remove(style.hidden)
  
  editBtn.classList.add(style.hidden)
  editBtn.classList.remove(style.visible)

  console.log(formContainer)
  console.log(title)
  console.log(editBtn)
 }

export default function UserPage() {
  const [user, setUser] = useState('')
  const token = localStorage.getItem('token')
  const isAuth = localStorage.getItem('isAuth')
  useEffect(() => {

    if (isAuth === false || token === null) {
      window.location.href = '/login'
    }

    axios.defaults.baseURL = 'http://localhost:3001';
    const basePath = '/api/v1';

    axios.request({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'post',
      url: `${basePath}/user/profile`,
    }).then(
      (response) => {
        console.log(response.data);
        return response.data;
      }).then((data) => {
        const { status, body, } = data;
        const { firstName, lastName, id } = body
        if (status === 200) {
          console.log('firstName', firstName);
          console.log('lastName', lastName);
          console.log('id', id)

          setUser({ firstName: firstName, lastName: lastName, id: id })
        }
        return user;
      }).catch((error) => {
        console.log(error);
      });
  }
    , [isAuth, token])

 

  if (!user) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <main className={style.bg_dark}>
      <div className={style.hero}>
        <h1 className={style.title}>
          Welcome back
          <span id='userTitleName' className={`${style.userTitleName} ${style.visible}`} >{`${user.firstName} ${user.lastName}`}!</span>

          <form id='userTitleForm' className={`${style.userTitleForm} ${style.hidden}`} >

            <div id='userTitleButtonContainer' className={style.userTitleInputContainer}>

              <input type="text" id="firstName" placeholder={user.firstName} className={style.userTitleInput} />
              <input type="text" id="lastName" placeholder={user.lastName} className={style.userTitleInput} />
            </div>
            <div className={style.userTitleButtonContainer}>
              <button key={Math.random()} className={style.userTitleButton} type='submit'>Save</button>
              <button key={Math.random()} className={style.userTitleButton} type='reset'>Cancel</button>
            </div>
          </form>


        </h1>

        <div className={style.button_container}>
          <button id='editBtn' className={style.button}
          onClick={HandleClick}>Edit Name </button>
        </div>
      </div>
    </main>
  )
}