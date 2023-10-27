
const SET_FIRSTNAME = 'SET_FIRSTNAME';

 const setFirstName = (firstName) => ({
  type: SET_FIRSTNAME,
  payload: firstName
});

const GET_FIRSTNAME = 'GET_FIRSTNAME';

  const getFirstName = () => ({
  type: GET_FIRSTNAME,
  
});



const REMOVE_FIRSTNAME = 'REMOVE_FIRSTNAME';

  const removeFirstName = () => ({
  type: REMOVE_FIRSTNAME,
  payload:null

});



export {getFirstName, setFirstName ,removeFirstName}