import axios from 'axios';
import { setToken,setFtName,setLtName, setId, setState } from '../Services/context.reducer.js'

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
      setToken(token)
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
      const { firstName, lastName } = body
      if (status === 200) {
        setFtName(firstName)
        setLtName(lastName)
        setState(firstName,lastName,token)
        return true
      } else {
        return false
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

    setFtName(firstName)
    setLtName(lastName)

  }





export { fetch_Token, fetch_UserInfos, put_NewInfos };