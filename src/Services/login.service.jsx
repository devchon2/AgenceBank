import { Navigate } from 'react-router-dom';
import axios from 'axios';

async function get_Token() {
  let isAuth = false;

  axios.defaults.baseURL = 'http://localhost:3001';

  const email = document.getElementById('userMail').value;
  const password = document.getElementById('userPassword').value;
  const basePath = '/api/v1';

  console.log(email, password);
 
  await axios.request({
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
    (response) => {
      console.log(response.data);
      return response.data;

    }).then((data) => {
      const { status, body, message, } = data;
      const { token } = body
      if (status === 200) {
        isAuth = true; 
        localStorage.setItem('token', token);
        localStorage.setItem('isAuth', isAuth);
        
        console.log('token', token);
        console.log('isAuth', isAuth);
      }
      return isAuth;
  }).catch((error) => {
      console.log(error);
    });
    return isAuth;
  }

const HandleForm = async (e) => {
  e.preventDefault();
  const token = await get_Token()

  console.log('token ok',   token);

  if (token) {
    return(
    window.location.href = '/user'
    )
  }
  else {
    return (
    window.location.href = "/login"
    )
  }
}





export default HandleForm;