import { Navigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
const HandleForm = async (e) => {
  e.preventDefault();
  let isAuth = false;

  axios.defaults.baseURL = 'http://localhost:3001';

  const email = document.getElementById('userMail').value;
  const password = document.getElementById('userPassword').value;
  const basePath = '/api/v1';

  console.log(email, password);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  await axios.request(
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: `${basePath}/user/login`,
      data: {
        'email': email,
        'password': password
      },
    }
  ).then(
    (response) => {
      console.log(response.data);
      return response.data;

    }).then((data) => {
      const { status, body, message, } = data;
      const { token } = body
      if (status === 200) {
        console.log(message)
        isAuth = true;
        localStorage.setItem('isAuth', isAuth);
        console.log('authentication:', isAuth);
        localStorage.setItem('token', token);
        console.log('token:', token);
        return (<Navigate to={'/user'}/>);
      }
    }).catch((error) => {
      console.log(error);
    });
}





export default HandleForm;