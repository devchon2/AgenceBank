import style from './UserPage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default  function UserPage() {
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
        const { status, body,  } = data;
        const { firstName, lastName, id } = body
        if (status === 200) {
          console.log('firstName', firstName);
          console.log('lastName', lastName);
          console.log('id', id);

          setUser({firstName: firstName, lastName: lastName, id: id})
        }
        return user;
      }).catch((error) => {
        console.log(error);
      });
  }
  ,[isAuth, token, user])

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
          <span className={style.userTitleName}>{`${user.firstName} ${user.lastName}`}!</span>
        </h1>

        <div className={style.button_container}>
          <button className={style.button}>Edit Name </button>
        </div>
      </div>
    </main>
  )
}