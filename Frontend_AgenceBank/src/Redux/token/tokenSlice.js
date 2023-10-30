const initialState = null;


function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.payload
    case 'REMOVE_TOKEN':
      return initialState;
    default:
      return state;
  }
}

export default tokenReducer;