let savetoken = (token) => {
  localStorage.setItem('token', token);
}

let logout = (token) => {
  localStorage.removeItem('token');
}

let isAuth = () => {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}