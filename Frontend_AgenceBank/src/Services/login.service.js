import Axios from 'axios';

async function fetch_Token(password, email) {

  try {
    Axios.defaults.baseURL = 'http://localhost:3001/api/v1';
    const reponse = await Axios.request({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: `/user/login`,
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


  

  const user = await Axios.request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: 'post',
    url: `/user/profile`,
    
  })
  if (user.data.status === 200) {
    return user.data.body
  }
  return null
}

async function put_NewInfos(token, firstName, lastName) {


  const reponse = await Axios.request(
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
    })
    if (reponse.data){
      console.log(reponse.data)
    }
  

  return null
}





export { fetch_Token, fetch_UserInfos, put_NewInfos };