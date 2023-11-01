


function tokenReducer(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.payload
    case 'REMOVE_TOKEN':
      return state;
    default:
      return state;
  }
}

export default tokenReducer;