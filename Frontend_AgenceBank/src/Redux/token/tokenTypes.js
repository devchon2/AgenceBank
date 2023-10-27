
const SET_TOKEN = 'SET_TOKEN';

const setToken = token => ({
  type: SET_TOKEN,
  payload: token
});

const REMOVE_TOKEN = 'REMOVE_TOKEN';

const removeToken = () => ({
  type: REMOVE_TOKEN
});

export { setToken, removeToken };