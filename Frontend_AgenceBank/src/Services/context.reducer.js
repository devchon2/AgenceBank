

function getToken(){
  return localStorage.getItem('token')
}

function setToken(token){
  localStorage.setItem('token',token)
}

function removeToken(){
  localStorage.removeItem('token')
}

function setFtName(firstName){
  localStorage.setItem('firstName',firstName)
}

function removeFtName(){
  localStorage.removeItem('firstName')
}

function getFtName(){
  return localStorage.getItem('firstName')
}

function setLtName(lastName){
  localStorage.setItem('lastName',lastName)
}

function removeLtName(){
  
  localStorage.removeItem('lastName')
}

function getLtName(){
  console.log('local storage getLT' ,localStorage.getItem('lastName'))

  return localStorage.getItem('lastName')
}




function getState(){
  return localStorage.getItem('state')
}

function setState(obj){
  setFtName(obj.firstName)
  setLtName(obj.lastName)

  localStorage.setItem('state',[JSON.stringify({'user':{'firstName':obj.firstName,'lastName':obj.lastName,'token':obj.token}})])
}

function removeState(element){
  if (!element ) {
    localStorage.removeItem('state')
  }
    
  if (element === 'firstName' ){
    localStorage.setItem('state').firstName = '';
  } 
  if (element ==='lastName'){
    localStorage.setItem('state').lastName = '';
  }
  if (element === 'token'){
    localStorage.setItem('state').token = '';
  } 
}



export { getToken, setToken, removeToken, setFtName, removeFtName, getFtName, setLtName, removeLtName, getLtName, getState, setState, removeState }
