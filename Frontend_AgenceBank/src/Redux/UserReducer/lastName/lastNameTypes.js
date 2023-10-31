

const SET_LASTNAME = 'SET_LASTNAME';

const setLastName = lastName => ({
  type: SET_LASTNAME,
  payload: lastName
});

const REMOVE_LASTNAME = 'REMOVE_LASTNAME';

const removeLastName = () => ({
  type: REMOVE_LASTNAME
});


export { setLastName, removeLastName };