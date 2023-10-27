
const SET_ID = 'SET_ID';

const setId = (id) => ({
  type: SET_ID,
  payload: id
});

const REMOVE_ID = 'REMOVE_ID';

const removeId = () => ({
  type: REMOVE_ID
});


export { setId, removeId };