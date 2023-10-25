import axios from 'axios';
import { setToken, setFtName, setLtName, setId, setState } from '../Services/context.reducer.js'

async function fetch_Token(password, email) {

  try {
    axios.defaults.baseURL = 'http://localhost:3001';
    const basePath = '/api/v1';
    const reponse = await axios.request({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: `${basePath}/user/login`,
      data: {
        'email': email,
        'password': password
      },
    })
    
    if (reponse.data.status === 200) {
      const { body } = reponse.data;
      const { token } = body;
      return token
    }
  }
  catch (error) {
    return false
  }  
  return null
}


async function fetch_UserInfos(token) {


  axios.defaults.baseURL = 'http://localhost:3001';
  const basePath = '/api/v1';

  const user = await axios.request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: 'post',
    url: `${basePath}/user/profile`,
    // }).then(
    //   (response) => response.data)
    //   .then((data) => {
    //     const { status, body } = data;
    //     if (status === 200) {

    //       // setState({'firstName':firstName,'lastName':lastName,'token':token})
    //       // setFtName(firstName)
    //       // setLtName(lastName)
    //       return body
    //     } else {
    //       return false
    //     }
  })
  if (user.data.status === 200) {
    return user.data.body
  }
  return null
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
      console.log('reponse du put', response.data)
      setState({ 'firstName': firstName, 'lastName': lastName })

      return response.data
    })

}





export { fetch_Token, fetch_UserInfos, put_NewInfos };