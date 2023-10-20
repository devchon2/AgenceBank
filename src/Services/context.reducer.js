import {createContext} from 'react'


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
  return localStorage.getItem('lastName')
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


function UserContext(infos){
 return createContext(infos)
}



export { getToken, setToken, removeToken, setFtName, removeFtName, getFtName, setLtName, removeLtName, getLtName, setId, getId, removeId,UserContext }
