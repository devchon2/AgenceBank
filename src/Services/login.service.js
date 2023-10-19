import axios from 'axios';
import {get, set } from '../Services/context.reducer.js'

async function fetch_Token() {

  axios.defaults.baseURL = 'http://localhost:3001';

  const email = document.getElementById('userMail').value;
  const password = document.getElementById('userPassword').value;
  const basePath = '/api/v1';


  return await axios.request({
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
      return true
    }).catch((error) => {
      console.log(error);
    });
}


async function fetch_UserInfos() {
  
  const token = get('token')
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
        set('firstName',firstName)
        set('lastName',lastName)
        set('id',id)
        return true
      } else {
        return false
      }
    }).catch((error) => {
      console.log(error);
    });
}

async function put_NewInfos() {

  const token = get('token')
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  axios.request( 
    {
      method: 'put',
      url: 'http://localhost:3001/api/v1/user/profile',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: {
        firstName: firstName,
        lastName: lastName
      }
    }).then((response) => {
      console.log('reponse du put',response.data)    
      return response.data
    }).then((data) => {
      const {body} = data

      console.log('body',body)
      const { firstName, lastName } = body
      set('firstName', firstName)
      set('lastName', lastName)
      return true
    }).catch((error) => {
      console.log(error)
    })
  }





export { fetch_Token, fetch_UserInfos, put_NewInfos };