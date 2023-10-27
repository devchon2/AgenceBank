const SET_FIRSTNAME = 'SET_FIRSTNAME';

 const setFirstName = (firstName) => ({
  type: SET_FIRSTNAME,
  payload: firstName
});



const SET_LASTNAME = 'SET_LASTNAME';

 const setLastName = (lastName) => ({
  type: SET_LASTNAME,
  payload: lastName
});


export {setFirstName,setLastName}