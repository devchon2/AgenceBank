

function get_Token(){
  return localStorage.getItem('token')
}

function set_Token(token){
  localStorage.setItem('token',token)
}

function remove_Token(){
  localStorage.removeItem('token')
}

function get_FtName(){
  return get_State().firstName
}

function get_LtName(){
  return get_State().lastName

}


function get_State(){
  return  JSON.parse(localStorage.getItem('state'))
}

function set_State(array){

  localStorage.setItem('state',JSON.stringify({'firstName':array[0],'lastName': array[1],'token': array[2]}))
}

function remove_State(){
  
    localStorage.removeItem('state')
 
}



export { get_Token, set_Token, remove_Token, get_FtName, get_LtName, get_State, set_State, remove_State }
