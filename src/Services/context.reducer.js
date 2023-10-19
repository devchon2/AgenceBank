

function getToken(){
  return localStorage.getItem('token')
}

function setToken(token){
  localStorage.setItem('token',token)
}

function removeToken(){
  localStorage.removeItem('token')
}

function setFtName(firstname){
  localStorage.setItem('firstname',firstname)
}

function removeFtName(){
  localStorage.removeItem('firstname')
}

function getFtName(){
  return localStorage.getItem('firstname')
}

function setLtName(lastname){
  localStorage.setItem('lastname',lastname)
}

function removeLtName(){
  localStorage.removeItem('lastname')
}

function getLtName(){
  return localStorage.getItem('lastname')
}

function setId(id){
  localStorage.setItem('id',id)
}

function getId(){
  return localStorage.getItem('id')
}

function removeId(){
  localStorage.removeItem('id')
}

export { getToken, setToken, removeToken, setFtName, removeFtName, getFtName, setLtName, removeLtName, getLtName, setId, getId, removeId }
