import axios from 'axios';
import {get, set } from '../Services/context.reducer.js'
import { Navigate } from 'react-router-dom';

async function fetch_Token() {

  axios.defaults.baseURL = 'http://localhost:3001';

  const email = document.getElementById('userMail').value;
  const password = document.getElementById('userPassword').value;
  const basePath = '/api/v1';


  const tokenOk = await axios.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    url: `${basePath}/user/login`,
    data: {
      'email': email,
      'password': password
    },
  }).then(
    (response) => response.data)
    .then((data) => {
      const {  body } = data;
      const { token } = body
      set('token',token)
      console.log('token',token)
      return token
    }).catch((error) => {
      console.log(error);
    });
    if (tokenOk) {
      return tokenOk
    }
    return null
}


async function fetch_UserInfos(token) {
  
  axios.defaults.baseURL = 'http://localhost:3001';
  const basePath = '/api/v1';

  await axios.request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: 'post',
    url: `${basePath}/user/profile`,
  }).then(
    (response) => response.data)
    .then((data) => {
      const { status, body, } = data;
      const { firstName, lastName, id } = body
      if (status === 200) {
        
        set('user', JSON.stringify({firstName:firstName, lastName:lastName, id:id})) 
        const user = {'user': get('user')}
        return <Navigate to='/user'/>
      }
    }).catch((error) => {
      console.log(error);
    });
}






export { fetch_Token, fetch_UserInfos };