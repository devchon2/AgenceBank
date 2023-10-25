import axios from 'axios';

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
    
  })
  if (user.data.status === 200) {
    return user.data.body
  }
  return null
}

async function put_NewInfos(token, firstName, lastName) {


  const reponse = await axios.request(
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