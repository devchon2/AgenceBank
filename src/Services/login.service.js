import axios from 'axios';
import { set } from '../Services/context.reducer.js'

async function fetch_Token(password,email) {

  axios.defaults.baseURL = 'http://localhost:3001';

  
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
        set('firstName',firstName)
        set('lastName',lastName)
        set('id',id)
        return true
      } 
    })
}

async function put_NewInfos(token, firstName, lastName) {

  
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
    })
  }





export { fetch_Token, fetch_UserInfos, put_NewInfos };